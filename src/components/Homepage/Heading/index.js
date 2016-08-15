import React from 'react';
import styles from './styles';
import Logo from '../Logo';
import Container from '../Container';

const Heading = () => (
  <Container>
    <div style={styles.container}>
      <Logo style={styles.logo}/>
      <h2 style={styles.h2}>
        UI Component Development Environment
        <br />
        You'll <span style={styles.love}>♥</span> to use</h2>
    </div>
  </Container>
);

export default Heading;
