import React from 'react';
import { Flex, Box } from 'reflexbox';
import radium, { StyleRoot } from 'radium';
import styles from './styles';
import { Link } from 'react-router';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    const { sections, selectedSection } = props;

    this.state = {
      selectedSectionId: selectedSection || sections[0].id,
    };
  }

  renderHeading(caption) {
    const style = {
      ...styles.h3,
    };

    return (<h3 style={style}>{caption}</h3>);
  }

  renderItem(section, item) {
    const { prefix = '', selectedSection, selectedItem } = this.props;
    const href = `${prefix}/docs/${section.id}/${item.id}`;

    let style = styles.item;
    if (selectedSection === section.id && selectedItem === item.id) {
      style = styles.selectedItem;
    }

    return (
      <Link style={style} to={href}>
        {item.title}
      </Link>
    );
  }

  renderHeadingOpts(section) {
    const { selectedSection } = this.props;

    if (section.id === selectedSection) {
      return (
        <option
          value={section.id}
          selected key={section.id}
        >
          {section.heading}
        </option>
      );
    }

    return (
      <option
        value={section.id}
        key={section.id}
      >
        {section.heading}
      </option>
    );
  }

  handleHeadingChange(evt) {
    this.setState({
      selectedSectionId: evt.target.value,
    });
  }

  renderNavOpts(nav) {
    return (<option key={nav.id}>{nav.title}</option>);
  }

  render() {
    const { sections, selectedSection } = this.props;
    const { selectedSectionId } = this.state;

    const selectedSectionData = sections.find(section => {
      return section.id === selectedSectionId;
    });
    const navs = selectedSectionData.items;

    return (
      <Flex>
        <StyleRoot>
          <Box>
            <div style={ styles.container.dropdownNav }>
              <div>
                <select style={ styles.dropdown } onChange={this.handleHeadingChange.bind(this)}>
                  {sections.map(this.renderHeadingOpts.bind(this))}
                </select>
              </div>

              <div>
                <select style={ styles.dropdown }>
                  {navs.map(this.renderNavOpts)}
                </select>
              </div>
            </div>
          
            <div style={ styles.container.sidebarNav }>
              {sections.map((section) => (
                <div key={section.heading}>
                  {this.renderHeading(section.heading)}
                  <ul style={styles.ul}>
                    {section.items.map((item) => (
                      <li key={`${section.heading}:${item.title}`}>
                        {this.renderItem(section, item)}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Box>
        </StyleRoot>
      </Flex>
    );
  }
}

Navigation.propTypes = {
  sections: React.PropTypes.array,
  selectedSection: React.PropTypes.string,
  selectedItem: React.PropTypes.string,
  prefix: React.PropTypes.string,
};

export default Navigation;
