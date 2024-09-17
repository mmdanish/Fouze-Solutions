import React from "react";
import {
  FaWhatsappSquare,
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">
          Fouze Solutions
        </h1>
        <p className="py-4">
          Empowering business with strategic marketing and innovative solutions
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaWhatsappSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Our Services</h6>
          <ul>
            <li className="py-2 text-sm">Marketing Strategy</li>
            <li className="py-2 text-sm">Brand Development</li>
            <li className="py-2 text-sm">Consulting</li>
            <li className="py-2 text-sm">Digital Solutions</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Resources</h6>
          <ul>
            <li className="py-2 text-sm">Testimonials</li>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Guides</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-sm">About Us</li>
            <li className="py-2 text-sm">Careers</li>
            <li className="py-2 text-sm">Contact</li>
            <li className="py-2 text-sm">Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm">Terms of Service</li>
            <li className="py-2 text-sm">Cookie Policy</li>
            <li className="py-2 text-sm">Disclaimer</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
