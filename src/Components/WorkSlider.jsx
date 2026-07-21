import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import webImg from "../assets/images/web.avif";
import appImg from "../assets/images/app.webp";
import aiImg from "../assets/images/AI.webp";
import graphicImg from "../assets/images/graphic.jpg";
import marketingImg from "../assets/images/DigitalMarketing.jpg";
import seoImg from "../assets/images/seo.jpg";

// Link ko motion-friendly banane ke liye
const MotionLink = motion(Link);

const allProjects = {
  web: [
    {
      id: 1,
      logoText: "Custom Web Solutions",
      title:
        "Creating Fast, Responsive, and Scalable Websites for Modern Businesses",
      stats: [
        { value: "5+", label: "websites launched" },
        { value: "10+", label: "clients served" },
        { value: "24/7", label: "support available" },
      ],
      image: webImg,
      link: "/services/web-development",
    },
    {
      id: 2,
      logoText: "Business Websites",
      title:
        "Developing Professional Web Experiences That Convert Visitors into Customers",
      stats: [
        { value: "Custom", label: "web solutions" },
        { value: "SEO", label: "friendly websites" },
        { value: "Fast", label: "performance" },
      ],
      image: webImg,
      link: "/services/web-development",
    },
  ],

  app: [
    {
      id: 1,
      logoText: "Mobile App Solutions",
      title:
        "Building High-Performance Android and iOS Applications with Seamless UX",
      stats: [
        { value: "3+", label: "apps developed" },
        { value: "Android", label: "app support" },
        { value: "iOS", label: "compatibility" },
      ],
      image: appImg,
      link: "/services/app-development",
    },
    {
      id: 2,
      logoText: "Cross-Platform Apps",
      title:
        "Delivering Scalable Mobile Applications with Real-Time Functionality",
      stats: [
        { value: "Cross", label: "platform apps" },
        { value: "Secure", label: "architecture" },
        { value: "24/7", label: "maintenance" },
      ],
      image: appImg,
      link: "/services/app-development",
    },
  ],

  ai: [
    {
      id: 1,
      logoText: "AI Automation",
      title:
        "Implementing Intelligent AI Solutions to Streamline Business Operations",
      stats: [
        { value: "AI", label: "powered solutions" },
        { value: "Smart", label: "automation" },
        { value: "24/7", label: "availability" },
      ],
      image: aiImg,
      link: "/services/ai-solutions",
    },
    {
      id: 2,
      logoText: "Predictive Analytics",
      title: "Leveraging Machine Learning for Data-Driven Decision Making",
      stats: [
        { value: "ML", label: "technology" },
        { value: "Data", label: "driven insights" },
        { value: "Smart", label: "decisions" },
      ],
      image: aiImg,
      link: "/services/ai-solutions",
    },
  ],

  graphic: [
    {
      id: 1,
      logoText: "Brand Identity Design",
      title:
        "Crafting Memorable Visual Identities That Strengthen Brand Recognition",
      stats: [
        { value: "20+", label: "design assets" },
        { value: "5+", label: "brands served" },
        { value: "100%", label: "custom designs" },
      ],
      image: graphicImg,
      link: "/services/graphic-design",
    },
    {
      id: 2,
      logoText: "Creative Design Studio",
      title:
        "Designing Marketing Materials That Capture Attention and Drive Engagement",
      stats: [
        { value: "Logo", label: "design services" },
        { value: "Social", label: "media creatives" },
        { value: "Modern", label: "visual identity" },
      ],
      image: graphicImg,
      link: "/services/graphic-design",
    },
  ],

  marketing: [
    {
      id: 1,
      logoText: "Digital Growth",
      title:
        "Driving Business Success Through Strategic Digital Marketing Campaigns",
      stats: [
        { value: "5+", label: "campaigns managed" },
        { value: "10+", label: "business leads" },
        { value: "24/7", label: "campaign support" },
      ],
      image: marketingImg,
      link: "/services/digital-marketing",
    },
    {
      id: 2,
      logoText: "Performance Marketing",
      title:
        "Maximizing Brand Reach with Social Media and Email Marketing Strategies",
      stats: [
        { value: "Social", label: "media marketing" },
        { value: "Email", label: "campaigns" },
        { value: "Targeted", label: "audiences" },
      ],
      image: marketingImg,
      link: "/services/digital-marketing",
    },
  ],

  seo: [
    {
      id: 1,
      logoText: "Search Growth",
      title:
        "Improving Search Visibility and Ranking for Long-Term Organic Success",
      stats: [
        { value: "5+", label: "sites optimized" },
        { value: "Local", label: "SEO expertise" },
        { value: "Organic", label: "growth" },
      ],
      image: seoImg,
      link: "/services/seo",
    },
    {
      id: 2,
      logoText: "Local SEO",
      title:
        "Optimizing Local Search Presence to Attract Nearby Customers and Leads",
      stats: [
        { value: "Google", label: "business profile" },
        { value: "Maps", label: "optimization" },
        { value: "Local", label: "visibility" },
      ],
      image: seoImg,
      link: "/services/seo",
    },
  ],
};

