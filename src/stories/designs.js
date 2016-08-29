export default {
  "Homepage.page": {
    design: require('../design/homepage/homepage.png'),
    note: `
      For this we'll use Bootsrap for sake of simplicity. (Specially for the layouts).
      Then we use Open Sans as the base font.

      Overall this will be a simple design.
      All these content should render inside a BS containers and it support mobile.
    `
  },

  "Homepage.header": {
    design: require('../design/homepage/header.png'),
    note: `
      Just a simple header. In the mobile view, this will show one after other.
    `
  },

  "Homepage.heading": {
    design: require('../design/homepage/heading.png'),
    note: `
      Use the "Storybook" font to make it super bold. (font-weight=800)
      In the mobile view, try to make the font-size smaller.
    `
  },

  "Homepage.demo": {
    design: require('../design/homepage/demo.png'),
    note: `
      Use the image located at src/design/homepage/screenshot.png for this.
      But in production we use an animated GIF here.
    `
  },

  "Homepage.built-for": {
    design: require('../design/homepage/built-for.png'),
    note: `
      In this, React and React Native are links for following repos:

      * React - https://github.com/kadirahq/react-storybook
      * React Native - https://github.com/kadirahq/react-native-storybook

      ---

      This one and few components below share some commong features.
      Those includes bottom border and margins. So create a common component inside
      the Homepage/styles.css stylesheet and use that class in this other components below.
    `
  },

  "Homepage.main-links": {
    design: require('../design/homepage/main-links.png'),
    note: `
      This one has two headings. Use a common style in Homepage/styles.css and use it in here.
      You can also use that in the component below.

      In the mobile view, two sections in here show one after other.
    `
  },

  "Homepage.featured-storybooks": {
    design: require('../design/homepage/featured-storybooks.png'),
    note: `
      This components accepts a input as follows and render links to storybooks as shown above.
      In the mobile view, these links shows one after other.

      When we clicked on the Name in the above, we should load the storybook in a new tab.

      Here are the data for this components (to show links):

      [
        {
          owner: "https://avatars0.githubusercontent.com/u/698437?v=3&s=200",
          storybook: {
            "name": "React Dates",
            "link": "http://airbnb.io/react-dates/",
          }
          source: "https://github.com/airbnb/react-dates"
        },

        {
          owner: "https://avatars3.githubusercontent.com/u/239676?v=3&s=460",
          storybook: {
            "name": "React Native Web",
            "link": "https://necolas.github.io/react-native-web/storybook",
          }
          source: "https://github.com/necolas/react-native-web"
        },

        {
          owner: "https://avatars1.githubusercontent.com/u/15616844?v=3&s=200",
          storybook: {
            "name": "React Button",
            "link": "http://kadira-samples.github.io/react-button/",
          }
          source: "https://github.com/kadira-samples/react-button"
        },
      ]
    `
  },

  "Homepage.footer": {
    design: require('../design/homepage/footer.png'),
    note: `
      Here are the links:

      * Slack: https://storybooks-slackin.herokuapp.com/
      * NewsLetter: https://tinyletter.com/storybooks
      * Twiiter: https://twitter.com/kadirahq
      * Medium: https://voice.kadira.io
    `
  },
};
