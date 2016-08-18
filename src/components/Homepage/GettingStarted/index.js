import React from 'react';
import styles from './styles';
import Container from '../Container';

class GettingStarted extends React.Component {
  constructor() {
    super();

    this.state = {
      headigFontSize: 28,
      preFontSize: 20,
    };
  }

  handleResize() {
    const width = window.innerWidth;
    const fontSizes = {
      headigFontSize: 28,
      preFontSize: 20,
    };

    if (width < 500) {
      fontSizes.headigFontSize = 24;
      fontSizes.preFontSize = 16;
    }
    
    this.setState(fontSizes);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  componentWillUnmount() {
    this.setState({
      headigFontSize: 28,
      preFontSize: 20,
    });
  }

  render() {
    const { headigFontSize, preFontSize } = this.state;
    const headingStyles = {
      ...styles.heading,
      fontSize: headigFontSize,
    };
    const preStyles = {
      ...styles.pre,
      fontSize: preFontSize,
    };

    return(
      <div style={styles.container}>
        <div style={headingStyles}>GETTING STARTED</div>
        <div style={preStyles}>
          <code>
            npm i -g getstorybook<br/>
            cd my-app<br/>
            getstorybook
          </code>
        </div>
      </div>
    );   
  }  
}

export default GettingStarted;
