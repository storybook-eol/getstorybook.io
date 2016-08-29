import React from 'react';
import './style.css';

const MainLinks = () => (
  <div id="main-links" className="row">
    <div className="col-md-12">
      <div className="row main-links-container">
        <div className="col-xs-6 try-now">
          <h2>Try Now</h2>
          <pre>
            <code>
              npm i -g getstorybook<br/>
              cd my-app<br/>
              getstorybook<br/>
            </code>
          </pre>
        </div>

        <div className="col-xs-6 read-docs">
          <h2>Read Docs</h2>
          <center>
            <a href="http://docs.storybooks.io/" target="_blank">
              <div className="docs-img"></div>
            </a>
          </center>
        </div>
      </div>
      <hr />
    </div>
  </div>
);

export default MainLinks;
