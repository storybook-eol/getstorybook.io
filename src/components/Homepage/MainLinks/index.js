import React, { Component, PropTypes } from 'react';
import radium, { StyleRoot } from 'radium';
import { Flex, Box } from 'reflexbox';
import { Link } from 'react-router';
import Container from '../Container';
import styles from './styles';


class ATag extends Component {
  renderLocalLink() {
    const { icon, caption, href } = this.props;
    return (
      <Link style={styles.a} to={href}>
        <img style={styles.icon} src={icon} role="presentation"/>
        <br/>
        { caption }
      </Link>
    );
  }

  renderOutsideLink() {
    const { icon, caption, href } = this.props;
    return (
      <a style={styles.a} href={href}>
        <img style={styles.icon} src={icon} role="presentation"/>
        <br/>
        { caption }
      </a>
    );
  }

  render() {
    const { href } = this.props;
    return (
      <div style={styles.link}>
        {/^http/.test(href)? this.renderOutsideLink() : this.renderLocalLink()}
      </div>
    );
  }
}

ATag.propTypes = {
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
    const stateObj = {
      col: false,
    };

    if (width < 680) {
      stateObj.col = true;
    }
    
    this.setState(stateObj);
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
        <StyleRoot>
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
                <ATag
                  icon={require('../../../design/homepage/slack-icon.png')}
                  caption="Join Us on Slack"
                  href="https://storybooks-slackin.herokuapp.com/"
                />
              </Box>
              <Box
                auto
                style={styles.box}
              >
                <ATag
                  icon={require('../../../design/homepage/docs-icon.png')}
                  caption="Read Docs"
                  href="/docs"
                />
              </Box>
              <Box
                auto
                style={styles.box}
              >
                <ATag
                  icon={require('../../../design/homepage/mail-icon.png')}
                  caption="Get Newsletter"
                  href="https://tinyletter.com/storybooks"
                />
              </Box>
            </Flex>
          </div>
        </StyleRoot>
      </Container>    
    );   
  }
}

export default radium(MainLinks);
