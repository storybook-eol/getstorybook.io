import React from 'react';
import slackIcon from './images/slack.png';
import nlIcon from './images/mail.png';
import twitterIcon from './images/twitter.png';
import mediumIcon from './images/medium.png';
import './style.css';

const Footer = () => (
  <div id="footer" className="row">
    <div className="col-md-12">
      <div className="row logos">
        <div className="col-xs-12">
          <center>
            <a href="https://storybooks-slackin.herokuapp.com/" target="_blank">
              <img src={slackIcon} />
            </a>
            <a href="https://tinyletter.com/storybooks" target="_blank">
              <img src={nlIcon} />
            </a>
            <a href="https://twitter.com/kadirahq" target="_blank">
              <img src={twitterIcon} />
            </a>
            <a href="https://voice.kadira.io" target="_blank">
              <img src={mediumIcon} />
            </a>
          </center>
        </div>
      </div>

      <div id="copyright" className="row">
        <p>Built by Kadira</p>
      </div>
    </div>
  </div>
);

export default Footer;
