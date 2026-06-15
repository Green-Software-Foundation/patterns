export type Category = {
  slug: string;
  name: string;
  description: string;
  path: string;
};

export const categories: Category[] = [
  {
    slug: "requirements",
    name: "Requirements",
    description: "Green software patterns for defining sustainable requirements and goals before development begins.",
    path: "/requirements",
  },
  {
    slug: "architecture",
    name: "Architecture",
    description: "Structural and design patterns that reduce energy consumption and carbon emissions at the system level.",
    path: "/architecture",
  },
  {
    slug: "development",
    name: "Development",
    description: "Coding and implementation patterns that improve efficiency and reduce the environmental impact of software.",
    path: "/development",
  },
  {
    slug: "operations",
    name: "Operations",
    description: "Runtime and infrastructure patterns for optimising resource utilisation and minimising operational emissions.",
    path: "/operations",
  },
];

export const categoryMap = new Map<string, Category>(categories.map(c => [c.slug, c]));

export type Subcategory = {
  label: string;
  position: number;
};

export const subcategories: Record<string, Subcategory> = {
  "system-topology":            { label: "System Topology",          position: 1 },
  "technology-selection":       { label: "Technology Selection",      position: 2 },
  "data-handling":              { label: "Data Handling",             position: 1 },
  "media-and-code-efficiency":  { label: "Media & Code Efficiency",   position: 2 },
  "web-performance":            { label: "Web Performance",           position: 3 },
  "capacity-management":        { label: "Capacity Management",       position: 1 },
  "resource-lifecycle":         { label: "Resource Lifecycle",        position: 2 },
};
