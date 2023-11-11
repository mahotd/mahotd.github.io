// @ts-check

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "mahotd",
  favicon: "img/favicon.ico",

  url: "https://mahotd.github.io/",
  baseUrl: "/",
  trailingSlash: false,

  organizationName: "mahotd",
  projectName: "mahotd.github.io",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

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
        docs: false,
        blog: {
          routeBasePath: "/",

          blogTitle: "blog",
          blogDescription: "Mahot Descelliers's blog",

          blogSidebarCount: 10,
          showReadingTime: true,

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
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      image: "img/mahotd-social-card.jpg",
      navbar: {
        title: "mahotd",
        logo: {
          alt: "mahotd",
          src: "https://github.com/mahotd.png",
          href: "/",
          style: {
            borderRadius: "50%",
          },
        },
        items: [{ to: "/about", label: "/about", position: "left" }],
      },
      footer: {
        style: "light",
        copyright: `Copyright © ${new Date().getFullYear()} <a href="/about">Mahot Descelliers</a>. Built with <a href="https://github.com/facebook/docusaurus/">Docusaurus</a>.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
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

export default config;
