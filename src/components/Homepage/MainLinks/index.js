import React from 'react';
import styles from './styles';
import { Flex, Box } from 'reflexbox';
import Container from '../Container';
import { Link } from 'react-router';


class ATag extends React.Component {
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

const MainLinks = () => (
  <Container>
    <div style={styles.container}>
      <Flex>
        <Box>
          <ATag
            icon={require('../../../design/homepage/slack-icon.png')}
            caption="Join Us on Slack"
            href="https://storybooks-slackin.herokuapp.com/"
          />
        </Box>
        <Box>
          <ATag
            icon={require('../../../design/homepage/docs-icon.png')}
            caption="Read Docs"
            href="/docs"
          />
        </Box>
        <Box>
          <ATag
            icon={require('../../../design/homepage/mail-icon.png')}
            caption="Get Newsletter"
            href="https://tinyletter.com/storybooks"
          />
        </Box>
      </Flex>
    </div>
  </Container>
);

export default MainLinks;
