import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import WithDesign from './with_design';

const slices = {
  header: require('../design/header-slice.png'),
  logo: require('../design/logo-slice.png'),
  uvp: require('../design/uvp-slice.png'),
  videoPlayer: require('../design/video-player-slice.png'),
  features: require('../design/features-slice.png'),
  gettingStarted: require('../design/getting-started-slice.png'),
  mainLinks: require('../design/main-links-slice.png'),
  footer: require('../design/footer-slice.png'),
};
const complete = require('../design/homepage.png');

const stories = storiesOf('Components', module);

stories.add('Header', () => (
  <WithDesign design={slices.header}>

  </WithDesign>
));

stories.add('Logo', () => (
  <WithDesign design={slices.logo}>

  </WithDesign>
));

stories.add('UVP', () => (
  <WithDesign design={slices.uvp}>

  </WithDesign>
));

stories.add('VideoPlayer', () => (
  <WithDesign design={slices.videoPlayer}>

  </WithDesign>
));

stories.add('Features', () => (
  <WithDesign design={slices.features}>

  </WithDesign>
));

stories.add('GettingStarted', () => (
  <WithDesign design={slices.gettingStarted}>

  </WithDesign>
));

stories.add('MainLinks', () => (
  <WithDesign design={slices.mainLinks}>

  </WithDesign>
));

stories.add('Footer', () => (
  <WithDesign design={slices.footer}>

  </WithDesign>
));
