import React from 'react';
import { Helmet } from 'react-helmet-async';
import AppDevComponent from '../Components/AppDevelopment.jsx';
import CapabilitiesApp from '../Components/CapabilitiesApp.jsx';
import WorkSlider from '../Components/WorkSlider.jsx';
import ClientTestimonial from '../Components/ClientTestimonial.jsx';
import ContactCTA from '../Components/ContactCTA.jsx';

const AppDevelopment = () => {
  return (
    <>
      <Helmet>
        <title>Mobile App Development Company  | Android & iOS Apps</title>
        <meta name="description" content="Top mobile app development company . We design and build custom iOS and Android applications." />
        <meta name="keywords" content="mobile app development company , app development services , global app developer " />
      </Helmet>
      <AppDevComponent />
      <CapabilitiesApp />
      <WorkSlider />
      <ClientTestimonial 
        quote={
          <>
            "We selected NEFTTO IT Solution for our <span className="text-primary font-bold">App Development</span> project 
            following a competitive tender, and have been delighted by the team’s dedication 
            and Agile approach, delivering a great mobile application in tight timelines and on budget."
          </>
        }
      />
      <ContactCTA />
    </>
  );
};

export default AppDevelopment;