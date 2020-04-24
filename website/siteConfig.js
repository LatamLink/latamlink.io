/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: "User1",
    image: "/img/undraw_open_source.svg",
    infoLink: "https://www.facebook.com",
    pinned: true
  }
];

const siteConfig = {
  title: "LatamLink Testnet", // Title for your website.
  tagline: "Technical Documentation",
  url: "https://latamlink.io/", // Your website URL
  cname: "latamlink.io", 
  baseUrl: "/", // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: "latamlink.io",
  organizationName: "LatamLink",

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'eosio', label: 'Docs'},
    {href: 'https://es.latamlink.io/docs/eosio', label: 'Español'},
    {search: true}
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: "img/latamlink_logo-h-full-color-overwhite.svg",
  footerIcon: "img/footerlogo.png",
  eoscrIcon: "images/EOSCr-logo.png",
  eosarIcon: "images/eosar_logo.png",
  eosvenIcon: "images/eosvenezuelalogo-122x122.png",
  favicon: "img/favicon.ico",

  /* Colors for website */
  colors: {
    primaryColor: "#19af54",
    secondaryColor: "#000"
  },
  editUrl: "https://github.com/LatamLink/latamlink.io/edit/master/docs/",
  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} LatamLink`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: "default"
  },
  separateCss: [
    "css/static_website.css"
  ],
  algolia: {
    apiKey: 'f7e83f64ca037b5315b5ccd56f79910c',
    indexName: 'latamlink',
    algoliaOptions: {} // Optional, if provided by Algolia
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ["https://buttons.github.io/buttons.js"],

  // On page navigation for the current documentation page.
  onPageNav: "separate",
  // No .html extensions for paths.
  cleanUrl: true,

  twitterUsername: "LatamLink_EOS",
  // Open Graph and Twitter card images.
  ogImage: "img/undraw_online.svg",
  twitterImage: "img/undraw_tweetstorm.svg",

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  // docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: "https://github.com/LatamLink/latamlink.io"
};

module.exports = siteConfig;