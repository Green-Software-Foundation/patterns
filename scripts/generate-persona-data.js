#!/usr/bin/env node
/**
 * Reads all catalog pattern files, extracts frontmatter + title,
 * and writes src/data/personas.ts with the per-persona pattern lists.
 */

const fs = require("fs");
const path = require("path");

const PATTERN_DIRS = ["requirements", "architecture", "development", "operations"].map(
  c => path.join(__dirname, "../docs", c)
);
const OUT_FILE = path.join(__dirname, "../src/data/personas.ts");

// ── Persona definitions ─────────────────────────────────────────────────────

const PERSONA_DEFS = [
  { slug: "ai-ml-engineer",        name: "AI/ML Engineer",        description: "Optimizes machine learning models for energy efficiency and implements sustainable AI practices to reduce computational carbon footprint." },
  { slug: "data-engineer",         name: "Data Engineer",         description: "Structures data systems and storage solutions to minimize energy consumption while maintaining performance and accessibility." },
  { slug: "devops-engineer",       name: "DevOps Engineer",       description: "Builds green CI/CD pipelines and manages infrastructure automation to minimize energy consumption across deployment processes." },
  { slug: "front-end-engineer",    name: "Front End Engineer",    description: "Develops lightweight, optimized client-side code that minimizes device energy consumption and network resource usage." },
  { slug: "infrastructure-engineer", name: "Infrastructure Engineer", description: "Manages and optimizes server infrastructure, cloud resources, and networking for maximum energy efficiency and minimal waste." },
  { slug: "product-manager",       name: "Product Manager",       description: "Incorporates sustainability metrics into product roadmaps and prioritizes features that reduce software environmental impact." },
  { slug: "security-engineer",     name: "Security Engineer",     description: "Implements security controls while minimizing energy overhead and resource consumption." },
  { slug: "software-engineer",     name: "Software Engineer",     description: "Writes energy-efficient code, implements green coding practices, and optimizes algorithms to reduce software carbon footprint." },
  { slug: "solution-architect",    name: "Solution Architect",    description: "Creates technical solution designs that meet functional requirements while minimizing energy consumption and resource waste." },
  { slug: "ux-designer",           name: "UX Designer",           description: "Designs user interfaces that promote energy-efficient behaviors and reduce unnecessary computational load through thoughtful interaction patterns." },
];

// ── Helpers ──────────────────────────────────────────────────────────────────

function parseFrontmatter(text) {
  const match = text.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const fm = {};
  const lines = match[1].split("\n");
  let currentKey = null;
  let inList = false;
  for (const line of lines) {
    const kvMatch = line.match(/^(\w+):\s*(.*)/);
    if (kvMatch) {
      currentKey = kvMatch[1];
      const val = kvMatch[2].trim().replace(/^["']|["']$/g, "");
      fm[currentKey] = val || null;
      inList = false;
    } else if (line.match(/^\s+-\s+(.+)/)) {
      const item = line.match(/^\s+-\s+(.*)/)[1].trim();
      if (!fm[currentKey]) fm[currentKey] = [];
      if (typeof fm[currentKey] === "string") fm[currentKey] = [fm[currentKey]];
      if (!Array.isArray(fm[currentKey])) fm[currentKey] = [];
      fm[currentKey].push(item);
      inList = true;
    }
  }
  return fm;
}

function extractTitle(text) {
  const match = text.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : null;
}

function filePathToPermalink(absPath) {
  // docs/catalog/architecture/.../foo.md → /catalog/architecture/.../foo
  const rel = path.relative(path.join(__dirname, "../docs"), absPath);
  return "/" + rel.replace(/\\/g, "/").replace(/\.md$/, "");
}

function categoryFromPermalink(permalink) {
  const parts = permalink.split("/").filter(Boolean);
  if (parts[0]) {
    return parts[0].charAt(0).toUpperCase() + parts[0].slice(1);
  }
  return "Other";
}

// ── Walk the catalog ─────────────────────────────────────────────────────────

function walkDir(dir, files = []) {
  for (const entry of fs.readdirSync(dir)) {
    if (entry.startsWith("_") || entry === "index.md") continue;
    const full = path.join(dir, entry);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      walkDir(full, files);
    } else if (entry.endsWith(".md")) {
      files.push(full);
    }
  }
  return files;
}

const allFiles = PATTERN_DIRS.flatMap(dir => walkDir(dir));

// Build per-persona pattern lists
const personaPatterns = {};
for (const { slug } of PERSONA_DEFS) {
  personaPatterns[slug] = [];
}

for (const file of allFiles) {
  const text = fs.readFileSync(file, "utf8");
  const fm = parseFrontmatter(text);
  const tags = Array.isArray(fm.tags) ? fm.tags : (fm.tags ? [fm.tags] : []);

  // Find persona tags
  const personaTags = tags.filter(t => t.startsWith("persona:"));
  if (personaTags.length === 0) continue;

  const permalink = filePathToPermalink(file);
  const title = extractTitle(text) || path.basename(file, ".md");
  const description = fm.description || "";
  const category = categoryFromPermalink(permalink);

  const displayTags = tags.filter(t => !t.startsWith("persona:"));

  for (const tag of personaTags) {
    const slug = tag.replace("persona:", "");
    if (personaPatterns[slug]) {
      personaPatterns[slug].push({ title, permalink, description, category, tags: displayTags });
    }
  }
}

// Sort patterns within each persona by category then title
for (const slug of Object.keys(personaPatterns)) {
  personaPatterns[slug].sort((a, b) =>
    a.category.localeCompare(b.category) || a.title.localeCompare(b.title)
  );
}

// ── Generate TypeScript ───────────────────────────────────────────────────────

const lines = [
  "// AUTO-GENERATED by scripts/generate-persona-data.js — do not edit manually",
  "// Re-run `node scripts/generate-persona-data.js` after changing persona tags in pattern files.",
  "",
  "export type Pattern = {",
  "  title: string;",
  "  permalink: string;",
  "  description: string;",
  "  category: string;",
  "  tags: string[];",
  "};",
  "",
  "export type Persona = {",
  "  slug: string;",
  "  name: string;",
  "  description: string;",
  "  patterns: Pattern[];",
  "};",
  "",
  "export const personas: Persona[] = [",
];

for (const def of PERSONA_DEFS) {
  const patterns = personaPatterns[def.slug] || [];
  lines.push(`  {`);
  lines.push(`    slug: ${JSON.stringify(def.slug)},`);
  lines.push(`    name: ${JSON.stringify(def.name)},`);
  lines.push(`    description: ${JSON.stringify(def.description)},`);
  lines.push(`    patterns: [`);
  for (const p of patterns) {
    lines.push(`      { title: ${JSON.stringify(p.title)}, permalink: ${JSON.stringify(p.permalink)}, description: ${JSON.stringify(p.description)}, category: ${JSON.stringify(p.category)}, tags: ${JSON.stringify(p.tags)} },`);
  }
  lines.push(`    ],`);
  lines.push(`  },`);
}

lines.push("];");
lines.push("");
lines.push("export const personaMap = new Map<string, Persona>(personas.map(p => [p.slug, p]));");
lines.push("");

fs.writeFileSync(OUT_FILE, lines.join("\n"), "utf8");
console.log(`Written ${allFiles.length} patterns across ${PERSONA_DEFS.length} personas → ${OUT_FILE}`);
for (const { slug } of PERSONA_DEFS) {
  console.log(`  ${slug}: ${personaPatterns[slug].length} patterns`);
}
