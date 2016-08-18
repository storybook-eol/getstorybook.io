import React from 'react';
import styles from './styles';
import Container from '../Container';
import Addon from '../Addon';

class AddonList extends React.Component {
  constructor() {
    super();

    this.state = {
      conFontSize: 20,
      headingFontSize: 28,
    };
  }

  handleResize() {
    const width = window.innerWidth;
    const stateObj = {
      conFontSize: 20,
      headingFontSize: 28,
    };

    if (width < 775) {
      stateObj.conFontSize = 16;
      stateObj.headingFontSize = 24;
    }
    
    this.setState(stateObj);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  componentWillUnmount() {
    this.setState({
      conFontSize: 20,
      headingFontSize: 28,
    });
  }

  render() {
    const { conFontSize, headingFontSize } = this.state;
    const conStyles = {
      ...styles.container,
      fontSize: conFontSize,
    };
    const headingStyles = {
      ...styles.heading,
      fontSize: headingFontSize,
    };

    return(
      <Container>
        <div style={conStyles}>
          <div style={headingStyles}>ADDONS</div>
          <div>
            Addons introduce new features & functionalities to Storybook.
            <br/>
            (Here's a list of some example addons)
          </div>
          <div style={styles.addonList}>
            <Addon
              name="Action Logger"
              image={require('../../../design/homepage/addon-sample-image.png')}
              description={`
                Action Logger is something similar to the Chrome\'s dev console.
                <br/>
                With that, you can debug events in UI components and inspect their output.
              `}
              link="http://google.com"
            />
            <Addon
              name="Linker"
              image={require('../../../design/homepage/addon-sample-image.png')}
              description={`
                With Linker, you can link different stories together.
                <br/>
                Using that, you can build a demo of your app\'s different functionalities.
              `}
              link="http://google.com"
            />
            <Addon
              name="Specs"
              image={require('../../../design/homepage/addon-sample-image.png')}
              description={`
                Sometimes you may want to write tests for your components.
                <br/>
                With Specs, you can write test specs next to your stories and see the result as you code.
                <br/>
                (You can run these specs in a CI box too.)
              `}
              link="http://google.com"
            />
          </div>
          <div>
            This is just a few addons we've have.
          </div>
          <div style={styles.links}>
            <a href='/' style={styles.link}>Explore More</a>
            <a href='/' style={styles.link}>Write Your Own</a>
          </div>
        </div>
      </Container>    
    );
  }
}

export default AddonList;
