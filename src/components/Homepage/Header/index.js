import React from 'react';
import './style.css';

const sections = [
  { id: 'home', caption: 'Home', href: '/' },
  { id: 'docs', caption: 'Docs', href: '/docs' },
];

class Header extends React.Component {
  renderSections() {
    return sections.map((section) => {
      const { currentSection } = this.props;
      const className = currentSection === section.id ? 'selected' : '';

      return (
        <a
          className={className}
          key={section.href}
          href={section.href}
        >
          {section.caption}
        </a>
      );
    });
  }

  render() {
    return (
      <div id="header" className="row">
        <div className="col-xs-12">
          <div id="header-title" className="pull-left">
            <a href="/">STORYBOOK</a>
          </div>
          <div id="header-links" className="pull-right">
            { this.renderSections() }
            <a href="https://storybooks.io">Storybooks.io</a>
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  currentSection: React.PropTypes.string,
};

export default Header;
