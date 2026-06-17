// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'United Properties TRU™',
  tagline: 'Compliant Tokenized Real Estate Ownership',
  favicon: 'img/favicon.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://united-properties.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'Code-Brew-AI', // Usually your GitHub org/user name.
  projectName: 'UnitedProperties_Whitepaper', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang.
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Enable Mermaid diagrams in Markdown code blocks.
  markdown: {
    mermaid: true,
    format: 'detect', // .md = CommonMark (raw HTML allowed), .mdx = JSX
  },

  themes: [
    '@docusaurus/theme-mermaid',
    [
      // Offline / local full-text search (no Algolia account needed).
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
      ({
        hashed: true,
        docsRouteBasePath: '/whitepaper',
        indexBlog: false,
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      }),
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'whitepaper', // serve docs at /whitepaper instead of /docs
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Code-Brew-AI/UnitedProperties_Whitepaper/tree/main/',
        },
        blog: false, // a whitepaper doesn't need a blog
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.svg',
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      mermaid: {
        theme: {light: 'default', dark: 'dark'},
        options: {
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
          fontSize: 14,
          flowchart: {
            htmlLabels: true,
            nodeSpacing: 65,
            rankSpacing: 72,
            padding: 16,
            curve: 'basis',
          },
        },
      },
      announcementBar: {
        id: 'wp_draft_v1',
        content:
          '📄 United Properties TRU™ Whitepaper <strong>v1.0</strong> — Draft for Review · June 2026',
        backgroundColor: '#1565d8',
        textColor: '#ffffff',
        isCloseable: true,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false,
        },
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },
      navbar: {
        title: 'United Properties TRU™',
        hideOnScroll: true,
        logo: {
          alt: 'United Properties TRU Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'whitepaperSidebar',
            position: 'left',
            label: 'Whitepaper',
          },
          {
            type: 'dropdown',
            label: 'Sections',
            position: 'left',
            items: [
              {label: 'Abstract', to: '/whitepaper/abstract'},
              {label: 'The Solution', to: '/whitepaper/solution'},
              {label: 'Corporate Structure', to: '/whitepaper/corporate-structure'},
              {label: 'Property Tokens', to: '/whitepaper/property-tokens'},
              {label: 'Tokenomics', to: '/whitepaper/tokenomics'},
              {label: 'Roadmap', to: '/whitepaper/roadmap'},
            ],
          },
          {
            href: 'https://github.com/Code-Brew-AI/UnitedProperties_Whitepaper',
            label: 'GitHub',
            position: 'right',
          },
          {
            to: '/whitepaper/abstract',
            label: 'Read Whitepaper',
            position: 'right',
            className: 'navbar-cta',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Whitepaper',
            items: [
              {
                label: 'Abstract',
                to: '/whitepaper/abstract',
              },
              {
                label: 'Tokenomics',
                to: '/whitepaper/tokenomics',
              },
              {
                label: 'Roadmap',
                to: '/whitepaper/roadmap',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'X / Twitter',
                href: 'https://x.com',
              },
              {
                label: 'Discord',
                href: 'https://discord.com',
              },
              {
                label: 'Telegram',
                href: 'https://telegram.org',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Code-Brew-AI/UnitedProperties_Whitepaper',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} United Properties TRU™. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
