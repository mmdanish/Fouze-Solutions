import React from "react";
import Laptop from "../assets/laptop.jpg";
import { useNavigate } from "react-router-dom";

const Analytics = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/growth-strategies");
  };
  return (
    <div id="analytics" className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text=[#00d9fa] font-bold">BUSINESS GROWTH STRATEGIES</p>
          <h1 className="md:text-4xl sm:text-3xl test-2xl font-bold py-2">
            Unlock New Growth Opportunities
          </h1>
          <p className="py-2">
            Our tailored strategies are designed to help you achieve sustainable
            business growth. From market analysis to business planning, we work
            with you to identify new opportunities, streamline operations, and
            optimize your marketing efforts.
          </p>
          <p className="py-2">
            Whether you are scaling a startup or expanding an established
            business, our consultancy services are focused on maximizing
            efficiency and driving revenue growth.
          </p>
          <button
            onClick={handleButtonClick}
            className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 hover:scale-105 duration-300"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
