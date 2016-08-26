import React from 'react';
import styles from './styles';
import Container from '../Container';

const demo = require('../../../design/homepage/demo-sample-image.png');

const AddonList = () => (
  <Container>
    <div style={styles.container}>
      <img style={styles.img} alt="Storybook Demo" src={demo}/>
    </div>
  </Container>
);

export default AddonList;
