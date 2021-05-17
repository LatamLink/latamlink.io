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
  title: 'EOSIO Pro Testnet for LACChain IADB Labs Blockchain', // Title for your website.
  tagline: 'LACCHAIN EOSIO Technical Documentation',
  url: 'https://latamlink.io', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // Used for publishing and more
  projectName: 'latamlink.io',
  organizationName: 'LatamLink',
  favicon: 'img/favicon/favicon.ico',
  //scripts: ['https://buttons.github.io/buttons.js','../../scripts/languageSelector.js'],
  themeConfig: {
    colorMode: {
      // "light" | "dark"
      defaultMode: 'light',
      // // Hides the switch in the navbar
      // // Useful if you want to support a single color mode
      disableSwitch: true,
      // // Should we use the prefers-color-scheme media-query,
      // // using user system preferences, instead of the hardcoded defaultMode
      // respectPrefersColorScheme: true,
    },
    navbar: {
      title: '',
      hideOnScroll: false,
      logo: {
        alt: 'Latamlink Logo',
        src: 'img/latamlink_logo-h-full-color-overwhite.svg',
        srcDark: 'img/latamlink_logo-h-full-color-overwhite.svg',
        //href: 'https://es.latamlink.io',
      },
      items: [
        // {href: 'https://latamlink.io/#about', label: 'About', position: 'right'},
        // {href: 'https://medium.com/@latam_link', label: 'News', position: 'right'},
        {href: 'https://dashboard.latamlink.io/', label: 'Network Dashboard', position: 'right'},
        {href: 'http://explorer.latamlink.io/', label: 'Block Explorer', position: 'right'},
        {to: 'docs/eosio', label: 'Documentation', position: 'right'},
        {href: 'https://es.latamlink.io/', label: 'Español',position: 'right',},
        {to: 'search'},
      ]
    },
    footer: {
      links: [
        {
          title: 'Developer Tools',
          items: [
            {
              label: 'Network Monitor',
              to: 'https://dashboard.latamlink.io/',
            },
            {
              label: 'Block Explorer',
              to: 'http://explorer.latamlink.io/',
            },
            {
              label: 'API Endpoints',
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
              href: 'https://github.com/lacchain',
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
          editUrl:'https://github.com/LatamLink/latamlink.io/tree/master',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  scripts: [
    {
      src:
        'https://buttons.github.io/buttons.js',
      async: true,
    },
    'https://code.jquery.com/jquery-3.4.1.min.js',
    'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js',
    'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js',
    'https://kit.fontawesome.com/6c84ac616f.js',
    'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.2/min/tiny-slider.js',
  ],

};
module.exports = siteConfig;