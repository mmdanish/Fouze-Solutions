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
            <li className="py-2 text-sm">
              <a href="/about" className="hover:underline">
                About Us
              </a>
            </li>
            <li className="py-2 text-sm">Careers</li>
            <li className="py-2 text-sm">Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Contact Us</h6>
          <ul>
            <li className="py-2 text-sm">Email: info@fouze.in</li>
            <li className="py-2 text-sm">Tel: +91 483 2736488</li>
            <li className="py-2 text-sm"><a href="/contact" className="hover:underline">Contact Page</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
