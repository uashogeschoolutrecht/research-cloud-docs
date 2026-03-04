import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Research Cloud docs",
  tagline: "Technical documentation for researchers at Hogeschool Utrecht using Research Cloud.",
  favicon: "img/favicon-32x32.png",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://uashogeschoolutrecht.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/research-cloud-docs/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "uashogeschoolutrecht", // Usually your GitHub org/user name.
  projectName: "/research-cloud-docs/", // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/uashogeschoolutrecht/research-cloud-docs/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        docsRouteBasePath: "/",
        indexBlog: false,
        indexPages: false,
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Research Cloud docs",
      logo: {
        alt: "HU Logo",
        src: "img/hu-logo-small.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "homeSidebar",
          position: "left",
          label: "Home",
        },
        {
          type: "docSidebar",
          sidebarId: "onboardingSidebar",
          position: "left",
          label: "Onboarding",
        },
        {
          type: "docSidebar",
          sidebarId: "workspacesSidebar",
          position: "left",
          label: "Workspaces",
        },
        {
          href: "https://github.com/uashogeschoolutrecht/research-cloud-docs/",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Hogeschool Utrecht. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
