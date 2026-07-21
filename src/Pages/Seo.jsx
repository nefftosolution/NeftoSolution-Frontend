import React from 'react';
import { Helmet } from 'react-helmet-async';
import SEOHero from '../Components/SEO.jsx'; 
import CapabilitiesSEO from '../Components/CapabilitiesSEO.jsx';
import WorkSlider from '../Components/WorkSlider.jsx';
import ClientTestimonial from '../Components/ClientTestimonial.jsx';
import ContactCTA from '../Components/ContactCTA.jsx';

const SEO = () => {
  return (
    <>
      <Helmet>
        <title>Search Engine Optimization | Global SEO Experts</title>
        <meta
          name="description"
          content="Boost your organic visibility worldwide with NEFFTO's expert SEO services. We help businesses rank higher and drive quality traffic globally."
        />
        <meta
          name="keywords"
          content="SEO agency, search engine optimization, global SEO services, organic growth, rank higher"
        />
      </Helmet>
      <SEOHero />
      <CapabilitiesSEO />
      <WorkSlider />
      <ClientTestimonial 
        quote={
          <>
            "We selected NEFTTO IT Solution for our <span className="text-primary font-bold">Search Engine Optimization (SEO)</span> project 
            following a competitive tender, and have been delighted by the team’s technical 
            expertise, delivering <span className="text-primary font-bold">unmatched organic visibility</span> in tight timelines and on budget."
          </>
        }
      />
      <ContactCTA />
    </>
  );
};

export default SEO;