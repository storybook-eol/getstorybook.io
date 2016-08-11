import React, { Component, PropTypes } from 'react';
import styles from './styles';
import { Flex, Box } from 'reflexbox';

class GettingStarted extends Component {
  render() {
    return (
      <Flex
        align="center"
        justify="center"
      >
        <Box>
          <div style={ styles.wrapper }>
            <h3 style={ styles.h3 }>Getting Started</h3>

            <div style={ styles.code }>
              npm i -g getstorybook<br />
              cd my-app<br />
              getstorybook<br />
            </div>
          </div>
        </Box>
      </Flex>
    );
  }
}

GettingStarted.propTypes = {
};

export default GettingStarted;
