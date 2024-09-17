import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  const scrollToAnalytics = () => {
    const analyticsSection = document.getElementById("analytics");
    if (analyticsSection) {
      analyticsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2 text-lg md:text-xl">
          EXPERT MARKETING & CONSULTANCY SOLUTIONS
        </p>
        <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold md:py-4 py-2">
          Elevate your Business with Data-Driven Strategies.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-4xl sm:text-3xl text-xl font-bold py-2">
            Tailored Solutions for
          </p>
          <ReactTyped
            className="md:text-4xl sm:text-3xl text-lg font-bold md:pl-4 pl-2"
            strings={["Marketing", "Consultancy", "Growth"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-xl text-lg font-bold text-gray-500">
          Unlock the potential of data to optimize marketing strategies and
          boost business performance.
        </p>
        <button
          className="bg-[#00df9a] w-[180px] md:w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:scale-105 duration-300"
          onClick={scrollToAnalytics}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Hero;
