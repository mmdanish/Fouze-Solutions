import React from "react";
import Growth from "../assets/business-growth.png";

const Explore = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Unlock Your Business Potential with Expert Guidance
          </h1>
          <p className="py-2">
            Our team of seasoned consultants is here to help you navigate the
            complexities of modern business. Whether you're looking to refine
            your strategy, boost your marketing efforts, or drive growth, we
            have the expertise you need.
          </p>

          <div className="my-4">
            <a
              href="/services"
              className="text-[#00df9a] hover:underline font-medium"
            >
              Explore Our Services
            </a>
            <p className="py-2">
              Ready to take the next step? Contact us today to discuss your
              business goals and how we can help you achieve them. {""}
              <a href="/contact" className="text-[#00df9a] hover:underline">
                Learn More
              </a>
            </p>
          </div>
        </div>

        
        <div className="lg:col-span-1 my-4 flex justify-center lg:justify-end">
          <img
            className="w-[400px] h-auto"
            src={Growth}
            alt="Business Growth"
          />
        </div>
      </div>
    </div>
  );
};

export default Explore;
