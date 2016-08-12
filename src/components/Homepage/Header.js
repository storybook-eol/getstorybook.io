import React from 'react';
import styles from '../theme';

const linkStyle = {
  ...styles.base,
  color: '#333',
  padding: '0 5px',
  textDecoration: 'none',
  fontSize: 15
};

const currentLinkStyle = {
  ...linkStyle,
  fontWeight: 600,
}

const containerStyle = {
  textAlign: 'right',
  padding: "60px 0",
}

const Header = () => (
  <div style={containerStyle}>
    <a style={currentLinkStyle} href='/'>Home</a>
    <a style={linkStyle} href='/docs'>Docs</a>
    <a style={linkStyle} href='https://storybooks.io'>Storybooks.io</a>
  </div>
);

export default Header;
