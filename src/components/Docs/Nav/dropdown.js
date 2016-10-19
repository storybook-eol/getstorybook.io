import React from 'react';
import { browserHistory } from 'react-router';
import './style.css';

class Nav extends React.Component {
  renderHeadingOpts(section) {
    return (<option value={section.id} key={section.id}>{section.heading}</option>);
  }

  renderNavOpts(nav) {
    return (<option value={nav.id} key={nav.id}>{nav.title}</option>);
  }

  changeRoute(selectedDocId, selectedSectionId, selectedItemId) {
    const url = `/docs/${selectedDocId}/${selectedSectionId}/${selectedItemId}`;
    browserHistory.push(url);
  }

  handleHeadingChange(evt) {
    const { selectedDocId } = this.props;
    this.changeRoute(selectedDocId, evt.target.value, "");
  }

  handleNavChange(evt) {
    const { selectedDocId, sections, selectedSection } = this.props;
    const selectedSectionId = selectedSection || sections[0].id;
    this.changeRoute(selectedDocId, selectedSectionId, evt.target.value);
  }

  render() {
    const { sections, selectedSection, selectedItem } = this.props;
    const selectedSectionId = selectedSection || sections[0].id;
    const selectedItemId = selectedItem || sections[0].items[0].id;

    const selectedSectionData = sections.find(section => {
      return section.id === selectedSectionId;
    });
    const navs = selectedSectionData.items;

    return (
      <div>
        <div>
          <select
            value={selectedSectionId}
            onChange={this.handleHeadingChange.bind(this)}
          >
            {sections.map(this.renderHeadingOpts.bind(this))}
          </select>
        </div>

        <div>
          <select
            value={selectedItemId}
            onChange={this.handleNavChange.bind(this)}
          >
            {navs.map(this.renderNavOpts.bind(this))}
          </select>
        </div>
      </div>
    );
  }
}

Nav.propTypes = {
  selectedDocId: React.PropTypes.string,
  sections: React.PropTypes.array,
  selectedSection: React.PropTypes.string,
  selectedItem: React.PropTypes.string,
};

export default Nav;
