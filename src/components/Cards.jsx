import React from "react";
import { useNavigate } from "react-router-dom";

const Cards = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };
  return (
    <div className="w-full py-[5rem] px-4 bg-white">
      {/* Heading */}
      <div className="max-w-[1240px] mx-auto text-center mb-8">
        <h1 className="text-4xl text-center font-bold">
          Why Partner with Fouze Solutions?
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Discover how our expertise can elevate your business and create a
          lasting impact. We offer tailored solutions that drive success.
        </p>
      </div>
      {/* Cards Section */}
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 py-[3rem] gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <div className="w-20 h-20 mx-auto mt-[-3rem] bg-[#00df9a] rounded-full flex items-center justify-center">
            <i className="fas fa-chart-line text-white text-4xl"></i>
          </div>
          <h2 className="text-2xl font-bold text-center py-8">
            Marketing Strategy
          </h2>
          <p className="text-center text-lg font-medium">
            Tailored strategies that drive growth. Our data-driven approach
            ensures your business reaches its full potential, delivering
            measurable results.
          </p>
          <button
            onClick={handleClick}
            className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3"
          >
            Learn More
          </button>
        </div>

        <div className="w-full shadow-xl flex flex-col p-4 my-4 bg-gray-100 rounded-lg hover:scale-105 duration-300">
          <div className="w-20 h-20 mx-auto mt-[-3rem] bg-black rounded-full flex items-center justify-center">
            <i className="fas fa-bullhorn text-[#00df9a] text-4xl"></i>
          </div>
          <h2 className="text-2xl font-bold text-center py-8">
            Branding & Identity
          </h2>
          <p className="text-center text-lg font-medium">
            Build a powerful brand identity. We help you create a memorable
            image and voice that resonates with your audience.
          </p>
          <button
            onClick={handleClick}
            className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3"
          >
            Learn More
          </button>
        </div>

        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <div className="w-20 h-20 mx-auto mt-[-3rem] bg-[#00df9a] rounded-full flex items-center justify-center">
            <i className="fas fa-user-friends text-white text-4xl"></i>
          </div>
          <h2 className="text-2xl font-bold text-center py-8">
            Client Success
          </h2>
          <p className="text-center text-lg font-medium">
            Proven success across industries. We work with you to achieve
            measurable results, ensuring satisfaction at every step.
          </p>
          <button
            className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3"
            onClick={() => {
              window.location.href = "/about#testimonials";
            }}
          >
            See Testimonials
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
