import React from 'react';
import Helmet from 'react-helmet';
import Header from '../Homepage/Header';
import DocsHeader from './DocsHeader';
import Navigation from './Navigation';
import Content from './Content';
import Container from './Container';
import { Flex, Box } from 'reflexbox';
import { getNavigationData, getItem, getFirstItem } from '../../docs'

class Homepage extends React.Component {
  render() {
    const { sectionId, itemId } = this.props.params;
    const selectedItem = !sectionId? getFirstItem() : getItem(sectionId, itemId);

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
              sections={getNavigationData()}
              selectedSection="basics"
              selectedItem="getting-started"
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

export default Homepage;
