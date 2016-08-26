import React from 'react';
import radium, { StyleRoot } from 'radium';
import styles from './styles';
import Logo from '../Logo';
import Container from '../Container';

class Heading extends React.Component {
  render() {
    return(
      <Container>
        <StyleRoot>
          <div style={styles.container}>
            <Logo style={styles.logo}/>
            <h2 style={styles.h2}>
              UI Component Development Environment
              <br />
              You'll <span style={styles.love}>♥</span> to use</h2>
          </div>
        </StyleRoot>
      </Container>
    );    
  }
}

export default radium(Heading);
