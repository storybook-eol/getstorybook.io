import React from 'react';
import Nav from '../Nav';
import Content from '../Content';
import './style.css';

const Container = () => (
  <div id="docs-container" className="col-xs-12">
    <div className="nav col-xs-6 col-md-2">
      <Nav />
    </div>
    <div className="content col-xs-12 col-md-10">
      <div className="nav-dropdown">
        <div>
          <select>
            <option>Basic</option>
            <option>Config</option>
          </select>
        </div>
        <div>
          <select>
            <option>intro</option>
            <option>content</option>
          </select>
        </div>
      </div>

      <Content />
    </div>
  </div>
);

export default Container;
