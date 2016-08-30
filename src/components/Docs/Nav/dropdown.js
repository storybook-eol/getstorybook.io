import React from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import './style.css';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    const { sections, selectedSection, selectedItem } = props;

    this.state = {
      selectedSectionId: selectedSection || sections[0].id,
      selectedItemId: selectedItem || sections[0].items[0].id,
    };
  }

  renderHeadingOpts(section) {
    return (<option value={section.id} key={section.id}>{section.heading}</option>);
  }

  renderNavOpts(nav) {
    return (<option value={nav.id} key={nav.id}>{nav.title}</option>);
  }

  changeRoute(selectedSectionId, selectedItemId) {
    const url = `/docs/${selectedSectionId}/${selectedItemId}`;
    browserHistory.push(url);
  }

  handleHeadingChange(evt) {
    this.setState({
      selectedSectionId: evt.target.value,
    });
    this.changeRoute(evt.target.value, "");
  }

  handleNavChange(evt) {
    const { selectedSectionId } = this.state;
    this.setState({
      selectedItemId: evt.target.value,
    });
    this.changeRoute(selectedSectionId, evt.target.value);
  }

  render() {
    const { sections, selectedSection } = this.props;
    const { selectedSectionId, selectedItemId } = this.state;

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
  sections: React.PropTypes.array,
  selectedSection: React.PropTypes.string,
  selectedItem: React.PropTypes.string,
  prefix: React.PropTypes.string,
};

export default Nav;
