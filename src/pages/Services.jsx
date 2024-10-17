import React from "react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contact");
  };
  return (
    <div className="w-full bg-white text-black py-16 px-4">
      {/* Hero Section */}
      <div className="max-w-[1240px] mx-auto text-center py-16">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#00df9a]">
          Our Services
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-center">
          We provide a range of services to help your business thrive in the
          digital age. Our services are designed to cater to all your marketing
          and business needs.
        </p>
      </div>

      {/* Services section */}
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-16">
        {/* Service 1 */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-md text-center cursor-pointer hover:scale-105 duration-300">
          <h3 className="text-2xl font-bold">Digital Marketing</h3>
          <p className="mt-4 text-gray-600">
            We offer full-stack digital marketing services including SEO, social
            media management, and paid campaigns to boost your online presence.
          </p>
        </div>
        {/* Service 2 */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-md text-center cursor-pointer hover:scale-105 duration-300">
          <h3 className="text-2xl font-bold">Business Consultancy</h3>
          <p className="mt-4 text-gray-600">
            Our consultancy services focus on optimizing your business processes
            for greater efficiency and profitability.
          </p>
        </div>
        {/* Service 3 */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-md text-center cursor-pointer hover:scale-105 duration-300">
          <h3 className="text-2xl font-bold">Growth Strategies</h3>
          <p className="mt-4 text-gray-600">
            We design growth strategies tailored to your business, helping you
            scale sustainably and achieve long-term success.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-[1240px] mx-auto py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#00df9a]">
          Why Choose Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-gray-100 p-8 rounded-lg shadow-md text-center cursor-pointer hover:scale-105 duration-300">
            <h3 className="text-2xl font-bold">Expertise</h3>
            <p className="mt-4 text-gray-600">
              Our team consists of industry experts with a proven track record
              of delivering exceptional results for businesses like yours.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg shadow-md text-center cursor-pointer hover:scale-105 duration-300">
            <h3 className="text-2xl font-bold">Tailored Solutions</h3>
            <p className="mt-4 text-gray-600">
              Every service we offer is customized to meet the unique needs of
              your business, ensuring maximum impact.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg shadow-md text-center cursor-pointer hover:scale-105 duration-300">
            <h3 className="text-2xl font-bold">Results-Driven</h3>
            <p className="mt-4 text-gray-600">
              We focus on delivering measurable outcomes, helping you achieve
              your business goals efficiently.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonial Section
      <div className="bg-gray-100 py-12">
        <div className="max-w-[1240px] mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#00df9a]">
            What Our Clients Say
          </h2>
          <div className="mt-8 md:grid-cols-2 gap-8">
            <div className="p-4 shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer">
              <p className="text-lg italic">
                "Their digital marketing services increased our website traffic
                by 40% within 3 months."
              </p>
              <p className="mt-4 text-gray-700 font-bold">
                Al-Abrar Travel Services
              </p>
            </div>
            <div className="p-4 shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer">
              <p className="text-lg italic">
                "Our business consultancy sessions helped us cut costs and
                improve our operational efficiency."
              </p>
              <p className="mt-4 text-gray-700 font-bold">Malabar Marketing</p>
            </div>
          </div>
        </div>
      </div>  */}

      {/* Call to Action */}
      <div className="max-w-[1240px] mx-auto py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">
          Ready To Elevate Your Business?
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-600">
          Let us know how we can help you grow. Get in touch today to discuss
          our services in more detail.
        </p>
        <button
          onClick={handleClick}
          className="mt-6 bg-[#00df9a] text-black py-2 px-4 md:py-3 md:px-6 rounded-md hover:scale-105 transition-transform"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Services;
