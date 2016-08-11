import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import WithDesign from './with_design';
import { WithNote } from '../../.storybook/notes_addon';

import Header from '../components/Header';
import Logo from '../components/Logo';
import UVP from '../components/UVP';
import VideoPlayer from '../components/VideoPlayer';
import Features from '../components/Features';
import GettingStarted from '../components/GettingStarted';
import MainLinks from '../components/MainLinks';
import Footer from '../components/Footer';

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
  <WithNote
    note={`
Use these links:

* Home - '/'
* Docs - https://docs.getstorybook.io
* Academy - Don't add this for now.
* Storybooks.io - https://storybooks.io
    `}>
    <WithDesign design={slices.header}>
      <Header />
    </WithDesign>
  </WithNote>
));

stories.add('Logo', () => (
  <WithNote
    note={`
For here, use 'monospace' font-face.
    `}
  >
    <WithDesign design={slices.logo}>
      <Logo />
    </WithDesign>
  </WithNote>
));

stories.add('UVP', () => (
  <WithNote
    note={`
Here both React and React Native are links. We need to give some hover action to it.
Add these links:

* React - https://github.com/kadirahq/react-storybook
* React Native - https://github.com/kadirahq/react-native-storybook
    `}
  >
    <WithDesign design={slices.uvp}>
      <UVP />
    </WithDesign>
  </WithNote>
));

stories.add('VideoPlayer', () => (
  <WithNote
    note={`
Here, we don't embed a video player by default.
Once the user click on the above image, we'll render a youtube video replacing the image.

The blue padding will be there even we replace the image with the video.
    `}
  >
    <WithDesign design={slices.videoPlayer}>
      <VideoPlayer />
    </WithDesign>
  </WithNote>
));

stories.add('Features', () => (
  <WithDesign design={slices.features}>
    <Features />
  </WithDesign>
));

stories.add('GettingStarted', () => (
  <WithDesign design={slices.gettingStarted}>
    <GettingStarted />
  </WithDesign>
));

stories.add('MainLinks', () => (
  <WithNote
    note={`
Here for the "Read Docs" and "Subscribe to NewsLetter" links, use some icons from glyphicons or something related.
And when hovered, reduce the opacity.

Add following links:

* Read Docs: https://docs.getstorybook.io
* Slack: https://slack.getstorybook.io
* NewsLetter: https://tinyletter.com/storybooks
    `}
  >
    <WithDesign design={slices.mainLinks}>
      <MainLinks />
    </WithDesign>
  </WithNote>
));

stories.add('Footer', () => (
  <WithNote
    note={`
Use these links:

* Twitter - https://twitter.com/kadirahq
* Medium - https://voice.kadira.io/
    `}
  >
    <WithDesign design={slices.footer}>
      <Footer />
    </WithDesign>
  </WithNote>
));
