import React from 'react';
import Helmet from 'react-helmet';
import Header from '../Homepage/Header';
import Container from './Container';
import Footer from '../Homepage/Footer';
import './style.css';

class Docs extends React.Component {
  render() {
    const { categories, selectedCatId, sections, selectedItem, selectedSectionId, selectedItemId } = this.props;
    const headTitle = `${selectedItem.title} - React Storybook Docs`;

    return (
      <div className="container">
        <Helmet
          title={headTitle}
        />
        <Header currentSection="docs"/>
        <Container
          categories={ categories }
          selectedCatId={ selectedCatId }
          sections={ sections }
          selectedItem={ selectedItem }
          selectedSectionId={ selectedSectionId }
          selectedItemId={ selectedItemId }
        />
        <Footer />
      </div>
    );
  }
}

Docs.propTypes = {
  categories: React.PropTypes.array,
  selectedCatId: React.PropTypes.string,
  sections: React.PropTypes.array,
  selectedItem: React.PropTypes.object,
  selectedSectionId: React.PropTypes.string,
  selectedItemId: React.PropTypes.string,
};

export default Docs;
