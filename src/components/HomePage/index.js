import React, { Component, PropTypes } from 'react';
import styles from './styles';
import { Flex, Box } from 'reflexbox'

import Header from '../Header';
import Logo from '../Logo';
import UVP from '../UVP';
import VideoPlayer from '../VideoPlayer';
import Features from '../Features';
import GettingStarted from '../GettingStarted';
import MainLinks from '../MainLinks';
import Footer from '../Footer';

class HomePage extends Component {
  render() {
    return (
      <Flex
        align="center"
        justify="center"
      >
        <div style={ styles.wrapper }>
          <Box>
            <Header />
            <Logo />
            <UVP />
            <VideoPlayer />
            <Features />
            <GettingStarted />
            <MainLinks />
            <Footer />
          </Box>
        </div>
      </Flex>
    );
  }
}

HomePage.propTypes = {
};

export default HomePage;
