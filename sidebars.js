// @ts-check

// Explicit sidebar ordered to match the narrative flow of the whitepaper PDF.
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  whitepaperSidebar: [
    'abstract',
    'introduction',
    'problem',
    'solution',
    'corporate-structure',
    {
      type: 'category',
      label: 'Platform',
      items: ['platform/architecture', 'platform/security'],
    },
    'property-tokens',
    'investor-onboarding',
    'saft-agreement',
    'compliance',
    'revenue-model',
    'business-valuation',
    'tokenomics',
    'token-utility',
    'governance',
    'roadmap',
    'team',
    'legal-disclaimer',
  ],
};

export default sidebars;
