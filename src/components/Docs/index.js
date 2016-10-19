import React from 'react';
import Helmet from 'react-helmet';
import Header from '../Homepage/Header';
import Container from './Container';
import Footer from '../Homepage/Footer';
import './style.css';

class Docs extends React.Component {
  render() {
    const { docs, selectedDocId, sections, selectedItem, selectedSectionId, selectedItemId } = this.props;
    const headTitle = `${selectedItem.title} - React Storybook Docs`;

    return (
      <div className="container">
        <Helmet
          title={headTitle}
        />
        <Header currentSection="docs"/>
        <Container
          docs={ docs }
          selectedDocId={ selectedDocId }
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
  docs: React.PropTypes.array,
  selectedDocId: React.PropTypes.string,
  sections: React.PropTypes.array,
  selectedItem: React.PropTypes.object,
  selectedSectionId: React.PropTypes.string,
  selectedItemId: React.PropTypes.string,
};

export default Docs;
