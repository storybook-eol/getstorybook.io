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
};
