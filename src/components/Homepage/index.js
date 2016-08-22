import React from 'react';
import Helmet from 'react-helmet';
import Header from './Header';
import Heading from './Heading';
import Demo from './Demo';
import Platforms from './Platforms';
import Features from './Features';
import GettingStarted from './GettingStarted';
import MainLinks from './MainLinks';
import AddonList from './AddonList';
import Footer from './Footer';

const Homepage = () => (
  <div>
    <Helmet
      htmlAttributes={{"lang": "en", "amp": undefined}}
      title="Storybook - UI Dev Environment you'll love to use."
    />
    <Header currentSection="home"/>
    <Heading />
    <Demo />
    <Platforms />
    <Features />
    <GettingStarted />
    <MainLinks />
    <AddonList />
    <Footer />
  </div>
);

export default Homepage;
