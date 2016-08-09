import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import WithDesign from './with_design';

const stories = storiesOf('Pages');
const homepageDesign = require('../design/homepage.png');

stories.add('homepage', () => (
  <WithDesign design={homepageDesign}>

  </WithDesign>
));
