import React from 'react';
import { Helmet } from 'react-helmet-async';
import GraphicHero from '../Components/GraphicDesign.jsx'; 
import CapabilitiesGraphic from '../Components/CapabilitiesGraphic.jsx';
import WorkSlider from '../Components/WorkSlider.jsx';
import ClientTestimonial from '../Components/ClientTestimonial.jsx';
import ContactCTA from '../Components/ContactCTA.jsx';

const GraphicDesign = () => {
  return (
    <>
      <Helmet>
        <title>Graphic Design & Branding | Creative Global Solutions</title>
        <meta
          name="description"
          content="Transform your brand with NEFFTO's professional graphic design and branding services. We craft stunning visual identities for businesses worldwide."
        />
        <meta
          name="keywords"
          content="graphic design agency, branding services, logo design, visual identity, global creative agency"
        />
      </Helmet>
      <GraphicHero />
      <CapabilitiesGraphic />
      <WorkSlider />
      <ClientTestimonial 
        quote={
          <>
            "We selected NEFTTO IT Solution for our <span className="text-primary font-bold">Graphic Design and Branding</span> project 
            following a competitive tender, and have been delighted by the team’s creativity 
            and strategic approach, delivering <span className="text-primary font-bold">stunning visual identities</span> in tight timelines and on budget."
          </>
        }
      />
      <ContactCTA />
    </>
  );
};

export default GraphicDesign;