import React from 'react';
import { Flex, Box } from 'reflexbox';
import { Link } from 'react-router';
import Container from '../Container';
import Logo from '../Logo';
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
    const { currentSection } = this.props;

    return (
      <Container>
        <Flex
          align="center"
          justify="space-between"
        >
          <Box style={ styles.box } p={3}>
            <div style={styles.container}>
              {
                (currentSection === 'docs') ?
                <Logo small /> :
                ''
              }
            </div>
          </Box>
          <Box p={3}>
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
