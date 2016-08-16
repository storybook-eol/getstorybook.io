import React from 'react';
import { Flex, Box } from 'reflexbox';
import styles from './styles';
import Container from '../Container';

const Header = () => (
  <Container>
    <Flex
      justify="flex-end"
    >
      <Box>
        <div style={styles.container}>
          <a style={styles.currentLink} href='/'>Home</a>
          <a style={styles.link} href='/docs'>Docs</a>
          <a style={styles.link} href='https://storybooks.io'>Storybooks.io</a>
        </div>
      </Box>
    </Flex>
  </Container>
);

export default Header;
