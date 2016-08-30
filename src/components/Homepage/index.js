import React from 'react';
import './style.css';
import Header from './Header';
import Heading from './Heading';
import Demo from './Demo';
import Platforms from './Platforms';
import MainLinks from './MainLinks';
import Featured from './Featured';
import Footer from './Footer';

const Homepage = ({ featuredStorybooks }) => (
  <div className="container">
    <Header />
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
