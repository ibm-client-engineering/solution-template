// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer").themes.oceanicNext;
const darkCodeTheme = require("prism-react-renderer").themes.oceanicNext;

async function createconfig() {
  const { remarkKroki } = await import("remark-kroki");

  /** @type {import("@docusaurus/types").Config} */
  const config = {

    markdown: {
      mermaid: true,
    },
    themes: ["@docusaurus/theme-mermaid", "@docusaurus/theme-live-codeblock"],
    title: "Insert Solution Name",
    tagline: "Build Faster. Together.",
    favicon: "img/favicon.ico",

    // Set the production url of your site here
    url: "https://ibm-client-engineering.github.io",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often "/<projectName>/"
    baseUrl: "/insert-solution-name",


    // GitHub pages deployment config.
    // If you aren"t using GitHub pages, you don"t need these.
    organizationName: "ibm-client-engineering", // Usually your GitHub org/user name.
    projectName: "insert-solution-name", // Usually your repo name.

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // ...

    plugins: [
      [require.resolve("@cmfcmf/docusaurus-search-local"), {}],
      [require.resolve("docusaurus-plugin-image-zoom"), {}],
      [
        "@docusaurus/plugin-sitemap",
        {
          changefreq: "hourly",
          id: "site",
          filename: "sitemap.xml",
          priority: 0.5,
        },
      ],
      [
        "@docusaurus/plugin-google-gtag",
        {
          trackingID: "G-GB0XWXF3GE",
          anonymizeIP: true,
        },
      ],
    ],

    // or, if you want to specify options


    // Even if you don"t use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
      defaultLocale: "en",
      locales: ["en"],
    },

    presets: [
      [
        "classic",
        /** @type {import("@docusaurus/preset-classic").Options} */
        ({
          docs: {
            remarkPlugins: [[remarkKroki, { server: "https://kroki.io/", output: "inline-svg" }]],
            routeBasePath: "/",
            sidebarPath: require.resolve("./sidebars.js"),
            // Please change this to your repo.
            // Remove this to remove the "edit this page" links.
            editUrl:
              "https://github.com/ibm-client-engineering/insert-solution-name/tree/main/packages/create-docusaurus/templates/shared/",
          },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
          blog: {
            routeBasePath: "flight-logs",
            path: './flight-logs',
            // Simple use-case: string editUrl
            // editUrl: "https://github.com/facebook/docusaurus/edit/main/website/",
            // Advanced use-case: functional editUrl
            editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
              "https://github.com/ibm-client-engineering/insert-solution-name/edit/main/${blogDirPath}/${blogPath}",
            blogTitle: "Flight Logs",
            blogSidebarTitle: "Flight Logs",
            blogSidebarCount: 'ALL',
            postsPerPage: 'ALL',
            remarkPlugins: [],
            rehypePlugins: [],
          }
        }),
      ],
    ],

    themeConfig:
      /** @type {import("@docusaurus/preset-classic").ThemeConfig} */
      ({
        metadata: [{ name: "keywords", content: "ibm client engineering, open solutions library" }],
        mermaid: {
          theme: { light: "neutral", dark: "dark" },
        },
        // Replace with your project"s social card
        image: "img/docusaurus-social-card.jpg",
        tableOfContents: {
          minHeadingLevel: 2,
          maxHeadingLevel: 5,
        },
        colorMode: {
          disableSwitch: true,
        },
        zoom: {
          selector: ".markdown :not(a) > img",
          background: {
            light: "rgb(255, 255, 255)",
            dark: "rgb(50, 50, 50)"
          },
          config: {
            // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
          },
        },
        navbar: {
          title: "| Insert Solution Name",
          logo: {
            alt: "IBM Client Engineering Logo",
            src: "img/logo.svg",
            srcDark: "img/logo-dark.svg",
            width: 200,
            height: 200,
          },
          items: [
            // {
            //   type: "doc",
            //   docId: "intro",
            //   position: "left",
            //   label: "Section",
            // },
            {to: "flight-logs", label: "Flight Logs", position: "right"},
            {
              href: "https://github.com/ibm-client-engineering/insert-solution-name",
              className: "header-github-link",
              position: "right",
            },
          ],
        },
        footer: {
          logo: {
              alt: "IBM Logo",
              src: "https://www.ibm.com/brand/experience-guides/developer/8f4e3cc2b5d52354a6d43c8edba1e3c9/02_8-bar-reverse.svg",
              href: "https://ibm.com",
              height: 150,
              width: 200,

          },
          // style: "dark",
          links: [
            {
              title: "Explore",
              items: [
                {
                  label: "IBM",
                  to: "https://www.ibm.com/",
                },
                {
                  label: "IBM Client Engineering",
                  to: "https://www.ibm.com/client-engineering",
                },
                {
                  label: "IBM Client Engineering Solutions Hub",
                  to: "https://github.com/ibm-client-engineering",
                },
              ],

            }

          ]
        },
        prism: {
          theme: require("prism-react-renderer").themes.oceanicNext,
          darkTheme: require("prism-react-renderer").themes.oceanicNext,
        },
      }),
  };

  return config;

}

module.exports = createconfig;