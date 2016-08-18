import React, { Component, PropTypes } from 'react';
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

    if (width < 775) {
      this.setState({
        col: true,
      });
    }
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

    styles.content = {
      textAlign: (col) ? 'center' : 'left',
    };

    return(
      <Flex>
        <div style={styles.container}>
          <Flex
            align="center"
            justify="center"
            column={col}
          >
            <Box col={6}>
              <div style={styles.box}>
                <div style={styles.heading}>{name}</div>
                <img style={styles.image} src={image}/>
              </div>
            </Box>
            <Box col={6}>
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
