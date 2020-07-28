/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.

const siteConfig = {
  title: 'LatamLink Testnet', // Title for your website.
  tagline: 'Technical Documentation',
  url: 'https://latamlink.io', // Your website URL
  baseUrl: '/', // Base URL for your project */
  //cname: "guide.eoscostarica.io",
  // Used for publishing and more
  projectName: 'latamlink.io',
  organizationName: 'LatamLink',
  favicon: 'img/favicon/favicon.ico',
  //scripts: ['https://buttons.github.io/buttons.js','../../scripts/languageSelector.js'],
  themeConfig: {
    navbar: {
      title: 'LatamLink',
      logo: {
        alt: 'Latamlink Logo',
        src: 'img/latamlink_logo-h-full-color-overwhite.svg',
        srcDark: 'img/latamlink_logo-h-full-color-overwhite.svg',
        //href: 'https://es.latamlink.io',
      },
      items: [
        {to: 'https://latamlink.io', label: 'Home', position: 'left'},
        {to: 'https://monitor.latamlink.io', label: 'Monitor', position: 'left'},
        {to: 'http://explorer.testnet.latamlink.io', label: 'Explorer', position: 'left'},
        {to: 'https://latamlink.io/docs/api', label: 'APIs', position: 'left'},
        {
          href: 'https://es.latamlink.io/docs/eosio',
          label: 'Español',
          position: 'right',
        },
        {to: 'search'},
      ],
    },
    footer: {
      logo: {
        alt: 'LatamLink Logo',
        src: 'img/latamlink_logo-h-full-color-overwhite.svg',
        href: 'https://latamlink.io/',
      },
      links: [
        {
          title: 'Tools',
          items: [
            {
              label: 'Network Monitor',
              to: 'https://monitor.latamlink.io/',
            },
            {
              label: 'Block Explorer',
              to: 'http://explorer.testnet.latamlink.io/',
            },
            {
              label: 'APIs',
              to: 'https://latamlink.io/docs/api.html',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://eosio.stackexchange.com/',
            },          
            {
              label: 'GitHub',
              href: 'https://github.com/LatamLink',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Medium',
              href: 'https://medium.com/@latam_link',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/LatamLink_EOS',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} LatamLink`, // You can also put own HTML here.
    },
    //Algolia integration
    algolia: {
      apiKey: 'f7e83f64ca037b5315b5ccd56f79910c',
      indexName: 'latamlink',
      placeholder: 'Search',
      algoliaOptions: {} // Optional, if provided by Algolia
    },
    googleAnalytics: {
      trackingID: "UA-173987-71",
    },
  }, 
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // Docs folder path relative to website dir.
          path: './docs',
          // Sidebars file relative to website dir.
          editUrl:
            'https://github.com/LatamLink/latamlink.io/tree/master/website',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  scripts: ["https://buttons.github.io/buttons.js"],

};
module.exports = siteConfig;