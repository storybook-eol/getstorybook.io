import React, { Component, PropTypes } from 'react';
import styles from './styles';

class Features extends Component {
  render() {
    return (
      <div>
        <h3>Features</h3>
        <p>Render UI components without your app 
        Instance UI updates as you edit components 
        Works with any kind of react app 
        List different states of your components 
        A lot of addons (variations, prop editing)
        Deployable as a static web app
        Open Source under MIT License</p>
      </div>
    );
  }
}

Features.propTypes = {
};

export default Features;
