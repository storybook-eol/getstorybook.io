import React, { Component, PropTypes } from 'react';
import styles from './styles';
import twitter from './images/twitter.png';
import medium from './images/medium.png';

class Footer extends Component {
  render() {
    return (
      <div style={ styles.wrapper }>
        <a
          target="_blank"
          href="https://twitter.com/kadirahq"
        >
          <img style={ styles.img } src={twitter} />
        </a>
        <a
          href="https://voice.kadira.io/"
        >
          <img style={ styles.img } src={medium} />
        </a>
      </div>
    );
  }
}

Footer.propTypes = {
};

export default Footer;
