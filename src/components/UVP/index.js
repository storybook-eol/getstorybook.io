import React, { Component, PropTypes } from 'react';
import styles from './styles';

class UVP extends Component {
  render() {
    return (
      <div style={ styles.wrapper }>
        <p style={ styles.p }>UI component dev environment<br />you'd love to use</p>
        <p style={ styles.p }>( Works with &nbsp;
          <a
            style={ styles.a }
            href="https://github.com/kadirahq/react-storybook"
            target="_blank"
          >
            React
          </a> & &nbsp;
          <a
            style={ styles.a }
            href="https://github.com/kadirahq/react-native-storybook"
            target="_blank"
          >
            React Native
          </a> )
        </p>
      </div>
    );
  }
}

UVP.propTypes = {
};

export default UVP;
