import {stripIndent} from 'common-tags'

const images = {
  addonActionsDemo: require('./static/addon-actions-demo.gif'),
};

export default {
  id: "introduction",
  title: "Introduction",
  content: stripIndent`
    By default, Storybook comes with a way to list stories and visualize them. Addons implements extra features for Storybook to make Storybook more useful.

    Basically, there are two types of addons. (Decorators and Native Addons)

    ## 1. Decorators

    These are wrapper components or Storybook decorators that wrap a story.

    ### Wrapper Components

    For example, let's say we want to center a story rendered on the screen. For that, we can use a wrapper component like this:

    ~~~js
    const Center = ({ children }) => (
      <div style={{ textAlign: "center" }}>
        { children }
      </div>
    );
    ~~~

    Then we can use it when writing stories.

    ~~~js
    storiesOf('Button', module)
      .add('with text', () => (
        <Center>
          <Button onClick={action('clicked')}>Hello Button</Button>
        </Center>
      ));
    ~~~

    ### Storybook Decorators

    You can also expose this functionality as a Storybook decorator and use it like this.

    ~~~js
    const CenterDecorator = (story) => (
      <div style={{ textAlign: "center" }}>
        {story()}
      </div>
    );

    storiesOf('Button', module)
      .addDecorator(CenterDecorator)
      .add('with text', () => (
        <Button onClick={action('clicked')}>Hello Button</Button>
      ))
      .add('with some emojies', () => (
        <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
      ));
    ~~~

    You can also add a decorator globally for all stories like this:

    ~~~js
    import {
        storiesOf, action, addDecorator
    } from '@kadira/storybook';

    const CenterDecorator = (story) => (
      <div style={{ textAlign: "center" }}>
        {story()}
      </div>
    );
    addDecorator(CenterDecorator);

    storiesOf('Welcome', module)
      .add('to Storybook', () => (
        <Welcome showApp={linkTo('Button')}/>
      ));

    storiesOf('Button', module)
      .add('with text', () => (
        <Button onClick={action('clicked')}>Hello Button</Button>
      ))
      .add('with some emojies', () => (
        <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
      ));
    ~~~

    > You can call \`addDecorator()\` inside the story definition file as shown above. But adding it to the Storybook config file is a much better option.

    ## 2. Native Addons

    Native addons use Storybook as a platform and interact with it. Native addons can add extra features beyond wrapping stories.

    For example, [storybook-actions](https://github.com/kadirahq/storybook-addon-actions) is such an addon.

    ![Demo of Storybook Addon Actions](${images.addonActionsDemo})

    > This addon ships with Storybook by default. [Check here] (https://github.com/kadirahq/storybook-addon-actions) for more info.

    It will allow you to inspect the parameters of any event of your components.

    See the following links to learn more about native addons:

    * [Using addons](/docs/addons/using-addons)
    * [Addon Galary](/docs/addons/addon-galary)
    * [Write your own addon](/docs/addons/writing-addons)
  `
};
