import React from 'react';
import Homepage from '../components/Homepage';
import Header from '../components/Homepage/Header';
import Heading from '../components/Homepage/Heading';
import Demo from '../components/Homepage/Demo';
import Platforms from '../components/Homepage/Platforms';
import MainLinks from '../components/Homepage/MainLinks';
import Featured from '../components/Homepage/Featured';
import Footer from '../components/Homepage/Footer';
import Docs from '../components/Docs';
import DocsContainer from '../components/Docs/Container';
import DocsContent from '../components/Docs/Content';
import DocsNav from '../components/Docs/Nav';

export default {
  'Homepage.page': (
    <Homepage />
  ),
  'Homepage.header': (
    <Header />
  ),
  'Homepage.heading': (
    <Heading />
  ),
  'Homepage.demo': (
    <Demo />
  ),
  'Homepage.built-for': (
    <Platforms />
  ),
  'Homepage.main-links': (
    <MainLinks />
  ),
  'Homepage.featured-storybooks': (
    <Featured />
  ),
  'Homepage.footer': (
    <Footer />
  ),
  'Docs.page': (
    <Docs />
  ),
  'Docs.docs-container': (
    <DocsContainer />
  ),
  'Docs.docs-content': (
    <DocsContent />
  ),
  'Docs.docs-nav': (
    <DocsNav />
  ),
};
