import React, { Component, PropTypes } from 'react';
import styles from './styles';
import { Flex, Box } from 'reflexbox';

const Addon = ({ name, image, description, link }) => (
  <div style={styles.container}>
    <Flex>
      <Box col={6} p={2}>
        <div>
          <div style={styles.heading}>{name}</div>
          <img style={styles.image} src={image}/>
        </div>
      </Box>
      <Box col={6} p={2}>
        <div
          style={styles.description}
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <br/>
        <a style={styles.link} href={link}>
          USE THIS ADDON
        </a>
      </Box>
    </Flex>
  </div>
);

Addon.propTypes = {
  name: React.PropTypes.string,
  image: React.PropTypes.string,
  description: React.PropTypes.string,
  link: React.PropTypes.string,
};

export default Addon;
