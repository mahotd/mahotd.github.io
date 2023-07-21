// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mahot Descelliers',
  url: 'https://mahotd.github.io/',
  baseUrl: '/',
  organizationName: 'mahotd',
  projectName: 'mahotd.github.io',
  favicon: 'img/favicon.ico',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  deploymentBranch: 'deploy',
  trailingSlash: false,

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          routeBasePath: "/blog",
          showReadingTime: true,
          editUrl: 'https://github.com/mahotd/mahotd/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // TODO: add social card
      // // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Mahot Descelliers',
        logo: {
          alt: 'Mahot Descelliers',
          src: 'img/logo.png',
          href: '/blog',
        },
        items: [
          {to: '/blog', label: '/blog', position: 'left'},
          {to: '/about', label: '/about', position: 'left'},
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

    plugins: [
      [
        '@docusaurus/plugin-client-redirects',
        {
          redirects: [
            {
              to: '/blog',
              from: '/',
            },
          ],
        },
      ],
    ],
};

module.exports = config;
