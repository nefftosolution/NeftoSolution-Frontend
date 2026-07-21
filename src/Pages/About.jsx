import React from "react";
import { Helmet } from "react-helmet-async";
import AboutHero from "../Components/AboutHero";
import TeamSection from "../Components/TeamSection";
import DesignIntro from "../Components/DesignIntro";
import TeamGrid from "../Components/TeamGrid";
import CareersScrollSection from "../Components/CareersScrollSection";
import StorySection from "../Components/StorySection";
import StatsSection from "../Components/StatsSection";
import JoinOurTeam from "../Components/JoinOurTeam";
import ReadyCTA from "../Components/ReadyCTA";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About NEFFTO | Global Software & IT Solutions</title>
        <meta
          name="description"
          content="Learn more about NEFFTO, a premier global software agency delivering state-of-the-art web, mobile, and SaaS applications worldwide."
        />
        <meta
          name="keywords"
          content="about NEFFTO, global software agency, IT solutions company, top development agency"
        />
      </Helmet>
      <AboutHero />
      <TeamSection />
      <DesignIntro />
      <TeamGrid />
      <CareersScrollSection />
      <StorySection />
      <StatsSection />
      <JoinOurTeam />
    </>
  );
};

export default About;
