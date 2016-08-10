import React, { Component, PropTypes } from 'react';
import styles from './styles';

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
      <div style={ styles.wrapper }>
        <Header />
        <Logo />
        <UVP />
        <VideoPlayer />
        <Features />
        <GettingStarted />
        <MainLinks />
        <Footer />
      </div>
    );
  }
}

HomePage.propTypes = {
};

export default HomePage;
