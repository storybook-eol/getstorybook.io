import React from 'react';
import Helmet from 'react-helmet';
import Header from '../Homepage/Header';
import DocsHeader from './DocsHeader';
import Navigation from './Navigation';
import Content from './Content';
import Container from './Container';
import { Flex, Box } from 'reflexbox';

const Homepage = () => (
  <div>
    <Helmet
      htmlAttributes={{"lang": "en", "amp": undefined}}
      title="Documentation | React Storybook"
    />
    <Header />
    <DocsHeader />
    <Container>
    <Flex>
      <Box col={3}>
        <Navigation
          sections={[
            {
              heading: 'Basics',
              items: [
                { caption: 'Getting Started', link: '/basics/getting-started' },
                { caption: 'Writing Stories', link: '/basics/getting-started' },
                { caption: 'Build as a Static App', link: '/basics/getting-started' },
              ]
            },

            {
              heading: 'Configuations',
              items: [
                { caption: 'Default Config', link: '/basics/getting-started' },
                { caption: 'Webpack', link: '/basics/getting-started' },
                { caption: 'Babel', link: '/basics/getting-started' },
              ]
            },
          ]}
          selectedSection="Basics"
          selectedItem="Writing Stories"
        />
      </Box>
      <Box>
        <Content
          title="Writing Stories"
          content={`
You need to write stories to show your components inside React Storybook.<br/>
We've a set of APIs allows you to write stories and do more with them.

When you are writing stories, you can follow these guidelines<br/>
to write great stories.

* Write UI components by passing data via props.
* In this way, you can isolate UI components easilly.
* Do not write app-specific code inside your UI components.

~~~js
  import { linkTo } from @kadira/Storybook

  storiesOf('Toggle', module)
    .add('on', () => {
      return <Toggle value={true} onChange={linkTo('Toggle', 'off')} />
    })
    .add('off', () => {
      return <Toggle value={false} onChange={linkTo('Toggle', 'on')} />
    });
~~~
          `}
        />
      </Box>
    </Flex>
    </Container>
  </div>
);

export default Homepage;
