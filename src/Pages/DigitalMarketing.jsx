import React from 'react';
import { Helmet } from 'react-helmet-async';
import MarketingHero from '../Components/DigitalMarketing.jsx'; 
import CapabilitiesMarketing from '../Components/CapabilitiesMarketing.jsx';
import WorkSlider from '../Components/WorkSlider.jsx';
import ClientTestimonial from '../Components/ClientTestimonial.jsx';
import ContactCTA from '../Components/ContactCTA.jsx';

const DigitalMarketing = () => {
  return (
    <>
      <Helmet>
        <title>Digital Marketing Agency  | SEO, Ads & Social Media</title>
        <meta name="description" content="Top digital marketing agency  helping businesses worldwide grow through SEO, Google Ads, and social media marketing." />
        <meta name="keywords" content="digital marketing agency , SEO services , social media marketing " />
      </Helmet>
      <MarketingHero />
      <CapabilitiesMarketing />
      <WorkSlider />
      <ClientTestimonial 
        quote={
          <>
            "We selected NEFTTO IT Solution for our <span className="text-primary font-bold">Digital Marketing and SEO</span> project 
            following a competitive tender, and have been delighted by the team’s strategic 
            insights, delivering <span className="text-primary font-bold">exceptional growth results</span> in tight timelines and on budget."
          </>
        }
      />
      <ContactCTA />
    </>
  );
};

export default DigitalMarketing;