import React from 'react';
import './style.css';

import storybookLogo from '../../../design/homepage/storybook-logo.png';

const Heading = () => (
  <div id="heading" className="row">
    <div className="col-xs-12">
      <img className="sb-title" src={storybookLogo} alt="Storybook Logo"/>
      <h3 className="sb-tagline">UI Development Environment<br/>You'll <span className="glyphicon glyphicon-heart heart"></span> to use</h3>
    </div>
  </div>
);

export default Heading;
