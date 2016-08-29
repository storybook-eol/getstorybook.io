import React from 'react';
import './style.css';
import Header from './Header';
import Heading from './Heading';
import Demo from './Demo';
import Platforms from './Platforms';
import MainLinks from './MainLinks';
import Featured from './Featured';
import Footer from './Footer';

const Homepage = () => (
  <div className="container">
    <Header />
    <Heading />
    <Demo />
    <Platforms />
    <MainLinks />
    <Featured />
    <Footer />
  </div>
);

export default Homepage;
