import React from 'react';
import { Helmet } from 'react-helmet-async';
import AIHero from '../Components/Artificial.jsx'; 
import CapabilitiesAi from '../Components/CapabilitiesAi.jsx';
import WorkSlider from '../Components/WorkSlider.jsx';
import ClientTestimonial from '../Components/ClientTestimonial.jsx';
import ContactCTA from '../Components/ContactCTA.jsx';

const Artificial = () => {
  return (
    <>
      <Helmet>
        <title>Python Machine Learning Services in Bahawalpur | AI Solutions</title>
        <meta name="description" content="Looking for Python Machine Learning services in Bahawalpur? We provide advanced AI solutions and data-driven models for local businesses." />
        <meta name="keywords" content="Python machine learning services Bahawalpur, AI solutions Bahawalpur, data science company Bahawalpur" />
      </Helmet>
      <AIHero />
      <CapabilitiesAi />
      <WorkSlider />
      <ClientTestimonial 
        quote={
          <>
            "We selected NEFTTO IT Solution for our <span className="text-primary font-bold">AI and Machine Learning</span> project 
            following a competitive tender, and have been delighted by the team’s dedication 
            and Agile approach, delivering <span className="text-primary font-bold">advanced intelligent solutions</span> in tight timelines and on budget."
          </>
        }
      />
      <ContactCTA />
    </>
  );
};

export default Artificial;