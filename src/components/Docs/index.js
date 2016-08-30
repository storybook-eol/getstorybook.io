import React from 'react';
import Header from '../Homepage/Header';
import Container from './Container';
import Footer from '../Homepage/Footer';
import './style.css';

class Docs extends React.Component {
  render() {
    const { sections, selectedItem } = this.props;
    return (
      <div className="container">
        <Header />
        <Container
          sections={ sections }
          selectedItem={ selectedItem }
        />
        <Footer />
      </div>
    );
  }
}

Docs.propTypes = {
  sections: React.PropTypes.array,
  selectedItem: React.PropTypes.object,
};

export default Docs;
