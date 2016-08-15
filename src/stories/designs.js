export default {
  "Homepage.page": {
    design: require('../design/homepage/homepage.png'),
    note: `
      This is the homepage. Basically, we need use 1024 as the maximum view of our page.
      When scaled, we'll put our site on the center around that 2014.
      We also need to support mobile sites.

      For the most of the fonts in this page is use following font-face unless noted.
      See: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
    `
  },

  "Homepage.header": {
    design: require('../design/homepage/header.png'),
    note: `
      Use 15 as the font size.
    `
  },

  "Homepage.logo": {
    design: require('../design/homepage/logo.png'),
    note: `
      Here we use the font as "Arial".
      That's because, we need to get the same logo on every browser.
    `
  },

  "Homepage.heading": {
    design: require('../design/homepage/heading.png'),
  },

  "Homepage.demo": {
    design: require('../design/homepage/demo.png'),
    note: `
      Here we'll be using a GIF demo on how to use storybook.
    `
  },

  "Homepage.platforms": {
    design: require('../design/homepage/flatform.png'),
  },

  "Homepage.features": {
    design: require('../design/homepage/features.png'),
  },

  "Homepage.getting-started": {
    design: require('../design/homepage/getting-started.png'),
  },

  "Homepage.main-links": {
    design: require('../design/homepage/main-links.png'),
    note: `
      Use the logos in the "src/design/homepage" directory.
      Add following links:

      * Slack: https://storybooks-slackin.herokuapp.com/
      * Docs: /docs
      * Newsletter: https://tinyletter.com/storybooks
    `
  },

  "Homepage.addon": {
    design: require('../design/homepage/addon.png'),
    note: `
      Use this addon is a link. Add a dummy link for now.
      We can use something working later on.
    `
  },

  "Homepage.addon-list": {
    design: require('../design/homepage/addon-list.png'),
  },

  "Homepage.footer": {
    design: require('../design/homepage/footer.png'),
    note: `
      Use the logos in the "src/design/homepage" directory.
    `
  }
};
