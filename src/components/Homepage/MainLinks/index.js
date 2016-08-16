import React from 'react';
import styles from './styles';
import { Flex, Box } from 'reflexbox';
import Container from '../Container';

export const Link = ({ icon, caption, href }) => (
  <div style={styles.link}>
    <a style={styles.a} href={href}>
      <img style={styles.icon} src={icon} role="presentation"/>
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

const MainLinks = () => (
  <Container>
    <div style={styles.container}>
      <Flex>
        <Box>
          <Link
            icon={require('../../../design/homepage/slack-icon.png')}
            caption="Join Us on Slack"
            href="https://storybooks-slackin.herokuapp.com/"
          />
        </Box>
        <Box>
          <Link
            icon={require('../../../design/homepage/docs-icon.png')}
            caption="Read Docs"
            href="/docs"
          />
        </Box>
        <Box>
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

export default MainLinks;
