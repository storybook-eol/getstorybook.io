import React from 'react';
import styles from './styles';
import Container from '../Container';

class Navigation extends React.Component {
  renderHeading(caption) {
    const { selectedSection } = this.props;
    const style = {
      ...styles.h3,
    };
    if (caption === selectedSection) {
      style.textDecoration = 'underline';
    }

    return (<h3 style={style}>{caption}</h3>);
  }

  renderItem(item) {
    const { selectedItem } = this.props;
    const style = {};
    if (item.caption === selectedItem) {
      style.fontWeight = 600;
    }

    return (
      <a style={style} href={item.link}>
        {item.caption}
      </a>
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
                  <li key={`${section.heading}:${item.caption}`}>
                    {this.renderItem(item)}
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
};

export default Navigation;
