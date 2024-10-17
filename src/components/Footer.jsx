import React from "react";
import {
  FaWhatsappSquare,
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">
          Fouze Solutions
        </h1>
        <p className="py-4">
          Empowering business with strategic marketing and innovative solutions
        </p>
        <div className="flex justify-between md:w-[75%] my-6 flex-wrap">
          <FaFacebookSquare
            size={30}
            className="p-1 cursor-pointer hover:text-[#00df9a]"
          />
          <FaInstagram
            size={30}
            className="p-1 cursor-pointer hover:text-[#00df9a]"
          />
          <FaTwitterSquare
            size={30}
            className="p-1 cursor-pointer hover:text-[#00df9a]"
          />
          <a
            href="http://wa.me/+919495488488?text=Hello"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsappSquare
              size={30}
              className="p-1 cursor-pointer hover:text-[#00df9a]"
            />
          </a>
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between flex-wrap mt-6">
        <div className="mb-4">
          <h6 className="font-medium text-gray-400 pb-4">Our Services</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a]">
              Marketing Strategy
            </li>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a]">
              Brand Development
            </li>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a]">
              Consulting
            </li>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a]">
              Digital Solutions
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h6 className="font-medium text-gray-400 pb-4">Resources</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a]">
              Testimonials
            </li>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a]">
              Documentation
            </li>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a]">
              Guides
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h6 className="font-medium text-gray-400 pb-4">Company</h6>
          <ul>
            <li className="py-2 text-sm">
              <a href="/about" className="hover:text-[#00df9a]">
                About Us
              </a>
            </li>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a]">
              Careers
            </li>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a]">
              Privacy Policy
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h6 className="font-medium text-gray-400 pb-4">Contact Us</h6>
          <ul>
            <li className="py-2 text-sm">Email: info@fouze.in</li>
            <li className="py-2 text-sm">Mob: +91 94954 88488</li>
            <li className="py-2 text-sm">
              <a href="/contact" className="hover:text-[#00df9a]">
                Contact Page
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
