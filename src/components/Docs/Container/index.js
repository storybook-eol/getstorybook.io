import React from 'react';
import Nav from '../Nav';
import NavDropdown from '../Nav/dropdown';
import Content from '../Content';
import './style.css';

class Container extends React.Component {
  render() {
    const { sections, selectedItem } = this.props;

    return (
      <div id="docs-container" className="col-xs-12">
        <div className="nav col-xs-6 col-md-2">
          <Nav
            sections={ sections }
            selectedSection={ selectedItem.section }
            selectedItem={ selectedItem.id }      
          />
        </div>
        <div className="content col-xs-12 col-md-10">
          <div className="nav-dropdown">
            <NavDropdown
              sections={ sections }
              selectedSection={ selectedItem.section }
              selectedItem={ selectedItem.id }      
            />
          </div>

          <Content
            title={selectedItem.title}
            content={selectedItem.content}
          />
        </div>
      </div>
    );
  }
}

Container.propTypes = {
  sections: React.PropTypes.array,
  selectedItem: React.PropTypes.object,
};

export default Container;
