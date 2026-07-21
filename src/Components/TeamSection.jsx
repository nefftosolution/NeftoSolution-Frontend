import React from "react";
import CEO from "../assets/images/CEO.png";
import CTO from "../assets/images/cto.png";
import CoFounder from "../assets/images/Ameerhamza.webp";

const TeamSection = () => {
  return (
    <section className="w-full bg-light-600 py-16 md:py-24 md:px-20 px-10 font-['Outfit'] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* --- Header Section --- */}
        <div className="grid grid-cols-1 gap-4 mb-10">
          <div className="w-full max-w-140 mr-auto">
            <span className="inline-flex items-center gap-2 text-primary-navy text-[12px] font-bold tracking-[0.2em] px-2 py-1 uppercase bg-opacity-50">
              <span>•</span> Who we are
            </span>
          </div>

          <div className="w-full max-w-140 mr-auto">
            <p className="text-primary-navy text-[24px] md:text-2xl leading-relaxed font-medium">
              We are explorers. We constantly seek ways to make an impact
              towards solving problems through creativity.
            </p>
          </div>
        </div>

        {/* --- Cards Section --- */}
        <div className="flex flex-wrap justify-between items-center gap-14">
          <TeamCard
            imageSrc={CEO}
            name="Abdul Ahad Dahir"
            title="Founder / CEO"
            imagePosition="center 10%"
          />

          <TeamCard
            imageSrc={CoFounder}
            name="Ameer Hamza"
            title="Co-Founder / CEO"
            imagePosition="center 10%"
          />

          <TeamCard
            imageSrc={CTO}
            name="Muhammad Hunzilah"
            title="CTO"
            imagePosition="center 0%"
          />
        </div>
      </div>
    </section>
  );
};

// --- Reusable Component for Team Card ---
const TeamCard = ({
  imageSrc,
  name,
  title,
  imagePosition = "center center",
}) => {
  return (
    <div className="bg-light-300 rounded-4xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 w-full max-w-140 mx-auto">
      <div className="group relative overflow-hidden h-95 md:h-125">
        <img loading="lazy"
          src={imageSrc}
          alt={name}
          style={{ objectPosition: imagePosition }}
          className="w-full h-full object-cover transition ease-in-out duration-700 scale-110 group-hover:scale-120"
        />

        {/* Rest of your code */}
      </div>

      <div className="flex justify-between items-center p-6">
        <h3 className="text-accent-medium text-[18px] md:text-xl font-bold">
          {name}
        </h3>
        <p className="text-gray-500 text-[14px] md:text-sm tracking-wide">
          {title}
        </p>
      </div>
    </div>
  );
};

export default TeamSection;
