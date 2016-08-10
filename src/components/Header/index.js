import React, { Component, PropTypes } from 'react';
import styles from './styles';

class Header extends Component {
  render() {
    return (
      <div style={ styles.wrapper }>
        <ul style={ styles.ul }>
          <li style={ styles.li.all }>
            <a style={ styles.li.a } href="/">Home</a>
          </li>
          <li style={ styles.li.all }>
            <a style={ styles.li.a } href="https://docs.getstorybook.io">Docs</a>
          </li>
          <li style={ styles.li.all }>
            <a style={ styles.li.a } href="#">Academy</a>
          </li>
          <li style={ styles.li.last }>
            <a style={ styles.li.a } href="https://storybooks.io">Storybooks.io</a>
          </li>
        </ul>
      </div>
    );
  }
}

Header.propTypes = {
};

export default Header;
