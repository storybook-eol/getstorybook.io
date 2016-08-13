import React from 'react';
import styles from './styles';

const Header = () => (
  <div style={styles.container}>
    <a style={styles.currentLink} href='/'>Home</a>
    <a style={styles.link} href='/docs'>Docs</a>
    <a style={styles.link} href='https://storybooks.io'>Storybooks.io</a>
  </div>
);

export default Header;
