import React from 'react';
import './style.css';
import Header from './Header';
import Heading from './Heading';
import Demo from './Demo';
import Platforms from './Platforms';
import MainLinks from './MainLinks';
import Featured from './Featured';
import Footer from './Footer';

const featuredStorybooks = [
  {
    owner: "https://avatars0.githubusercontent.com/u/698437?v=3&s=200",
    storybook: {
      "name": "React Dates",
      "link": "http://airbnb.io/react-dates/",
    },
    source: "https://github.com/airbnb/react-dates",
  },

  {
    owner: "https://avatars3.githubusercontent.com/u/239676?v=3&s=460",
    storybook: {
      "name": "React Native Web",
      "link": "https://necolas.github.io/react-native-web/storybook",
    },
    source: "https://github.com/necolas/react-native-web",
  },

  {
    owner: "https://avatars1.githubusercontent.com/u/15616844?v=3&s=200",
      storybook: {
      "name": "React Button",
      "link": "http://kadira-samples.github.io/react-button/",
    },
    source: "https://github.com/kadira-samples/react-button",
  },
];

const Homepage = () => (
  <div className="container">
    <Header currentSection="home"/>
    <Heading />
    <Demo />
    <Platforms />
    <MainLinks />
    <Featured
      featuredStorybooks={featuredStorybooks}
    />
    <Footer />
  </div>
);

Homepage.propTypes = {
  featuredStorybooks: React.PropTypes.array,
};

export default Homepage;
