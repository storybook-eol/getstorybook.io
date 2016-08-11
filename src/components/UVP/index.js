import React, { Component, PropTypes } from 'react';
import styles from './styles';
import { Flex, Box } from 'reflexbox';

class UVP extends Component {
  render() {
    return (
      <Flex
        align="center"
        justify="center"
      >
        <Box>
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
        </Box>
      </Flex>
    );
  }
}

UVP.propTypes = {
};

export default UVP;
