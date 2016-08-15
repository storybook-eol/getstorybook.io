import React from 'react';
import styles from './styles';
import Container from '../Container';
import Addon from '../Addon';

const demo = require('../../../design/homepage/demo-sample-image.png');

const AddonList = () => (
  <Container>
    <div style={styles.container}>
      <img src={demo}/>
    </div>
  </Container>
);

export default AddonList;
