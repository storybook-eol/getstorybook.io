import React from 'react';
import styles from './styles';
import Container from '../Container';

const Navigation = () => (
  <Container>
    <div style={ styles.container }>
      <h3 style={ styles.h3 }>Basics</h3>
      <ul style={ styles.ul }>
        <li>Getting Started</li>
        <li>Writing Stories</li>
        <li>Build as a Static App</li>
        <li>Command Line Options</li>
      </ul>

      <h3 style={ styles.h3 }>Configuations</h3>
      <ul style={ styles.ul }>
        <li>Webpack Confugurations</li>
        <li>Babel Configurations</li>
        <li>Loading Files Dynamically</li>
      </ul>
    </div>
  </Container>
);

export default Navigation;
