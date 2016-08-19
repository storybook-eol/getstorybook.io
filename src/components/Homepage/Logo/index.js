import React, { Component, PropTypes } from 'react';
import radium, { StyleRoot } from 'radium';
import { Flex, Box } from 'reflexbox';
import styles from './styles';

class Logo extends Component {
  constructor() {
    super();

    this.state = {
      fontSize: 70,
    };
  }

  handleResize() {
    const width = window.innerWidth;
    let dynamicFontSize = 70;

    if (width < 600) {
      dynamicFontSize = 55;
    }

    if (width < 500) {
      dynamicFontSize = 45;
    }

    if (width < 415) {
      dynamicFontSize = 35;
    }

    if (width < 376) {
      dynamicFontSize = 25;
    }

    this.setState({
      fontSize: dynamicFontSize,
    });
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  componentWillUnmount() {
    this.setState({
      fontSize: 70,
    });
  }

  render() {
    const { fontSize } = this.state;

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