const homeProjects = [
  allProjects.web[1],
  allProjects.app[0],
  allProjects.ai[0],
  allProjects.graphic[0],
  allProjects.marketing[0],
  allProjects.seo[0],
];

const WorkSlider = () => {
  const [current, setCurrent] = useState(0);
  const location = useLocation();
  const path = location.pathname;

  // Route path ke according projects dynamically load karein
  let projects = homeProjects;
  if (path === "/services/web-development") {
    projects = allProjects.web;
  } else if (path === "/services/app-development") {
    projects = allProjects.app;
  } else if (path === "/services/ai-solutions") {
    projects = allProjects.ai;
  } else if (path === "/services/graphic-design") {
    projects = allProjects.graphic;
  } else if (path === "/services/digital-marketing") {
    projects = allProjects.marketing;
  } else if (path === "/services/seo") {
    projects = allProjects.seo;
  }

  // Path change hone par index state ko reset karein
  useEffect(() => {
    setCurrent(0);
  }, [path]);

  // Modulo calculation mapping runtime errors avoid karne ke liye
  const activeIndex = current % projects.length;
  const project = projects[activeIndex] || projects[0];

  const next = () => setCurrent((prev) => (prev + 1) % projects.length);
  const prev = () =>
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));

  const slideVariants = {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 },
  };

  return (
    <section className="pt-4 pb-12 md:pt-6 md:pb-24 bg-gray-50 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        {/* Heading Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12 gap-6">
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary">
            Discover our work
          </h2>

          {/* UPDATED BUTTON: View all client stories */}
          <MotionLink
            to="/services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative border-2 border-primary text-primary px-6 md:px-8 py-2.5 md:py-3 rounded-full font-bold transition-all text-sm md:text-base overflow-hidden hover:text-white cursor-pointer"
          >
            {/* Sliding Background */}
            <span className="absolute inset-0 w-0 bg-primary transition-all duration-300 group-hover:w-full -z-10"></span>

            {/* Text */}
            <span className="relative z-10">View all services</span>
          </MotionLink>
        </div>

        <div className="relative group">
          <div className="relative bg-white shadow-2xl rounded-4xl md:rounded-[3rem] h-170 md:h-150 flex items-stretch overflow-hidden border border-gray-100">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${path}-${activeIndex}`}
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.4 }}
                className="flex flex-col md:flex-row w-full h-full"
              >
                {/* Content Side */}
                <div className="w-full md:w-1/2 p-6 md:p-16 flex flex-col justify-between bg-white relative z-10">
                  <div className="grow">
                    {/* Brand Gradient Logo Badge */}
                    <div className="flex items-center gap-3 mb-8 md:mb-10">
                      <span className="font-bold text-primary text-2xl tracking-wider uppercase font-sans">
                        {project.logoText}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-3xl font-medium text-gray-800 leading-tight mb-8 md:mb-12">
                      {project.title}
                    </h3>

                    <div className="grid grid-cols-3 gap-4 md:gap-6 mb-8">
                      {project.stats.map((stat, idx) => (
                        <div
                          key={idx}
                          className="relative pt-4 border-t-2 border-accent"
                        >
                          <div className="text-xl md:text-3xl font-bold text-gray-900 mb-1">
                            {stat.value}
                          </div>
                          <div className="text-[9px] md:text-xs text-gray-500 uppercase font-semibold leading-tight">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-between items-center gap-4 mt-auto mb-24 md:mb-0">
                    <Link
                      to={project.link}
                      className="flex items-center gap-2 border-b-2 border-black hover:text-accent transition-all pb-1"
                    >
                      <span className="text-sm md:text-lg font-bold">
                        Explore Service
                      </span>
                      <span className="text-accent text-xl">→</span>
                    </Link>

                    <div className="flex gap-1.5">
                      {projects.map((_, i) => (
                        <div
                          key={i}
                          className={`h-1.5 md:h-2 rounded-full transition-all duration-500 ${i === activeIndex ? "bg-primary w-6" : "bg-gray-200 w-1.5"}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image Side */}
                <div className="w-full md:w-1/2 h-62.5 md:h-auto overflow-hidden order-first md:order-0">
                  <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    src={project.image}
                    className="h-full w-full object-cover"
                    alt="Project"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-auto flex justify-center gap-6 md:top-1/2 md:-translate-y-1/2 md:bottom-auto md:left-0 md:translate-x-0 md:w-full md:justify-between md:px-0 pointer-events-none z-50">
            <button
              onClick={prev}
              className="pointer-events-auto w-14 h-14 lg:w-16 lg:h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-accent hover:scale-110 transition-all md:-translate-x-1/8 active:scale-90 cursor-pointer"
            >
              <svg
                className="w-6 h-6 md:w-6 md:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={next}
              className="pointer-events-auto w-14 h-14 lg:w-16 lg:h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-accent hover:scale-110 transition-all md:translate-x-1/8 active:scale-90 cursor-pointer"
            >
              <svg
                className="w-6 h-6 md:w-6 md:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSlider;
