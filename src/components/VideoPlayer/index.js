import React, { Component, PropTypes } from 'react';
import styles from './styles';

class VideoPlayer extends Component {
  render() {
    return (
      <div>
        <iframe width="420" height="315" src="https://www.youtube.com/embed/XGSy3_Czz8k"></iframe>
      </div>
    );
  }
}

VideoPlayer.propTypes = {
};

export default VideoPlayer;
