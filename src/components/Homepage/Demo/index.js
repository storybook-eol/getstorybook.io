import React from 'react';
import styles from './styles';
import Container from '../Container';

const demo = require('../../../design/homepage/demo-sample-image.png');

const AddonList = () => (
  <Container>
    <div style={styles.container}>
      <img src={demo} alt="Storybook Demo"/>
    </div>
  </Container>
);

export default AddonList;
