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
        <title>Software House in Bahawalpur | Web, App & SaaS Development</title>
        <meta name="description" content="Leading software house in Bahawalpur offering web development, app development, SaaS, digital marketing, and Python ML services." />
        <meta name="keywords" content="software house Bahawalpur, web development company Bahawalpur, app development Bahawalpur, SaaS development Bahawalpur, digital marketing Bahawalpur" />
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