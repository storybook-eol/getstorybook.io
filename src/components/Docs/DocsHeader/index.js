import React from 'react';
import Container from '../Container';
import styles from './styles';

const DocsHeader = () => (
  <Container>
    <div style={styles.container}>
      <h1 style={styles.h1}>Documentation for React Storybook</h1>
      <div style={styles.links}>
        Other Docs:&nbsp;
        <a
          style={styles.link}
          href="https://github.com/kadirahq/react-native-storybook"
          target="_blank"
        >
          React Native
        </a>
      </div>
    </div>
  </Container>
);

export default DocsHeader;
