import React from 'react';
import radium, { StyleRoot } from 'radium';
import styles from './styles';

class GettingStarted extends React.Component {
  render() {
    return(
      <div>
        <StyleRoot>
          <div style={styles.container}>
            <div style={styles.heading}>GETTING STARTED</div>
            <div style={styles.pre}>
              <code>
                npm i -g getstorybook<br/>
                cd my-app<br/>
                getstorybook
              </code>
            </div>
          </div>
        </StyleRoot>
      </div>
    );   
  }
}

export default radium(GettingStarted);
