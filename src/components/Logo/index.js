import React, { Component, PropTypes } from 'react';
import styles from './styles';
import logo from './images/logo.png';

class Logo extends Component {
  render() {
    return (
      <div style={ styles.wrapper }>
        <img style={ styles.logo } src={logo} />
      </div>
    );
  }
}

Logo.propTypes = {
};

export default Logo;
