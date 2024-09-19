import React from "react";
import Company from "../assets/company.png";


const About = () => {
  return (
    <div className="w-full bg-white text-black py-16 px-4">
      {/* Hero Section */}
      <div className="max-w-[1240px] mx-auto text-center py-16">
        <h1 className="text-4xl font-bold text-[#00df9a]">
          About Fouze Solutions
        </h1>
        <p className="mt-4 text-xl">
          Your partner in growth with data-driven marketing and business
          consultancy solutions.
        </p>
      </div>

      {/* Company Overview Section */}
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8 py-8">
        <img
          className="w-full h-full object-cover"
          src={Company}
          alt="Fouze Solutions Office"
        />
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold">Who We Are</h2>
          <p className="mt-4 text-gray-700">
            Fouze Solutions is a cutting-edge marketing and consultancy company,
            specializing in data-driven strategies to help businesses achieve
            sustainable growth. With a focus on digital marketing, business
            operations, and growth consultancy, we empower companies to unlock
            new opportunities and maximize efficiency.
          </p>
        </div>
      </div>

      {/* Vision and Mission Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-[1240px] mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#00df9a]">
            Our Vision & Mission
          </h2>
          <p className="mt-4 text-xl text-gray-700">
            At Fouze Solutions, our mission is to revolutionize businesses by
            providing tailored marketing strategies and operational consultancy.
            We aim to be the go-to partner for businesses seeking sustainable
            growth and data-backed solutions.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-[1240px] mx-auto py-16">
        <h2 className="text-3xl font-bold text-center text-[#00df9a]">
          Why Choose Fouze Solutions
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <div className="bg-gray-100 p-8 rounded-lg shadow-md text-center cursor-pointer hover:scale-105 duration-300">
            <h3 className="text-2xl font-bold">Expertise</h3>
            <p className="mt-4 text-gray-600">
              With years of industry experience, our consultants are experts in
              marketing, business growth, and operations optimization.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg shadow-md text-center cursor-pointer hover:scale-105 duration-300">
            <h3 className="text-2xl font-bold">Tailored Solutions</h3>
            <p className="mt-4 text-gray-600">
              Every business is unique, and so are our strategies. We deliver
              custom solutions based on in-depth analysis of your needs.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg shadow-md text-center cursor-pointer hover:scale-105 duration-300">
            <h3 className="text-2xl font-bold">Proven Results</h3>
            <p className="mt-4 text-gray-600">
              We have helped numerous companies achieve measurable growth and
              efficiency through our data-driven approach.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div id="testimonials" className="bg-gray-100 py-12">
        <div className="max-w-[1240px] mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#00df9a]">
            What Our Clients Say
          </h2>
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div className="p-4 shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer">
              <p className="text-lg italic">
                "Fouze Solutions helped us transform our marketing strategy and
                achieve 50% growth in just 6 months. Their team is outstanding!"
              </p>
              <p className="mt-4 text-gray-700 font-bold">
                - John Doe, CEO of XYZ Corp
              </p>
            </div>
            <div className="p-4 shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer">
              <p className="text-lg italic">
                "Their consultancy services streamlined our operations and
                boosted efficiency across the board. We highly recommend them."
              </p>
              <p className="mt-4 text-gray-700 font-bold">
                - Jane Smith, COO of ABC Ltd
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-[1240px] mx-auto py-16 text-center">
        <h2 className="text-3xl font-bold">Ready To Grow Your Business?</h2>
        <p className="mt-4 text-xl text-gray-600">
          Contact us today to learn more about how we can help your business
          thrive.
        </p>
        <button className="mt-6 bg-[#00df9a] text-black py-3 px-6 rounded-md hover:scale-105 transition-transform">
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default About;
