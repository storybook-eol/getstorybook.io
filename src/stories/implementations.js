import React from 'react';
import Header from '../components/Homepage/Header';
import Logo from '../components/Homepage/Logo';
import Heading from '../components/Homepage/Heading';
import Container from '../components/Container';

export default {
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
};
