// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

require('dotenv').config()

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'HackRVA',
  tagline: "Richmond's Hackerspace since 2009",
  url: 'https://hackrva.github.io',
  baseUrl: '/hackrva.org/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'hackrva', // Usually your GitHub org/user name.
  projectName: 'hackrva.org', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  customFields: {
    'REACT_APP_PAYPAL_CLIENT_ID': process.env.REACT_APP_PAYPAL_CLIENT_ID,
    'REACT_APP_PAYPAL_PLAN_ID_39': process.env.REACT_APP_PAYPAL_PLAN_ID_39,
    'REACT_APP_PAYPAL_PLAN_ID_50': process.env.REACT_APP_PAYPAL_PLAN_ID_50,
    'REACT_APP_PAYPAL_PLAN_ID_35': process.env.REACT_APP_PAYPAL_PLAN_ID_35,
    'HACKRVA_GOOGLE_API_KEY': process.env.HACKRVA_GOOGLE_API_KEY,
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/hackrva/hackrva.org/',
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
      navbar: {
        title: 'HackRVA',
        logo: {
          alt: '',
          src: 'img/cropped-hackrva-circle.png',
        },
        items: [
          {to: '/about', label: 'About', position: 'left'},
          {to: '/calendar', label: 'Calendar', position: 'left'},
          {to: '/membership', label: 'Join', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {href: 'https://wiki.hackrva.org', label: 'Wiki', position: 'left'},
          {
            href: 'https://github.com/HackRVA/hackrva.org',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Links',
            items: [
              {
                label: 'Wiki',
                to: 'http://wiki.hackrva.org/',
              },
              {
                label: 'Photos',
                to: 'http://www.flickr.com/photos/hackrva',
              },
              {
                label: 'Thingiverse',
                to: 'http://www.thingiverse.com/HackRVA/designs',
              },
              {
                label: 'Youtube',
                to: 'https://www.youtube.com/user/HackRVA',
              },
              {
                label: 'Richmond Maker Map',
                to: 'https://mapsengine.google.com/map/edit?mid=zR5arxdgxvHk.kv0AxPoIw1WY',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: "Meetup",
                href: "https://www.meetup.com/hackrva-meetup/",
              },
              {
                label: 'Slack Chat',
                to: 'http://wiki.hackrva.org/index.php?title=Online_Chat_Channel',
              },
              {
                label: 'Facebook',
                to: 'https://www.facebook.com/hackrva',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/HackRVA/hackrva.org',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HackRVA Labs, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    plugins: [
      [
        "docusaurus2-dotenv",
        {
          systemvars: true,
        },
      ],
    ],
};

module.exports = config;
