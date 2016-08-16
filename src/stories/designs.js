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
  },

  "Docs.header": {
    design: require('../design/docs/header.png'),
    note: `
      For the logo, use the the logo component used in the homepage.
      But use a use CSS zoom property to scale it down.
      May be you can use CSS transform too.
    `
  },

  "Docs.docs-header": {
    design: require('../design/docs/docs-header.png'),
    note: `
      Here this is something fixed for now. Don't add Vue or Angular2 links.
      For the ReactNative, just like our React Native Storybook repo.
    `
  },

  "Docs.navigation": {
    design: require('../design/docs/navigation.png'),
    note: `
      This is the basic navigation menu which is similar to BulletProofMeteor.
      Get titles and links from the outside and render this navigation.
      Also get the selectedItem to show it differently.
    `
  },

  "Docs.content": {
    design: require('../design/docs/content.png'),
    note: `
      This is the content area. Use https://github.com/rexxars/react-markdown
      to render markdown.
      For the markdown content use CSS to style it as in this project we support it.

      Beside markdown, get the title from the outside.
      (That's same as the selectedItem in the navigation).
    `
  },
};
