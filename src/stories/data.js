export const docsData = {
  sections: [
    {
      id: 'basics',
      heading: 'Basics',
      items: [
        { id: 'getting-started', title: 'Getting Started' },
        { id: 'writing-stories', title: 'Writing Stories' },
        { id: 'build-as-a-static-app', title: 'Build as a Static App' },
      ],
    },
    {
      id: 'configurations',
      heading: 'Configuations',
      items: [
        { id: 'default-config', title: 'Default Config' },
        { id: 'webpack', title: 'Webpack' },
        { id: 'babel', title: 'Babel' },
      ],
    },
  ],
  selectedItem: {
    id: 'writing-stories',
    section: 'basics',
    title: 'Writing Stories',
    content: `
You need to write stories to show your components inside React Storybook. We've a set of APIs allows you to write stories and do more with them.

When you are writing stories, you can follow these guidelines to write great stories.

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
    `
  },
};
