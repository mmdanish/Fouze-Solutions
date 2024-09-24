import React from "react";
import Strategy from "../assets/strategies.png";
import { useNavigate } from "react-router-dom";

const GrowthStrategies = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contact");
  };
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold py-4">
            Tailored Growth Strategies for Your Business
          </h1>
          <p className="text-lg py-2 text-black-600 text-justify">
            At Fouze Solutions, we specialize in helping businesses unlock their
            potential for growth by crafting customized strategies that drive
            success. Whether you're a startup looking to scale or an established
            business aiming to expand, we are here to guide you through every
            stage of your growth journey.
          </p>

          <h2 className="text-2xl font-semibold py-4">Our Core Services</h2>
          <ul className="list-disc space-y-2 text-black-600 text-justify pl-4">
            <li>
              <strong>Market Research & Analysis:</strong> We dive deep into
              your market to understand customer behavior, competitive
              landscape, and growth opportunities. This data-driven approach
              enables us to craft effective strategies for your business.
            </li>
            <li>
              <strong>Business Strategy Development:</strong> We help businesses
              create long-term growth strategies focused on sustainability,
              scalability, and market leadership.
            </li>
            <li>
              <strong>Marketing Strategy & Execution:</strong> From digital
              marketing campaigns to brand building, we help you reach and
              engage your target audience through cutting-edge marketing
              strategies.
            </li>
            <li>
              <strong>Operational Efficiency Consulting:</strong> We help
              optimize your internal processes, streamline operations, and
              reduce inefficiencies, allowing your business to grow with ease.
            </li>
            <li>
              <strong>Sales Strategy Optimization:</strong> We analyze your
              current sales processes and implement strategies to improve lead
              conversion, customer retention, and revenue growth.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold py-4">
            Why Choose Fouze Solutions?
          </h2>
          <p className="py-2 text-black-600 text-justify">
            Fouze Solutions stands out because of our commitment to providing
            personalized solutions that align with your business goals. We
            leverage our extensive experience in marketing and business
            consultancy to ensure you achieve measurable and sustainable growth.
            Here's what sets us apart:
          </p>
          <ul className="list-disc space-y-2 text-black-600 text-justify pl-4">
            <li>
              <strong>Customized Solutions:</strong> We understand that no two
              businesses are alike, and we tailor our services to meet your
              unique challenges and goals.
            </li>
            <li>
              <strong>Data-Driven Approach:</strong> All of our strategies are
              backed by in-depth research and analytics, ensuring that every
              recommendation is based on proven data.
            </li>
            <li>
              <strong>End-to-End Support:</strong> From strategy development to
              execution, we support you every step of the way, ensuring that
              your growth journey is smooth and successful.
            </li>
          </ul>

          <button
            onClick={handleClick}
            className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 hover:scale-105 duration-300"
          >
            Contact Us
          </button>
        </div>

        <div className="flex items-center justify-center">
          <img
            src={Strategy}
            alt="Growth Strategies"
            className="w-[500px] mx-auto my-4"
          />
        </div>
      </div>
    </div>
  );
};

export default GrowthStrategies;
