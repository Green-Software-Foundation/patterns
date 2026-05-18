// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes: prismThemes } = require("prism-react-renderer");

/** @type {import('@docusaurus/types').Config} */
const config = {
  // Change to Site title
  title: "Green Software Patterns",
  // Change to site description
  tagline:
    "An online open-source database of green software patterns reviewed and curated by the Green Software Foundation",
  // Change to site url
  url: "https://russelltrow.github.io/",
  baseUrl: "gsf-patterns/",
  onBrokenLinks: "throw",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },
  favicon: "img/favicon.ico",
  organizationName: "Green-Software-Foundation",
  // Change to GitHub repo name.
  projectName: "green-software-patterns",
  deploymentBranch: "gh-pages",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          // Change this to your repo.
          editUrl:
            "https://github.com/Green-Software-Foundation/patterns/edit/main/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-G3P4S2WSTC",
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: "site-revamp-2026",
        content:
          '✨ We\'ve redesigned the Green Software Patterns catalogue. Browse by <a href="/architecture">Software Lifecycle</a> or explore patterns for <a href="/personas">your role</a>.',
        backgroundColor: "#ABCC59",
        textColor: "#000000",
        isCloseable: true,
      },
      navbar: {
        // Change to project name
        title: "Green Software Patterns",
        logo: {
          alt: "Green Software Patterns Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            to: "/guide",
            label: "Guide",
            position: "right"
          },
          {
            to: "/contribute",
            label: "Propose a Pattern",
            position: "right"
          },
          {
            href: "https://greensoftware.foundation/",
            label: "Green Software Foundation",
            position: "right"
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Links",
            items: [
              {
                label: "Github",
                href: "https://github.com/Green-Software-Foundation/green-software-patterns/",
              },
              {
                label: "Website",
                href: "https://patterns.greensoftware.foundation",
              },
            ],
          },
          {
            title: "LEGAL",
            items: [
              {
                label: "Trademark Policy",
                href: "https://greensoftware.foundation/policy/trademark",
              },
              {
                label: "Terms and Privacy Policy",
                href: "https://greensoftware.foundation/policy/terms",
              },
            ],
          },
          {
            title: "GSF",
            items: [
              {
                label: "Green Software Foundation",
                href: "https://greensoftware.foundation",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/gsfcommunity",
              },
              {
                label: "Linkedin",
                href: "https://www.linkedin.com/company/green-software-foundation/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Joint Development Foundation Projects, LLC, Green Software Foundation Series`,
      },
      prism: {
        theme: prismThemes.github,
      },
      colorMode: {
        disableSwitch: true,
        defaultMode: "light",
      },
      metadata: [{
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:site",
        content: "@gsfcommunity",
      },
      {
        name: "twitter:title",
        content: "Green Software Patterns",
      },
      {
        name: "twitter:description",
        content: "A curated collection of best practices for software practitioners building greener software, reviewed and curated by the Green Software Foundation.",
      },
      {
        name: "twitter:image",
        content: "https://patterns.greensoftware.foundation/img/og-image.png",
      },
      {
        name: "twitter:creator",
        content: "@gsfcommunity",
      },
      {
        name: "og:title",
        content: "Green Software Patterns",
      },
      {
        name: "og:description",
        content: "A curated collection of best practices for software practitioners building greener software, reviewed and curated by the Green Software Foundation.",
      },
      {
        name: "og:image",
        content: "https://patterns.greensoftware.foundation/img/og-image.png",
      },
      {
        name: "og:url",
        content: "https://patterns.greensoftware.foundation/",
      },
      {
        name: "og:site_name",
        content: "Green Software Patterns",
      },
      {
        name: "og:type",
        content: "website",
      },

      ]
    }),

  plugins: [
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 90,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          // Catalog landing pages → homepage
          { from: "/catalog", to: "/" },
          { from: "/catalog/cloud", to: "/" },
          { from: "/catalog/ai", to: "/" },
          { from: "/catalog/web", to: "/" },

          // Cloud → Architecture: System Topology
          { from: "/catalog/cloud/choose-region-closest-to-users", to: "/architecture/system-topology/choose-region-closest-to-users" },
          { from: "/catalog/cloud/containerize-your-workload-where-applicable", to: "/architecture/system-topology/containerize-your-workload-where-applicable" },
          { from: "/catalog/cloud/evaluate-using-a-service-mesh", to: "/architecture/system-topology/evaluate-using-a-service-mesh" },
          { from: "/catalog/cloud/implement-stateless-design", to: "/architecture/system-topology/implement-stateless-design" },
          { from: "/catalog/cloud/queue-non-urgent-requests", to: "/architecture/system-topology/queue-non-urgent-requests" },
          { from: "/catalog/cloud/reduce-network-traversal-between-VMs", to: "/architecture/system-topology/reduce-network-traversal-between-VMs" },
          { from: "/catalog/cloud/scale-logical-components-independently", to: "/architecture/system-topology/scale-logical-components-independently" },

          // Cloud → Architecture: Technology Selection
          { from: "/catalog/cloud/evaluate-other-cpu-architectures", to: "/architecture/technology-selection/evaluate-other-cpu-architectures" },
          { from: "/catalog/cloud/use-energy-efficient-hardware", to: "/architecture/technology-selection/use-energy-efficient-hardware" },
          { from: "/catalog/cloud/use-serverless", to: "/architecture/technology-selection/use-serverless" },

          // Cloud → Development: Data Handling
          { from: "/catalog/cloud/cache-static-data", to: "/development/data-handling/cache-static-data" },
          { from: "/catalog/cloud/compress-stored-data", to: "/development/data-handling/compress-stored-data" },
          { from: "/catalog/cloud/compress-transmitted-data", to: "/development/data-handling/compress-transmitted-data" },
          { from: "/catalog/cloud/reduce-transmitted-data", to: "/development/data-handling/reduce-transmitted-data" },

          // Cloud → Development: Media and Code Efficiency
          { from: "/catalog/cloud/use-compiled-languages", to: "/development/media-and-code-efficiency/use-compiled-languages" },

          // Cloud → Development (root)
          { from: "/catalog/cloud/evaluate-whether-to-use-TLS-termination", to: "/development/evaluate-whether-to-use-TLS-termination" },
          { from: "/catalog/cloud/minimizing-deployed-environments", to: "/development/minimizing-deployed-environments" },
          { from: "/catalog/cloud/use-async-instead-of-sync", to: "/development/use-async-instead-of-sync" },

          // Cloud → Operations: Capacity Management
          { from: "/catalog/cloud/match-utilization-requirements-of-vm", to: "/operations/capacity-management/match-utilization-requirements-of-vm" },
          { from: "/catalog/cloud/match-utilization-requirements-with-pre-configured-server", to: "/operations/capacity-management/match-utilization-requirements-with-pre-configured-server" },
          { from: "/catalog/cloud/optimize-avg-cpu-utilization", to: "/operations/capacity-management/optimize-avg-cpu-utilization" },
          { from: "/catalog/cloud/optimize-peak-cpu-utilization", to: "/operations/capacity-management/optimize-peak-cpu-utilization" },
          { from: "/catalog/cloud/scale-down-kubernetes-workloads", to: "/operations/capacity-management/scale-down-kubernetes-workloads" },
          { from: "/catalog/cloud/scale-down-unused-applications", to: "/operations/capacity-management/scale-down-unused-applications" },
          { from: "/catalog/cloud/scale-infrastructure-with-user-load", to: "/operations/capacity-management/scale-infrastructure-with-user-load" },
          { from: "/catalog/cloud/scale-kubernetes-workloads-based-on-events", to: "/operations/capacity-management/scale-kubernetes-workloads-based-on-events" },
          { from: "/catalog/cloud/use-circuit-breaker", to: "/operations/capacity-management/use-circuit-breaker" },

          // Cloud → Operations: Resource Lifecycle
          { from: "/catalog/cloud/delete-unused-storage-resources", to: "/operations/resource-lifecycle/delete-unused-storage-resources" },
          { from: "/catalog/cloud/optimise-storage-resource-utilisation", to: "/operations/resource-lifecycle/optimise-storage-resource-utilisation" },
          { from: "/catalog/cloud/remove-unused-assets", to: "/operations/resource-lifecycle/remove-unused-assets" },
          { from: "/catalog/cloud/set-retention-policy-on-storage-resources", to: "/operations/resource-lifecycle/set-retention-policy-on-storage-resources" },

          // Cloud → Operations (root)
          { from: "/catalog/cloud/scan-for-vulnerabilities", to: "/operations/scan-for-vulnerabilities" },
          { from: "/catalog/cloud/time-shift-kubernetes-cron-jobs", to: "/operations/time-shift-kubernetes-cron-jobs" },
          { from: "/catalog/cloud/use-cloud-native-network-security-tools-and-controls", to: "/operations/use-cloud-native-network-security-tools-and-controls" },
          { from: "/catalog/cloud/use-ddos-protection", to: "/operations/use-ddos-protection" },

          // Cloud → Requirements
          { from: "/catalog/cloud/encrypt-what-is-necessary", to: "/requirements/encrypt-what-is-necessary" },
          { from: "/catalog/cloud/match-slo", to: "/requirements/match-slo" },
          { from: "/catalog/cloud/optimize-impact-on-customer-equipment", to: "/requirements/optimize-impact-on-customer-equipment" },
          { from: "/catalog/cloud/shed-lower-priority-traffic", to: "/requirements/shed-lower-priority-traffic" },

          // AI → Architecture (root)
          { from: "/catalog/ai/compress-ml-models-for-inference", to: "/architecture/compress-ml-models-for-inference" },

          // AI → Architecture: System Topology
          { from: "/catalog/ai/energy-efficent-ai-edge", to: "/architecture/system-topology/energy-efficent-ai-edge" },
          { from: "/catalog/ai/serverless-model-development", to: "/architecture/system-topology/serverless-model-development" },

          // AI → Architecture: Technology Selection
          { from: "/catalog/ai/efficent-format-for-model-training", to: "/architecture/technology-selection/efficent-format-for-model-training" },
          { from: "/catalog/ai/energy-efficent-framework", to: "/architecture/technology-selection/energy-efficent-framework" },
          { from: "/catalog/ai/energy-efficent-models", to: "/architecture/technology-selection/energy-efficent-models" },
          { from: "/catalog/ai/right-hardware-type", to: "/architecture/technology-selection/right-hardware-type" },

          // AI → Development (root)
          { from: "/catalog/ai/leverage-sustainable-regions", to: "/development/leverage-sustainable-regions" },
          { from: "/catalog/ai/pre-trained-transfer-learning", to: "/development/pre-trained-transfer-learning" },

          // Web → Development: Data Handling
          { from: "/catalog/web/avoid-tracking-unnecessary-data", to: "/development/data-handling/avoid-tracking-unnecessary-data" },

          // Web → Development: Media and Code Efficiency
          { from: "/catalog/web/defer-offscreen-images", to: "/development/media-and-code-efficiency/defer-offscreen-images" },
          { from: "/catalog/web/deprecate-gifs", to: "/development/media-and-code-efficiency/deprecate-gifs" },
          { from: "/catalog/web/properly-sized-images", to: "/development/media-and-code-efficiency/properly-sized-images" },
          { from: "/catalog/web/remove-unused-css", to: "/development/media-and-code-efficiency/remove-unused-css" },
          { from: "/catalog/web/serve-images-in-modern-formats", to: "/development/media-and-code-efficiency/serve-images-in-modern-formats" },

          // Web → Development: Web Performance
          { from: "/catalog/web/avoid-chaining-critical-requests", to: "/development/web-performance/avoid-chaining-critical-requests" },
          { from: "/catalog/web/avoid-excessive-dom-size", to: "/development/web-performance/avoid-excessive-dom-size" },
          { from: "/catalog/web/enable-text-compression", to: "/development/web-performance/enable-text-compression" },
          { from: "/catalog/web/keep-request-counts-low", to: "/development/web-performance/keep-request-counts-low" },
          { from: "/catalog/web/minify-web-assets", to: "/development/web-performance/minify-web-assets" },
          { from: "/catalog/web/minimize-main-thread-work", to: "/development/web-performance/minimize-main-thread-work" },
          { from: "/catalog/web/use-server-side-rendering", to: "/development/web-performance/use-server-side-rendering" },

          // Role tags → Personas
          { from: "/tags/role-software-engineer", to: "/personas/software-engineer" },
          { from: "/tags/role-web-developer", to: "/personas/front-end-engineer" },
          { from: "/tags/role-data-scientist", to: "/personas/data-engineer" },
          { from: "/tags/role-reliability-engineer", to: "/personas/devops-engineer" },
          { from: "/tags/role-cloud-engineer", to: "/personas/devops-engineer" },
        ],
      },
    ],
  ],
};

module.exports = config;
