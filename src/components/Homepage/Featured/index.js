import React from 'react';
import './style.css';

const Featured = () => (
  <div id="featured" className="row">
    <div className=".col-xs-12">
      <h2>Featured Storybooks</h2>
      <div className="row">
        <div className="ft-sbooks col-xs-6 col-md-4">
          <div className="col-md-4">
            <a href="http://airbnb.io/react-dates/" target="_blank">
              <center>
                <div className="ft-logo airbnb"></div>
              </center>
            </a>
          </div>
          <div className="desc col-md-8">
            <p>React Dates</p>
            <a href="https://github.com/airbnb/react-dates" target="_blank">source</a>
          </div>
        </div>

        <div className="ft-sbooks col-xs-6 col-md-4">
          <div className="col-md-4">
            <a href="https://necolas.github.io/react-native-web/storybook" target="_blank">
              <center>
                <div className="ft-logo rnw"></div>
              </center>
            </a>
          </div>
          <div className="desc col-md-8">
            <p>React Native Web</p>
            <a href="https://github.com/necolas/react-native-web" target="_blank">source</a>
          </div>
        </div>

        <div className="ft-sbooks col-xs-6 col-md-4">
          <div className="col-md-4">
            <a href="http://kadira-samples.github.io/react-button/" target="_blank">
              <center>
                <div className="ft-logo rb"></div>
              </center>
            </a>
          </div>
          <div className="desc col-md-8">
            <p>React Button</p>
            <a href="https://github.com/kadira-samples/react-button" target="_blank">source</a>
          </div>
        </div>
      </div>
      <hr/>
    </div>
  </div>
);

export default Featured;
