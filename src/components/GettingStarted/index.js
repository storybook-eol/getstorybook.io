import React, { Component, PropTypes } from 'react';
import styles from './styles';

class GettingStarted extends Component {
  render() {
    return (
      <div>
        <h3>Getting Started</h3>

        <code>
          <pre>
            npm i -g getstorybook
            cd my-app
            getstorybook
          </pre>
        </code>
      </div>
    );
  }
}

GettingStarted.propTypes = {
};

export default GettingStarted;
