import React, { Component, PropTypes } from 'react';
import radium, { StyleRoot } from 'radium';
import styles from './styles';
import { Flex, Box } from 'reflexbox';

class Addon extends Component {
  constructor() {
    super();

    this.state = {
      col: false,
    };
  }

  handleResize() {
    const width = window.innerWidth;
    const stateObj = {
      col: false,
    };

    if (width < 890) {
      stateObj.col = true;
    }

    this.setState(stateObj);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  componentWillUnmount() {
    this.setState({
      col: false,
    });
  }

  render() {
    const { name, image, description, link } = this.props;
    const { col } = this.state;

    let colCount = (col) ? 12 : 6;
    styles.content = {
      textAlign: (col) ? 'center' : 'left',
    };

    return(
      <Flex
        align="center"
        justify="center"
      >
        <StyleRoot>
          <div style={styles.container}>
            <Flex
              column={col}
            >
              <Box col={colCount}>
                <div style={styles.box}>
                  <div style={styles.heading}>{name}</div>
                  <img style={styles.image} src={image}/>
                </div>
              </Box>
              <Box col={colCount}>
                <div style={{...styles.content, ...styles.box}}>
                  <div
                    style={styles.description}
                    dangerouslySetInnerHTML={{ __html: description }}
                  />
                  <br/>
                  <a style={styles.link} href={link}>
                    USE THIS ADDON
                  </a>
                </div>
              </Box>
            </Flex>
          </div>
        </StyleRoot>
      </Flex>
    );
  }
}

Addon.propTypes = {
  name: React.PropTypes.string,
  image: React.PropTypes.string,
  description: React.PropTypes.string,
  link: React.PropTypes.string,
};

export default radium(Addon);
