import React from 'react';
import styles from './styles';
import Container from '../Container';
import { Link } from 'react-router';

class Navigation extends React.Component {
  renderHeading(caption) {
    const style = {
      ...styles.h3,
    };

    return (<h3 style={style}>{caption}</h3>);
  }

  renderItem(section, item) {
    const { prefix = '' } = this.props;
    const href = `${prefix}/docs/${section.id}/${item.id}`;

    return (
      <Link style={styles.item} activeStyle={styles.selectedItem} to={href}>
        {item.title}
      </Link>
    );
  }

  render() {
    const { sections } = this.props;
    return (
      <Container>
        <div style={ styles.container }>
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
      </Container>
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
