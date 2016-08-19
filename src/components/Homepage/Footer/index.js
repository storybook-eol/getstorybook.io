import React from 'react';
import { Flex, Box } from 'reflexbox';
import radium, { StyleRoot } from 'radium';
import styles from './styles';
import Logo from '../Logo';
import Container from '../Container';

class Footer extends React.Component {
  render() {
    return(
      <Container>
        <Flex
          align="center"
          justify="center"
        >
          <Box>
            <StyleRoot>
            <div style={ styles.container }>
              <a href="https://twitter.com/kadirahq" target="_blank">
                <img style={ styles.icon } src={require('../../../design/homepage/twitter-logo.png')}/>
              </a>

              <a href="https://voice.kadira.io" target="_blank">
                <img style={ styles.icon } src={require('../../../design/homepage/medium-logo.png')}/>
              </a>
            </div>
            </StyleRoot>
          </Box>
        </Flex>
      </Container>
    );
  }
}

export default radium(Footer);
