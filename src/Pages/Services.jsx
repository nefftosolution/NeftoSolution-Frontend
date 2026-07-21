import React from 'react';
import { Helmet } from 'react-helmet-async';
import Explore from '../Components/Explore';
import Core from '../Components/Core';
import Number from '../Components/Number';
import Solve from '../Components/Solve';
import Work from '../Components/Work';
import Testimonials from '../Components/Testimonials';
import Faqs from '../Components/Faqs';

const Services = () => {
  return (
    <>
      <Helmet>
        <title>SaaS Development Services in Bahawalpur | Scalable Products</title>
        <meta name="description" content="Offering SaaS development services and comprehensive IT solutions for local businesses in Bahawalpur." />
        <meta name="keywords" content="SaaS development services Bahawalpur, software services Bahawalpur, local software agency Bahawalpur" />
      </Helmet>
      <Explore />
      <Core />
      <Work />
      <Solve />
      <Number />
      <Testimonials />
      <Faqs />
    </>
  );
};

export default Services;