// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "mahotd",
  url: "https://mahotd.github.io/",
  baseUrl: "/",
  organizationName: "mahotd",
  projectName: "mahotd.github.io",
  favicon: "img/favicon.ico",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          routeBasePath: "/",
          blogTitle: "blog",
          blogDescription: "Mahot Descelliers's blog",
          blogSidebarCount: 10,
          editUrl: "https://github.com/mahotd/mahotd/edit/main/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-9QNKTPSF5J",
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      image: "img/mahotd-social-card.jpg",
      navbar: {
        title: "mahotd",
        logo: {
          alt: "mahotd",
          src: "https://github.com/mahotd.png",
          href: "/",
          style: {
        },
        items: [{ to: "/about", label: "/about", position: "left" }],
      },
      footer: {
        style: "light",
        copyright: `Copyright © ${new Date().getFullYear()} <a href="/about">Mahot Descelliers</a>. Built with <a href="hhttps://github.com/facebook/docusaurus/">Docusaurus</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            from: "/blog",
            to: "/",
          },
        ],
      },
    ],
    [
      "@docusaurus/plugin-ideal-image",
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
