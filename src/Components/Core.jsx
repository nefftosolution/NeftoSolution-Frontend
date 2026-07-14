import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
// images
import WebDev from "../assets/images/project-1.png";
import AppDev from "../assets/images/project-2.png";
import AI from "../assets/images/project-3.png";
import GraphicDesign from "../assets/images/project-4.png";
import DigitalMarketing from "../assets/images/DigitalMarketing.jpg";
import SEO from "../assets/images/seo.jpg";
// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const cardData = [
  {
    id: 1,
    title: "Mubarak Khanam School Website",
    desc: "A complete school management platform featuring student admissions, class management, attendance tracking, announcements, and an admin dashboard. Built with a modern, responsive design to provide a seamless experience for students, parents, teachers, and administrators.",
    image: WebDev,
    to: "https://admin.mubarakkhanamschool.com/",
  },
  {
    id: 2,
    title: "Buraq Dispatch LLC Website",
    desc: "A professional truck dispatching company website designed to generate leads and showcase dispatch services. Features modern UI, service pages, responsive layouts, contact forms, SEO optimization, and strong call-to-action sections for carrier onboarding.",
    image: AppDev,
    to: "https://buraqdispatchllc.com/",
  },
  {
    id: 3,
    title: "Shop Management System Dashboard",
    desc: "A powerful business management dashboard that enables administrators to manage products, inventory, sales, purchases, customers, and analytics in one place. Includes secure authentication, real-time reporting, and an intuitive user interface.",
    image: AI,
    to: "https://shop-management-system-bu5i.vercel.app/",
  },
  {
    id: 4,
    title: "WBN IT Agency Website",
    desc: "A modern IT agency website built to showcase digital services, company expertise, and portfolio projects. Includes engaging animations, responsive layouts, service highlights, contact sections, and a professional brand-focused design.",
    image: GraphicDesign,
    to: "https://wbn-agency.vercel.app/",
  },
];

const FeatureCard = ({ card }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative h-120 w-full rounded-[2.5rem] overflow-hidden cursor-pointer border border-gray-100"
    >
      <motion.img
        animate={{ scale: isHovered ? 1.15 : 1 }}
        transition={{ duration: 0.8 }}
        src={card.image}
        alt={card.title}
        className="absolute inset-0 w-full h-full object-cover object-left"
      />
      <div
        className={`absolute inset-0 transition-all duration-500 bg-linear-to-t from-[#00419B]/95 via-[#00419B]/30 to-transparent ${isHovered ? "backdrop-blur-xs" : "backdrop-blur-0"}`}
      />

      <div className="absolute inset-0 p-8 flex flex-col justify-end z-10 text-left">
        <motion.h3
          className={`font-bold leading-tight transition-colors duration-300 text-white text-2xl mb-2`}
        >
          {card.title}
        </motion.h3>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ height: 0, opacity: 0, y: 20 }}
              animate={{ height: "auto", opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <p className="text-gray-100 text-base mb-2 leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        <Link
          to={card.to}
          target="_blank"
          className="flex items-center gap-2 mt-4 text-[#CB8104] font-bold"
        >
          <span>Learn More</span>
          <span className="text-xl">→</span>
        </Link>
      </div>
    </motion.div>
  );
};

const Core = () => {
  return (
    // Update 1: Added 'min-h-screen' and 'flex-col justify-center' to ensure the section fills the viewport
    // This forces the mouse to be inside the section when scrolling, activating the Swiper effect immediately.
    <section className="min-h-screen py-24 bg-white px-4 sm:px-6 lg:px-8 overflow-hidden flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#00419B] inline-block relative">
            Core Capabilities
            <svg
              className="absolute -bottom-3 left-0 w-full h-3 text-[#CB8104]"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                d="M0 5 Q 25 0, 50 5 T 100 5"
                stroke="currentColor"
                strokeWidth="4"
                fill="transparent"
              />
            </svg>
          </h2>
        </div>

        {/* SWIPER CONFIGURATION UPDATE */}
        <Swiper
          modules={[Pagination, Mousewheel]}
          spaceBetween={30}
          slidesPerView={1}
          grabCursor={true}
          speed={1000} // Slower speed for smoother scroll-like feel
          mousewheel={{
            forceToAxis: false, // Allows vertical mouse scroll to trigger horizontal slide
            sensitivity: 1.5, // Thoda sensitive kiya taaki easily catch ho
            releaseOnEdges: true, // Jab last slide aaye to page neeche scroll ho
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12 feature-swiper" // Increased bottom padding for pagination
        >
          {cardData.map((card) => (
            <SwiperSlide key={card.id}>
              <FeatureCard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Core;
