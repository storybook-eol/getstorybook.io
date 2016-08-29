import React from 'react';
import './style.css';

const Nav = () => (
  <div id="nav" className="row">
    <div className="col-xs-12">
      <div>
        <h3>Basics</h3>
        <ul>
          <li>Introduction</li>
          <li className="selected">Quick Start</li>
        </ul>

        <h3>Configurations</h3>
        <ul>
          <li>Default Setup</li>
          <li>CLI Option</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Nav;
