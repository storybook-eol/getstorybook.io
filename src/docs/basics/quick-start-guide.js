import {stripIndent} from 'common-tags'

export default {
  id: "quick-start-guide",
  title: "Quick Start Guide",
  content: stripIndent`
    React Storybook is very easy to use. You can use it with any kind of React project.
    Follow these steps to get started with Storybook.

    ~~~sh
    npm i -g getstorybook
    cd your-project
    getstorybook
    ~~~

    This will configure your app for Storybook. You can run your Storybook with:

    ~~~
    npm run storybook
    ~~~

    Then you can access your storybook from the browser.

    ## What's happening under the hood

    Our **getstorybook** tool simply configures Storybook for your React app or library. This is what happens when you run the getstorybook command:

    * It will detect your project type and prepare a configuration (it supports any React app/library and Meteor).
    * It will add the necessary NPM modules into your app.
    * It will create a Storybook config directory and creates a default config file.
    * It will create a directory called \`stories\`, and you can write your stories inside that.
    * It will also add some NPM scripts, like \`npm run storybook\`.

    Now you can start [writing stories](http://link-to-writing-stories/) for your project.
  `
};
