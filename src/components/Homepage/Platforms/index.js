import React from 'react';
import styles from './styles';
import Container from '../Container';

const Header = () => (
  <Container>
    <div style={styles.container}>
      <div>supports</div>
      <div style={styles.links}>
        <a style={styles.link} href='https://github.com/kadirahq/react-storybook'>React</a>
        &
        <a style={styles.link} href='https://github.com/kadirahq/react-native-storybook'>React Native</a>
      </div>
    </div>
  </Container>
);

export default Header;
