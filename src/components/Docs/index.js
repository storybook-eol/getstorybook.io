import React from 'react';
import Helmet from 'react-helmet';
import Header from '../Homepage/Header';
import DocsHeader from './DocsHeader';
import Navigation from './Navigation';
import Content from './Content';
import Container from './Container';
import { Flex, Box } from 'reflexbox';
import radium, { StyleRoot } from 'radium';

const styles = {
  defaultNav: {
    display: 'block',
    '@media (max-width: 1000px)': {
      display: 'none', 
    },
  },

  dropdownNav: {
    display: 'none',
    '@media (max-width: 1000px)': {
      display: 'block', 
    },
  }
};

class Docs extends React.Component {
  render() {
    const { sections, selectedItem, selectedItemId, selectedSectionId } = this.props;

    return (
      <div>
        <StyleRoot>
          <Helmet
            htmlAttributes={{"lang": "en", "amp": undefined}}
            title="Documentation | React Storybook"
          />
          <Header currentSection="docs"/>
          <DocsHeader />
          <Container>
            <Flex>
              <Box>
                <div style={ styles.defaultNav }>
                  <Navigation
                    sections={sections}
                    selectedSection={selectedSectionId}
                    selectedItem={selectedItemId}
                  />
                </div>
              </Box>
              <Box>
                <div style={ styles.dropdownNav }>
                  <Navigation
                    sections={sections}
                    selectedSection={selectedSectionId}
                    selectedItem={selectedItemId}
                    dropdown
                  />
                </div>
                <Content {...selectedItem}/>
              </Box>
            </Flex>
          </Container>
        </StyleRoot>
      </div>
    );
  }
}

export default radium(Docs);
