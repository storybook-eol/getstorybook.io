import React from 'react';
import styles from './styles';

const LI = ({children}) => (
  <li style={styles.li}>{children}</li>
);

LI.propTypes = {
  children: React.PropTypes.string,
};

const Header = () => (
  <div style={styles.container}>
    <div style={styles.heading}>FEATURES</div>
    <ul style={styles.ul}>
      <LI>Render UI Components without your app</LI>
      <LI>Instant UI updates as you code</LI>
      <LI>Keyboard shortcuts</LI>
      <LI>Configurable as you need</LI>
      <LI>A lot of addons</LI>
      <LI>Open Source under MIT License</LI>
      <LI>Active Community</LI>
    </ul>
  </div>
);

export default Header;
