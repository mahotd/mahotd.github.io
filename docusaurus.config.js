// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'mahotd',
  url: 'https://mahotd.github.io/',
  baseUrl: '/',
  organizationName: 'mahotd',
  projectName: 'mahotd.github.io',
  favicon: 'img/favicon.ico',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  deploymentBranch: 'gh-pages',
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
          blogTitle: 'blog',
          blogDescription: 'Mahot Descelliers\'s blog',
          routeBasePath: "/blog",
          showReadingTime: true,
          editUrl: 'https://github.com/mahotd/mahotd/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-9QNKTPSF5J',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/mahotd-social-card.jpg',
      navbar: {
        title: 'mahotd',
        logo: {
          alt: 'mahotd',
          src: 'img/logo.png',
          href: '/blog',
        },
        items: [
          {to: '/blog', label: '/blog', position: 'left'},
          {to: '/about', label: '/about', position: 'left'},
        ],
      },
      footer: {
        style: 'light',
        copyright: `Copyright © ${new Date().getFullYear()} Mahot Descelliers. Built with Docusaurus.`,
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
      [
        '@docusaurus/plugin-ideal-image',
        {
          quality: 70,
          max: 1030, // max resized image's size.
          min: 640, // min resized image's size. if original is lower, use that size.
          steps: 2, // the max number of images generated between min and max (inclusive)
          disableInDev: false,
        },
      ],
    ],
};

module.exports = config;
