import React from 'react';
import Helmet from 'react-helmet';
import Header from '../Homepage/Header';
import DocsHeader from './DocsHeader';
import Navigation from './Navigation';
import Content from './Content';
import Container from './Container';
import { Flex, Box } from 'reflexbox';

class Docs extends React.Component {
  render() {
    const { sections, selectedItem, selectedItemId, selectedSectionId } = this.props;

    return (
      <div>
        <Helmet
          htmlAttributes={{"lang": "en", "amp": undefined}}
          title="Documentation | React Storybook"
        />
        <Header />
        <DocsHeader />
        <Container>
        <Flex>
          <Box col={3}>
            <Navigation
              sections={sections}
              selectedSection={selectedSectionId}
              selectedItem={selectedItemId}
            />
          </Box>
          <Box>
            <Content {...selectedItem}/>
          </Box>
        </Flex>
        </Container>
      </div>
    );
  }
}

export default Docs;
