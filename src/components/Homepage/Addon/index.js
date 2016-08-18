import React, { Component, PropTypes } from 'react';
import styles from './styles';
import { Flex, Box } from 'reflexbox';

class Addon extends Component {
  constructor() {
    super();

    this.state = {
      col: false,
      headingFontSize: 20,
      textFontSize: 18,
    };
  }

  handleResize() {
    const width = window.innerWidth;
    const stateObj = {
      col: false,
      headingFontSize: 20,
      textFontSize: 18,
    };

    if (width < 775) {
      stateObj.col = true;
      stateObj.headingFontSize = 18;
      stateObj.textFontSize = 17;
    }

    this.setState(stateObj);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  componentWillUnmount() {
    this.setState({
      col: false,
      headingFontSize: 20,
      textFontSize: 18,
    });
  }

  render() {
    const { name, image, description, link } = this.props;
    const { col, headingFontSize, textFontSize } = this.state;

    let colCount = (col) ? 12 : 6;
    styles.content = {
      textAlign: (col) ? 'center' : 'left',
    };

    const headingStyles = {
      ...styles.heading,
      fontSize: headingFontSize,
    };
    const descStyles = {
      ...styles.description,
      fontSize: textFontSize,
    };
    const linkStyles = {
      ...styles.link,
      fontSize: textFontSize,
    };

    return(
      <Flex>
        <div style={styles.container}>
          <Flex
            align="center"
            justify="center"
            column={col}
          >
            <Box col={colCount}>
              <div style={styles.box}>
                <div style={headingStyles}>{name}</div>
                <img style={styles.image} src={image}/>
              </div>
            </Box>
            <Box col={colCount}>
              <div style={{...styles.content, ...styles.box}}>
                <div
                  style={descStyles}
                  dangerouslySetInnerHTML={{ __html: description }}
                />
                <br/>
                <a style={linkStyles} href={link}>
                  USE THIS ADDON
                </a>
              </div>
            </Box>
          </Flex>
        </div>
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

export default Addon;
