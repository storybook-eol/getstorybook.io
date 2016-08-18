import React from 'react';
import styles from './styles';
import Container from '../Container';
import { Link } from 'react-router';

const Header = () => (
  <Container>
    <div style={styles.container}>
      <Link style={styles.link} activeStyle={styles.currentLink} to='/'>Home</Link>
      <Link style={styles.link} activeStyle={styles.currentLink} to='/docs'>Docs</Link>
      <a style={styles.link} target="_blank" href='https://storybooks.io'>Storybooks.io</a>
    </div>
  </Container>
);

export default Header;
