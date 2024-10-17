import React from "react";
import Company from "../assets/company.png";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contact");
  };

  return (
    <div className="w-full bg-white text-black py-16 px-4">
      {/* Hero Section */}
      <div className="max-w-[1240px] mx-auto text-center py-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#00df9a]">
          About Fouze Solutions
        </h1>
        <p className="mt-4 text-lg sm:text-xl">
          Your partner in growth with data-driven marketing and business
          consultancy solutions.
        </p>
      </div>

      {/* Company Overview Section */}
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
        <img
          className="w-full h-full object-cover"
          src={Company}
          alt="Fouze Solutions Office"
        />
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl font-bold">Who We Are</h2>
          <p className="mt-4 text-gray-700 text-justify">
            Fouze Solutions is a leading marketing and consultancy firm that
            empowers businesses with data-driven strategies for sustainable
            growth. We specialize in digital marketing, business operations, and
            growth consultancy, helping companies unlock new opportunities and
            optimize their efficiency. Our tailored solutions enable clients to
            achieve measurable results and drive long-term success.
          </p>
        </div>
      </div>

      {/* Vision and Mission Section */}
      <div className="bg-gray-100 py-12 px-4">
        <div className="max-w-[1240px] mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#00df9a]">
            Our Vision & Mission
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-700">
            At Fouze Solutions, our mission is to revolutionize businesses by
            providing tailored marketing strategies and operational consultancy.
            We aim to be the go-to partner for businesses seeking sustainable
            growth and data-backed solutions.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-[1240px] mx-auto py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#00df9a]">
          Why Choose Fouze Solutions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-gray-100 p-8 rounded-lg shadow-md text-center cursor-pointer hover:scale-105 duration-300">
            <h3 className="text-xl sm:text-2xl font-bold">Expertise</h3>
            <p className="mt-4 text-gray-600">
              With years of industry experience, our consultants are experts in
              marketing, business growth, and operations optimization.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg shadow-md text-center cursor-pointer hover:scale-105 duration-300">
            <h3 className="text-xl sm:text-2xl font-bold">
              Tailored Solutions
            </h3>
            <p className="mt-4 text-gray-600">
              Every business is unique, and so are our strategies. We deliver
              custom solutions based on in-depth analysis of your needs.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg shadow-md text-center cursor-pointer hover:scale-105 duration-300">
            <h3 className="text-xl sm:text-2xl font-bold">Proven Results</h3>
            <p className="mt-4 text-gray-600">
              We have helped numerous companies achieve measurable growth and
              efficiency through our data-driven approach.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-[1240px] mx-auto py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold">
          Ready To Grow Your Business?
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-gray-600">
          Contact us today to learn more about how we can help your business
          thrive.
        </p>
        <button
          onClick={handleClick}
          className="mt-6 bg-[#00df9a] text-black py-2 px-4 sm:py-3 sm:px-6 rounded-md hover:scale-105 transition-transform"
        >
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default About;
