import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../Components/Hero';
import Services from '../Components/Services';
import WorkSlider from '../Components/WorkSlider';
import Testimonials from '../Components/Testimonials';
import AboutSections from '../Components/AboutSections';
import ContactCTA from '../Components/ContactCTA';
import TeamGrid from '../Components/TeamGrid';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>NEFFTO IT Solution | Web, App, SaaS Development, Python ML & Digital Marketing</title>
        <meta name="description" content="Leading software house offering web development, app development, SaaS, digital marketing, and Python ML services." />
        <meta name="keywords" content="software house , web development company , app development , SaaS development , digital marketing " />
      </Helmet>
      <Hero />
      <Services />
      <WorkSlider />
      <Testimonials />
      <AboutSections />
      <TeamGrid />
      <ContactCTA />
    </>
  );
};

export default Home;