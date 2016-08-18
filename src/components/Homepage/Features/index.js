import React from 'react';
import styles from './styles';
import Container from '../Container';

const LI = ({children}) => (
  <li style={styles.li}>{children}</li>
);

LI.propTypes = {
  children: React.PropTypes.string,
};

class Features extends React.Component {
  constructor() {
    super();

    this.state = {
      h2FontSize: 28,
      ulFontSize: 20,
    };
  }

  handleResize() {
    const width = window.innerWidth;
    const fontSizes = {
      h2FontSize: 28,
      ulFontSize: 20,
    };

    if (width < 500) {
      fontSizes.h2FontSize = 24;
      fontSizes.ulFontSize = 16;
    }
      
    this.setState(fontSizes);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  componentWillUnmount() {
    this.setState({
      h2FontSize: 28,
      ulFontSize: 20,
    });
  }

  render() {
    const { h2FontSize, ulFontSize } = this.state;
    const headingStyles = {
      ...styles.heading,
      fontSize: h2FontSize,
    };
    const ulStyles = {
      ...styles.ul,
      fontSize: ulFontSize,
    };

    return(
      <div style={styles.container}>
        <div style={headingStyles}>FEATURES</div>
        <ul style={ulStyles}>
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
  }
}

export default Features;
