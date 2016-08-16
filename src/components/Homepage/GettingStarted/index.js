import React from 'react';
import styles from './styles';

const GettingStarted = () => (
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
);

export default GettingStarted;
