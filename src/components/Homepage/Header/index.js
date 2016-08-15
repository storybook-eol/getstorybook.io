import React from 'react';
import styles from './styles';
import Container from '../Container';

const Header = () => (
  <Container>
    <div style={styles.container}>
      <a style={styles.currentLink} href='/'>Home</a>
      <a style={styles.link} href='/docs'>Docs</a>
      <a style={styles.link} href='https://storybooks.io'>Storybooks.io</a>
    </div>
  </Container>
);

export default Header;
