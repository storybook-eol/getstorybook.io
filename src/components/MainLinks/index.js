import React, { Component, PropTypes } from 'react';
import styles from './styles';
import docs from './images/docs.png';
import slack from './images/slack.png';
import subscribe from './images/subscribe.png';

class MainLinks extends Component {
  render() {
    return (
      <div>
        <a href="">
          <div>
            <img src={docs} />
            Read Docs
          </div>
        </a>

        <a href="">
          <div>
            <img src={slack} />
            Join Us on Slack
          </div>
        </a>

        <a href="">
          <div>
            <img src={subscribe} />
            Subscribe to NewsLetter
          </div>
        </a>
      </div>
    );
  }
}

MainLinks.propTypes = {
};

export default MainLinks;
