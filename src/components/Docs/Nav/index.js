import React from 'react';
import { Link } from 'react-router';
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

  // renderHeading(caption) {
  //   return (<h3>{ caption }</h3>);
  // }

  // renderItem(section, item) {
  //   const { prefix = '', selectedSection, selectedItem } = this.props;
  //   const href = `${prefix}/docs/${section.id}/${item.id}`;

  //   return (
  //     <Link to={href}>
  //       {item.title}
  //     </Link>
  //   );
  // }

  renderHeadingOpts(section) {
    const { selectedSection } = this.props;

    return (
      <option
        key={section.id}
        value={section.id}
      >
        {section.heading}
      </option>
    );
  }

  handleHeadingChange(evt) {
    // this.setState({
    //   selectedSectionId: evt.target.value,
    // });
  }

  // renderNavOpts(nav) {
  //   return (<option key={nav.id}>{nav.title}</option>);
  // }

  renderNavItem(item) {
    const { selectedSectionId, selectedItemId } = this.state;
    const cssClass = (item.id === selectedItemId) ? "selected" : '';

    return (
      <li className={ cssClass } key={ item.id }>
        {item.title}
      </li>
    );
  }

  renderNavSections(section) {
    return (
      <div key={ section.id }>
        <h3>{ section.heading }</h3>
        <ul>
          { section.items.map(this.renderNavItem.bind(this)) }
        </ul>
      </div>
    );
  }

  render() {
    const { sections, selectedSection } = this.props;
    const { selectedSectionId } = this.state;

    const selectedSectionData = sections.find(section => {
      return section.id === selectedSectionId;
    });
    const navs = selectedSectionData.items;

    return (
      <div id="nav" className="row">
        <div className="col-xs-12">
          {sections.map(this.renderNavSections.bind(this))}
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
