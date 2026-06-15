import React from "react";
import Link from "@docusaurus/Link";
import { personas, type Persona, type Pattern } from "@site/src/data/personas";
import { categories, subcategories, type Category } from "@site/src/data/categories";
import styles from "./styles.module.css";

function groupByCategory(patterns: Pattern[]): Map<string, Pattern[]> {
  const map = new Map<string, Pattern[]>();
  for (const p of patterns) {
    const group = map.get(p.category) ?? [];
    group.push(p);
    map.set(p.category, group);
  }
  return map;
}

type Props = {
  persona: Persona;
};

export default function PersonaPage({ persona }: Props): JSX.Element {
  const { name, description, patterns } = persona;
  const grouped = groupByCategory(patterns);
  const categoryOrder = ["Requirements", "Architecture", "Development", "Operations"];
  const sortedCategories = [...grouped.keys()].sort(
    (a, b) => categoryOrder.indexOf(a) - categoryOrder.indexOf(b)
  );

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.headerTag}>Persona</div>
        <p className={styles.headerDescription}>{description}</p>
        <span className={styles.headerCount}>
          {patterns.length} pattern{patterns.length !== 1 ? "s" : ""}
        </span>
      </div>

      {patterns.length === 0 ? (
        <p className={styles.emptyState}>No patterns assigned to this persona yet.</p>
      ) : (
        sortedCategories.map((category) => (
          <div key={category} className={styles.categorySection}>
            <h2 className={styles.categoryHeading}>{category}</h2>
            <div className={styles.patternGrid}>
              {grouped.get(category)!.map((pattern) => (
                <PatternCard key={pattern.permalink} pattern={pattern} />
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

type CategoryPageProps = {
  category: Category;
};

function subcategorySlug(permalink: string): string | null {
  const parts = permalink.split("/").filter(Boolean);
  // /catalog/{category}/{subcategory}/{slug} → 4 parts
  return parts.length >= 4 ? parts[2] : null;
}

function PatternCard({ pattern }: { pattern: Pattern }): JSX.Element {
  return (
    <Link to={pattern.permalink} className={styles.patternCard}>
      <div className={styles.patternContent}>
        <span className={styles.patternTitle}>{pattern.title}</span>
        {pattern.description && (
          <p className={styles.patternDescription}>{pattern.description}</p>
        )}
      </div>
      {pattern.tags.length > 0 && (
        <ul className={styles.tagList}>
          {[...pattern.tags].sort().map((tag) => (
            <li key={tag} className={styles.tag}>{tag}</li>
          ))}
        </ul>
      )}
    </Link>
  );
}

export function CategoryPage({ category }: CategoryPageProps): JSX.Element {
  // Collect all unique patterns for this category, deduped by permalink
  const seen = new Set<string>();
  const patterns: Pattern[] = [];
  for (const persona of personas) {
    for (const pattern of persona.patterns) {
      if (pattern.category === category.name && !seen.has(pattern.permalink)) {
        seen.add(pattern.permalink);
        patterns.push(pattern);
      }
    }
  }

  patterns.sort((a, b) => a.title.localeCompare(b.title));

  // Group by subcategory
  const groups = new Map<string | null, Pattern[]>();
  for (const p of patterns) {
    const sub = subcategorySlug(p.permalink);
    const bucket = groups.get(sub) ?? [];
    bucket.push(p);
    groups.set(sub, bucket);
  }

  const sortedGroups = [...groups.entries()].sort(([a], [b]) => {
    if (a === null) return -1;
    if (b === null) return 1;
    return (subcategories[a]?.position ?? 99) - (subcategories[b]?.position ?? 99);
  });

  const hasSubcategories = sortedGroups.some(([key]) => key !== null);

  return (
    <div>
      <div className={styles.header}>
        <p className={styles.headerDescription}>{category.description}</p>
        <span className={styles.headerCount}>
          {patterns.length} pattern{patterns.length !== 1 ? "s" : ""}
        </span>
      </div>

      {patterns.length === 0 ? (
        <p className={styles.emptyState}>No patterns in this category yet.</p>
      ) : hasSubcategories ? (
        sortedGroups.map(([sub, group]) => (
          <div key={sub ?? "__flat"} className={styles.categorySection}>
            {sub && (
              <h2 className={styles.categoryHeading}>
                {subcategories[sub]?.label ?? sub}
              </h2>
            )}
            <div className={styles.patternGrid}>
              {group.map((pattern) => (
                <PatternCard key={pattern.permalink} pattern={pattern} />
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className={styles.patternGrid}>
          {patterns.map((pattern) => (
            <PatternCard key={pattern.permalink} pattern={pattern} />
          ))}
        </div>
      )}
    </div>
  );
}

export function CategoriesIndexContent(): JSX.Element {
  const patternsByCategory = new Map<string, Set<string>>();
  for (const persona of personas) {
    for (const pattern of persona.patterns) {
      const key = pattern.category;
      if (!patternsByCategory.has(key)) patternsByCategory.set(key, new Set());
      patternsByCategory.get(key)!.add(pattern.permalink);
    }
  }

  return (
    <div className={styles.indexGrid}>
      {categories.map((cat) => {
        const count = patternsByCategory.get(cat.name)?.size ?? 0;
        return (
          <Link key={cat.slug} to={cat.path} className={styles.indexCard}>
            <div className={styles.indexCardHeader}>
              <span className={styles.indexCardName}>{cat.name}</span>
              <span className={styles.indexCardCount}>{count}</span>
            </div>
            <p className={styles.indexCardDescription}>{cat.description}</p>
            <span className={styles.indexCardCta}>View patterns →</span>
          </Link>
        );
      })}
    </div>
  );
}

const successStories = [
  {
    id: "story-1",
    label: "Case Study",
    title: "Calculating Your Carbon Footprint: Measuring Serverless App Emissions on AWS",
    summary: "Denis Angeletta and Franziska Warncke applied the SCI specification to a serverless campaign management system, calculating 0.305g CO₂ per request — making emissions measurable at scale.",
    href: "https://greensoftware.foundation/articles/calculating-your-carbon-footprint-a-guide-to-measuring-serverless-app-emissions-o/",
  },
  {
    id: "story-2",
    label: "Case Study",
    title: "How to Accurately Measure the Energy Consumption of Application Software",
    summary: "AVEVA developed a methodology to isolate software energy consumption from hardware infrastructure, achieving measurable emissions reductions across their top ten products.",
    href: "https://greensoftware.foundation/articles/how-to-accurately-measure-the-energy-consumption-of-application-software/",
  },
  {
    id: "story-3",
    label: "Member Story",
    title: "Engineers know the theory but not what to change in code",
    summary: "Ten member organisations — including Microsoft, Goldman Sachs, and Accenture — collaborated to build 50 peer-reviewed patterns that give engineers actionable changes to reduce software emissions.",
    href: "https://greensoftware.foundation/stories/green-software-patterns/",
  },
  {
    id: "story-4",
    label: "Research",
    title: "Automatically Assessing Software Architecture Compliance With Green Software Patterns",
    summary: "UCL researchers built EcoDocSense, a tool that uses LLMs fine-tuned on green software patterns to automatically assess software architecture documents for sustainability compliance.",
    href: "https://solar.cs.ucl.ac.uk/pdf/EcoDocSense_Greens2025.pdf",
  },
  {
    id: "story-5",
    label: "Podcast",
    title: "Backstage: Green Software Patterns",
    summary: "Patterns project leads Franziska Warncke and Liya Mathew discuss real-world implementations by AVEVA and Mastercard, and the multi-stage review process behind every pattern.",
    href: "https://shows.acast.com/environment-variables/episodes/68dc7cfc7be17a7f013561f3",
  },
];

export function SuccessStoriesContent(): JSX.Element {
  return (
    <div className={styles.storiesGrid}>
      {successStories.map((story) => (
        <a
          key={story.id}
          href={story.href}
          className={styles.storyCard}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.storyCardHeader}>
            <span className={styles.storyLabel}>{story.label}</span>
          </div>
          <span className={styles.storyOrganisation}>{story.title}</span>
          <p className={styles.storyDescription}>{story.summary}</p>
          <span className={styles.storyCardCta}>Read more ↗</span>
        </a>
      ))}
    </div>
  );
}

export function PersonasIndexContent(): JSX.Element {
  return (
    <div className={styles.indexGrid}>
      {personas.map((persona) => (
        <Link key={persona.slug} to={`/personas/${persona.slug}`} className={styles.indexCard}>
          <div className={styles.indexCardHeader}>
            <span className={styles.indexCardName}>{persona.name}</span>
            <span className={styles.indexCardCount}>{persona.patterns.length}</span>
          </div>
          <p className={styles.indexCardDescription}>{persona.description}</p>
          <span className={styles.indexCardCta}>View patterns →</span>
        </Link>
      ))}
    </div>
  );
}
