import React, { Component } from 'react';
import radium, { StyleRoot } from 'radium';
import { Flex, Box } from 'reflexbox';
import styles from './styles';

class Logo extends Component {
  render() {
    const containerStyles = {
      ...styles.container,
      ...this.props.style,
    };
    return (
      <Flex
        align="center"
        justify="center"
      >
        <StyleRoot>
          <div style={ containerStyles }>
            <Box>
              <span style={ styles.span.a }>S</span>
              <span style={ styles.span.b }>T</span>
              <span style={ styles.span.c }>O</span>
              <span style={ styles.span.d }>R</span>
              <span style={ styles.span.e }>Y</span>
              <span style={ styles.span.f }>B</span>
              <span style={ styles.span.g }>O</span>
              <span style={ styles.span.h }>O</span>
              <span style={ styles.span.i }>K</span>
            </Box>
          </div>
        </StyleRoot>
      </Flex>
    );
  }
}

export default radium(Logo);
