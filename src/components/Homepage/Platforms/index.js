import React from 'react';
import styles from './styles';

const Header = () => (
  <div style={styles.container}>
    <div>supports</div>
    <div style={styles.links}>
      <a style={styles.link} href='https://github.com/kadirahq/react-storybook'>React</a>
      &
      <a style={styles.link} href='https://github.com/kadirahq/react-native-storybook'>React Native</a>
    </div>
  </div>
);

export default Header;
