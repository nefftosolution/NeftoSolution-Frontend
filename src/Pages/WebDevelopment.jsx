import React from 'react';
import { Helmet } from 'react-helmet-async';
import WebDevComponent from '../Components/WebDevelopment.jsx';
import Capabilities from '../Components/Capabilities.jsx';
import WorkSlider from '../Components/WorkSlider.jsx';
import ClientTestimonial from '../Components/ClientTestimonial.jsx';
import ContactCTA from '../Components/ContactCTA.jsx';

const WebDevelopmentPage = () => {
  return (
    <>
      <Helmet>
        <title>Web Development Company  | Custom Websites</title>
        <meta name="description" content="Looking for a web development company ? We build custom, responsive, and scalable websites for businesses worldwide." />
        <meta name="keywords" content="web development company , custom website design , global web developer " />
      </Helmet>
      <WebDevComponent />
      <Capabilities />
      <WorkSlider />
      <ClientTestimonial 
        quote={
          <>
            "We selected NEFTTO IT Solution following a competitive tender, 
            and have been delighted by the team’s dedication and Agile approach, 
            delivering a great product in tight timelines and on budget."
          </>
        }
      />
      <ContactCTA />
    </>
  );
};

export default WebDevelopmentPage;