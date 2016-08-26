import React from 'react';
import { Flex, Box } from 'reflexbox';
import { Link } from 'react-router';
import Container from '../Container';
import styles from './styles';

const sections = [
  { id: 'home', caption: 'Home', href: '/' },
  { id: 'docs', caption: 'Docs', href: '/docs' },
];

class Header extends React.Component {
  renderSections() {
    return sections.map((section) => {
      const { currentSection } = this.props;
      const style = currentSection === section.id ? styles.currentLink : styles.link;
      return (
        <Link
          style={style}
          key={section.href}
          to={section.href}
        >
          {section.caption}
        </Link>
      );
    });
  }

  render() {
    return (
      <Container>
        <Flex
          justify="flex-end"
        >
          <Box>
            <div style={styles.container}>
              {this.renderSections()}
              <a style={styles.link} target="_blank" href='https://storybooks.io'>Storybooks.io</a>
            </div>
          </Box>
        </Flex>
      </Container>
    );
  }
}

Header.propTypes = {
  currentSection: React.PropTypes.string,
};

export default Header;
