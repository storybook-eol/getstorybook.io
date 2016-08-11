import React, { Component, PropTypes } from 'react';
import styles from './styles';
import { Flex, Box } from 'reflexbox';

class Logo extends Component {
  render() {
    return (
      <Flex>
        <div style={ styles.wrapper }>
          <div style={ styles.border }>
            <span style={ styles.span.a }>S</span>
            <span style={ styles.span.b }>T</span>
            <span style={ styles.span.c }>O</span>
            <span style={ styles.span.d }>R</span>
            <span style={ styles.span.e }>Y</span>
            <span style={ styles.span.f }>B</span>
            <span style={ styles.span.g }>O</span>
            <span style={ styles.span.h }>O</span>
            <span style={ styles.span.i }>K</span>
          </div>
        </div>
      </Flex>
    );
  }
}

Logo.propTypes = {
};

export default Logo;
