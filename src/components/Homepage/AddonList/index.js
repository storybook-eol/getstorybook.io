import React from 'react';
import radium, { StyleRoot } from 'radium';
import styles from './styles';
import Container from '../Container';
import Addon from '../Addon';

class AddonList extends React.Component {
  render() {
    return(
      <Container>
        <StyleRoot>
          <div style={styles.container}>
            <div style={styles.heading}>ADDONS</div>
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
              <ul style={styles.linkUl}>
                <li style={styles.linkLi}><a href='/' style={styles.link}>Explore More</a></li>
                <li style={styles.linkLi}><a href='/' style={styles.link}>Write Your Own</a></li>
              </ul>
            </div>
          </div>
        </StyleRoot>
      </Container>    
    );
  }
}

export default AddonList;
