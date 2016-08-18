import React, { Component, PropTypes } from 'react';
import styles from './styles';
import { Flex, Box } from 'reflexbox';
import Container from '../Container';

export const Link = ({ icon, caption, href }) => (
  <div style={styles.link}>
    <a style={styles.a} href={href}>
      <img style={styles.icon} src={icon}/>
      <br/>
      { caption }
    </a>
  </div>
);

Link.propTypes = {
  link: React.PropTypes.string,
  caption: React.PropTypes.string,
  href: React.PropTypes.string,
};


class MainLinks extends Component {
  constructor() {
    super();

    this.state = {
      col: false,
    };
  }

  handleResize() {
    const width = window.innerWidth;

    if (width < 600) {
      this.setState({
        col: true,
      });
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  componentWillUnmount() {
    this.setState({
      col: false,
    });
  }

  render() {
    const { col } = this.state;

    return (
      <Container>
        <div style={styles.container}>
          <Flex
            align="center"
            justify="center"
            column={col}
          >
            <Box
              auto
              style={styles.box}
            >
              <Link
                icon={require('../../../design/homepage/slack-icon.png')}
                caption="Join Us on Slack"
                href="https://storybooks-slackin.herokuapp.com/"
              />
            </Box>
            <Box
              auto
              style={styles.box}
            >
              <Link
                icon={require('../../../design/homepage/docs-icon.png')}
                caption="Read Docs"
                href="/docs"
              />
            </Box>
            <Box
              auto
              style={styles.box}
            >
              <Link
                icon={require('../../../design/homepage/mail-icon.png')}
                caption="Get Newsletter"
                href="https://tinyletter.com/storybooks"
              />
            </Box>
          </Flex>
        </div>
      </Container>    
    );   
  }
}

export default MainLinks;
