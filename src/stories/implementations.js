import React from 'react';
import Header from '../components/Homepage/Header';
import Logo from '../components/Homepage/Logo';
import Heading from '../components/Homepage/Heading';
import Container from '../components/Container';
import Homepage from '../components/Homepage';

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
};
