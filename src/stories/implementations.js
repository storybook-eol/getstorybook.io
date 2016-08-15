import React from 'react';
import Homepage from '../components/Homepage';
import Header from '../components/Homepage/Header';
import Logo from '../components/Homepage/Logo';
import Heading from '../components/Homepage/Heading';
import Platforms from '../components/Homepage/Platforms';
import Features from '../components/Homepage/Features';
import GettingStarted from '../components/Homepage/GettingStarted';
import MainLinks from '../components/Homepage/MainLinks';

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
};
