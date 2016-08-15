import React from 'react';
import Homepage from '../components/Homepage';
import Header from '../components/Homepage/Header';
import Logo from '../components/Homepage/Logo';
import Heading from '../components/Homepage/Heading';
import Container from '../components/Container';
import Platforms from '../components/Homepage/Platforms';

export default {
  'Homepage.page': (
    <Homepage />
  ),
  'Homepage.header': (
    <Container>
      <Header />
    </Container>
  ),
  'Homepage.logo': (
    <Logo />
  ),
  'Homepage.heading': (
    <Container>
      <Heading />
    </Container>
  ),
  'Homepage.platforms': (
    <Container>
      <Platforms />
    </Container>
  ),
};
