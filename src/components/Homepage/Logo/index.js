import React, { Component, PropTypes } from 'react';
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

    if (width < 400) {
      dynamicFontSize = 35;
    }

    if (width < 300) {
      dynamicFontSize = 25;
    }

    this.setState({
      fontSize: dynamicFontSize,
    });
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  render() {
    const { fontSize } = this.state;

    const containerStyles = {
      ...styles.container,
      ...this.props.style,
      fontSize
    };
    return (
      <Flex>
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
      </Flex>
    );
  }
}

export default Logo;
