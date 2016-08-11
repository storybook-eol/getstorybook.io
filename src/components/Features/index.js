import React, { Component, PropTypes } from 'react';
import styles from './styles';
import { Flex, Box } from 'reflexbox';

class Features extends Component {
  render() {
    return (
      <Flex
        align="center"
        justify="center"
      >
        <div style={ styles.wrapper }>
          <h3 style={ styles.h3 }>Features</h3>
          <p style={ styles.p }>Render UI components without your app<br />
          Instance UI updates as you edit components<br />
          Works with any kind of react app<br />
          List different states of your components<br />
          A lot of addons (variations, prop editing)<br />
          Deployable as a static web app<br />
          Open Source under MIT License</p>
        </div>
      </Flex>
    );
  }
}

Features.propTypes = {
};

export default Features;
