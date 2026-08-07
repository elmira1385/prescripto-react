import React from "react";
import groupHero from "../../images/group-hero.png";
import hero from "../../images/hero.png";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row gap-8 justify-center items-center lg:px-20 xl:px-20 rounded-md p-4 pb-0 mt-4 bg-primary">
      <div className="flex flex-col  gap-6 justify-center items-center sm:items-center md:items-center lg:items-start xl:items-start">
        <p className="text-3xl pt-4 text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
          Book Appointment
          <br /> With Trusted Doctors
        </p>
        <img width={120} src={groupHero} alt="" />
        <p className="text-sm text-white">
          Simply browse through our extensive list of trusted doctors schedule
          your appointment hassle-free.
        </p>
        <button className="flex gap-1 justify-center items-center bg-white rounded-full py-2 px-4">
          <span>Book appointment </span>

          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div>
        <img  src={hero} alt="" />
      </div>
    </div>
  );
};

export default Hero;
