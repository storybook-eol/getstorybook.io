import React from 'react';
import ReactMarkdown from 'react-markdown';
import Container from '../Container';

const input = `
  \`\`\`js
    import { linkTo } from @kadira/Storybook

    storiesOf('Toggle', module)
      .add('on', () => {
        return <Toggle value={true} onChange={linkTo('Toggle', 'off')} />
      })
      .add('off', () => {
        return <Toggle value={false} onChange={linkTo('Toggle', 'on')} />
      });  
  \`\`\`
`;

const Content = ({title, mdText}) => (
  <Container>
    <div>
      <h2>{ title }</h2>
      
      <p>
        You need to write stories to show your components inside React Storybook.<br/>
        We've a set of APIs allows you to write stories and do more with them.
      </p>

      <p>
        When you are writing stories, you can follow these guidelines<br/>
        to write great stories.
      </p>

      <ul>
        <li>Write UI components by passing data via props.</li>
        <li>In this way, you can isolate UI components easilly.</li>
        <li>Do not write app-specific code inside your UI components.</li>
      </ul>

      <div>
        <code>
          <ReactMarkdown source={input} />
        </code>
      </div>
    </div>
  </Container>
);

export default Content;
