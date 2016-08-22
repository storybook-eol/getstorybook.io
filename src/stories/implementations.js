import React from 'react';
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
import Homepage from '../components/Homepage';

import DocsHeader from '../components/Docs/DocsHeader';
import Navigation from '../components/Docs/Navigation';
import Content from '../components/Docs/Content';
import Docs from '../components/Docs';

import { docsData } from './data';

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

  'Docs.page': (
    <Docs
      sections={docsData.sections}
      selectedItem={docsData.selectedItem}
    />
  ),

  'Docs.header': (
    <Header />
  ),
  'Docs.docs-header': (
    <DocsHeader />
  ),
  'Docs.navigation': (
    <Navigation
      sections={docsData.sections}
      selectedSection={docsData.selectedItem.sectionId}
      selectedItem={docsData.selectedItem.id}
    />
  ),
  'Docs.content': (
    <Content
      title={docsData.selectedItem.title}
      content={docsData.selectedItem.content}
    />
  ),
};
