import React, { Component, PropTypes } from 'react';
import styles from './styles';
import twitter from './images/twitter.png';
import medium from './images/medium.png';

class Footer extends Component {
  render() {
    return (
      <div>
        <a href=""><img src={twitter} /></a>
        <a href=""><img src={medium} /></a>
      </div>
    );
  }
}

Footer.propTypes = {
};

export default Footer;
