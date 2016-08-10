import React, { Component, PropTypes } from 'react';
import styles from './styles';

class GettingStarted extends Component {
  render() {
    return (
      <div style={ styles.wrapper }>
        <h3 style={ styles.h3 }>Getting Started</h3>

        <div style={ styles.code }>
          npm i -g getstorybook<br />
          cd my-app<br />
          getstorybook<br />
        </div>
      </div>
    );
  }
}

GettingStarted.propTypes = {
};

export default GettingStarted;
