import React from 'react';
import styles from './styles';
import Container from '../Container';

const Heading = () => (
  <Container>
    <div style={styles.container}>
      <a href="https://twitter.com/kadirahq">
        <img
          style={styles.icon}
          src={require('../../../design/homepage/twitter-logo.png')}
          alt="twitter-logo"
        />
      </a>

      <a href="https://voice.kadira.io">
        <img
          style={styles.icon}
          src={require('../../../design/homepage/medium-logo.png')}
          alt="medium-logo"
        />
      </a>
    </div>
  </Container>
);

export default Heading;
