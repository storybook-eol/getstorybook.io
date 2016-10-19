import React from 'react';
import Nav from '../Nav';
import NavDropdown from '../Nav/dropdown';
import Content from '../Content';
import './style.css';

class Container extends React.Component {
  renderTopNav(doc) {
    const { selectedDocId } = this.props;
    const path = `/docs/${doc.id}`;

    if (selectedDocId === doc.id) {
      return (<li className="selected" key={ doc.id }>{ doc.title }</li>);
    }

    return (<li key={ doc.id }><a href={ path }>{ doc.title }</a></li>);
  }

  render() {
    const {
      docs,
      selectedDocId,
      sections,
      selectedItem,
      selectedSectionId,
      selectedItemId
    } = this.props;

    return (
      <div id="docs-container" className="row">
        <div className="row">
          <div className="col-xs-12">
            <ul className="top-nav">
              { docs.map(this.renderTopNav.bind(this)) }
            </ul>
          </div>
        </div>

        <div className="nav col-sm-3 col-md-3 hidden-xs">
          <Nav
            selectedDocId={ selectedDocId }
            sections={ sections }
            selectedSection={ selectedItem.section }
            selectedItem={ selectedItem.id }
            selectedSectionId={ selectedSectionId }
            selectedItemId={ selectedItemId }
          />
        </div>
        <div className="content col-xs-12 col-sm-9 col-md-9 col-lg-9">
          <div className="nav-dropdown">
            <NavDropdown
              selectedDocId={ selectedDocId }
              sections={ sections }
              selectedSection={ selectedItem.section }
              selectedItem={ selectedItem.id }
            />
          </div>

          <Content
            title={selectedItem.title}
            content={selectedItem.content}
          />

          <div className="nav-dropdown">
            <NavDropdown
              selectedDocId={ selectedDocId }
              sections={ sections }
              selectedSection={ selectedItem.section }
              selectedItem={ selectedItem.id }
            />
          </div>
        </div>
      </div>
    );
  }
}

Container.propTypes = {
  docs: React.PropTypes.array,
  sections: React.PropTypes.array,
  selectedItem: React.PropTypes.object,
  selectedSectionId: React.PropTypes.string,
  selectedItemId: React.PropTypes.string,
};

export default Container;
