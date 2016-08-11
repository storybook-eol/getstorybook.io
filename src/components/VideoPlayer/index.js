import React, { Component, PropTypes } from 'react';
import styles from './styles';
import { Flex, Box } from 'reflexbox';
import vp_cover from './images/vpcover.png';

class VideoPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showVideo: false,
    };
  }

  handleCoverClick() {
    this.setState({ showVideo: true });
  }

  render() {
    const { showVideo } = this.state;

    return (
      <Flex
        align="center"
        justify="center"
      >
        <Box>
          <div style={ styles.wrapper}>
            <div>
              <center>
                {
                  (!showVideo) ?
                  <img onClick={ this.handleCoverClick.bind(this) } style={ styles.cover } src={vp_cover} /> :
                  <iframe
                    style={ styles.iframe }
                    frameborder="0"
                    src="https://www.youtube.com/embed/XGSy3_Czz8k">
                  </iframe>
                }
              </center>
            </div>
          </div>
        </Box>
      </Flex>
    );
  }
}

VideoPlayer.propTypes = {
};

export default VideoPlayer;
