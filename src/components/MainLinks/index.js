import React, { Component, PropTypes } from 'react';
import styles from './styles';
import docs from './images/docs.png';
import slack from './images/slack.png';
import subscribe from './images/subscribe.png';

class MainLinks extends Component {
  render() {
    return (
      <div style={ styles.wrapper }>
        <div style={ styles.box }>
          <a
            style={ styles.a }
            href="https://docs.getstorybook.io"
            target="_blank"
          >
            <img style={ styles.img } src={docs} />
            <p>Read Docs</p>
          </a>
        </div>

        <div style={ styles.box }>
          <a
            style={ styles.a }
            href="https://slack.getstorybook.io"
            target="_blank"
          >
            <img style={ styles.img } src={slack} />
            <p>Join Us on Slack</p>
          </a>
        </div>

        <div style={ styles.box }>
          <a
            style={ styles.a }
            href="https://tinyletter.com/storybooks"
            target="_blank"
          >
            <img style={ styles.img } src={subscribe} />
            <p>Subscribe to NewsLetter</p>
          </a>
        </div>
      </div>
    );
  }
}

MainLinks.propTypes = {
};

export default MainLinks;
