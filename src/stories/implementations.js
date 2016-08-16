import React from 'react';
import Homepage from '../components/Homepage';
import Header from '../components/Homepage/Header';
import Logo from '../components/Homepage/Logo';
import Heading from '../components/Homepage/Heading';
import Platforms from '../components/Homepage/Platforms';
import Features from '../components/Homepage/Features';
import GettingStarted from '../components/Homepage/GettingStarted';
import MainLinks from '../components/Homepage/MainLinks';
import Addon from '../components/Homepage/Addon';
import AddonList from '../components/Homepage/AddonList';
import Demo from '../components/Homepage/Demo';
import Footer from '../components/Homepage/Footer';

import DocsHeader from '../components/Docs/DocsHeader';
import Navigation from '../components/Docs/Navigation';
import Content from '../components/Docs/Content';

export default {
  'Homepage.page': (
    <Homepage />
  ),
  'Homepage.header': (
    <Header />
  ),
  'Homepage.logo': (
    <Logo />
  ),
  'Homepage.heading': (
    <Heading />
  ),
  'Homepage.demo': (
    <Demo/>
  ),
  'Homepage.platforms': (
    <Platforms />
  ),
  'Homepage.features': (
    <Features />
  ),
  'Homepage.getting-started': (
    <GettingStarted />
  ),
  'Homepage.main-links': (
    <MainLinks />
  ),
  'Homepage.addon': (
    <Addon
      name="Action Logger"
      image={require('../design/homepage/addon-sample-image.png')}
      description={`
        Action Logger is something similar to the Chrome's dev console.
        <br/>
        With that, you can debug events in UI components and inspect their output.
      `}
      link="http://google.com"
    />
  ),
  'Homepage.addon-list': (
    <AddonList/>
  ),
  'Homepage.footer': (
    <Footer/>
  ),

  'Docs.header': (
    <Header />
  ),
  'Docs.docs-header': (
    <DocsHeader />
  ),
  'Docs.navigation': (
    <Navigation />
  ),
  'Docs.content': (
    <Content
      title="Writing Stories"
      mdText={`
        You need to write stories to show your components inside React Storybook.<br/>
        We've a set of APIs allows you to write stories and do more with them.

        When you are writing stories, you can follow these guidelines<br/>
        to write great stories.

        * Write UI components by passing data via props.
        * In this way, you can isolate UI components easilly.
        * Do not write app-specific code inside your UI components.

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
      `}
    />
  ),
};
