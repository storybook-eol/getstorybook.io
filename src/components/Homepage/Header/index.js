import React from 'react';
import './style.css';

const Header = () => (
  <div id="header" className="row">
    <div className="col-xs-12">
      <div id="header-title" className="pull-left">STORYBOOK</div>
      <div id="header-links" className="pull-right">
        <a href="/">Home</a>
        <a href="/docs">Docs</a>
        <a href="https://storybooks.io">Storybooks.io</a>
      </div>
    </div>
  </div>
);

export default Header;
