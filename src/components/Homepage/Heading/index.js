import React from 'react';
import styles from './styles';
import Logo from '../Logo';
import Container from '../Container';

class Heading extends React.Component {
  constructor() {
    super();

    this.state = {
      h2FontSize: 25,
      loveFontSize: 35,
    };
  }

  handleResize() {
    const width = window.innerWidth;

    if (width < 580) {
      this.setState({
        h2FontSize: 20,
        loveFontSize: 30,
      });
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  componentWillUnmount() {
    this.setState({
      h2FontSize: 25,
      loveFontSize: 35,
    });
  }

  render() {
    const { h2FontSize, loveFontSize } = this.state;
    const h2Styles = {
      ...styles.h2,
      fontSize: h2FontSize,
    };
    const loveStyles = {
      ...styles.love,
      fontSize: loveFontSize,
    };

    return(
      <Container>
        <div style={styles.container}>
          <Logo style={styles.logo}/>
          <h2 style={h2Styles}>
            UI Component Development Environment
            <br />
            You'll <span style={loveStyles}>♥</span> to use</h2>
        </div>
      </Container>
    );    
  }
}

export default Heading;
