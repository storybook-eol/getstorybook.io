import React from 'react';
import { Flex, Box } from 'reflexbox';
import styles from './styles';
import Logo from '../Logo';
import Container from '../Container';

const Heading = () => (
  <Container>
    <Flex
      align="center"
      justify="center"
    >
      <Box>
        <div style={styles.container}>
          <a href="https://twitter.com/kadirahq">
            <img style={styles.icon} src={require('../../../design/homepage/twitter-logo.png')}/>
          </a>

          <a href="https://voice.kadira.io">
            <img style={styles.icon} src={require('../../../design/homepage/medium-logo.png')}/>
          </a>
        </div>
      </Box>
    </Flex>
  </Container>
);

export default Heading;
