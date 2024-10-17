import React, { useState } from "react";
import {
  FaClock,
  FaQuestionCircle,
  FaShareAlt,
  FaLightbulb,
} from "react-icons/fa";
import {
  FaWhatsappSquare,
  FaFacebookSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import Modal from "../components/Modal";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    // Form Validation
    if (!formData.name || !formData.email || !formData.message) {
      setModalMessage("Please fill out all required fields.");
      setIsModalOpen(true);
      return;
    }

    // Google Apps Script Web App URL
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbzR5arkVd7Fa-izbuaSFlzJaC0Q676ts4O6QxauWS9jLxn_6hBsr4ITBuakueaqeSkQ/exec"

    // Send data to Google Apps Script
    fetch(scriptURL, {
      method: "POST",
      body: new URLSearchParams(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result === "success") {
          setModalMessage("Message Sent Successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
        } else {
          setModalMessage("An error occurred. Please try again.");
        }
        setIsModalOpen(true);
      })
      .catch((error) => {
        console.error("Error:", error);
        setModalMessage("An error occurred. Please try again.");
        setIsModalOpen(true);
      });
  };
  return (
    <div className="w-full bg-gray-100 py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8">
        {/* Left side - contact Info */}
        <div className="flex flex-col justify-center text-justify">
          <h2 className="text-4xl font-bold text-gray-800">Get in Touch</h2>
          <p className="text-gray-600 py-4">
            If you have any questions or want to talk about how we can help your
            business grow, feel free to reach out!
          </p>
          <p className="text-gray-800 font-bold">Contact Information:</p>
          <p className="text-gray-600">
            Address: Fouze Solutions, 1st Floor - Parambil Buildings <br /> Big Bazaar Road,
            Kizhekkethala Down Hill - 676519 <br /> Malappuram, Kerala, India
          </p>
          <p className="text-gray-600">
            Tel: +91 483 2736488, Fax: +91 483 2737488 <br />
            Mob: +91 94954 88488
          </p>
          <p className="text-gray-600">Email: info@fouze.in</p>
        </div>

        {/* Right Side - Expanded Form */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <form onSubmit={sendEmail} className="grid grid-cols-2 gap-4">
            <div className="col-span-2 md:col-span-1">
              <label className="block text-gray-600 text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <label className="block text-gray-600 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="col-span-2">
              <label className="block text-gray-600 text-sm font-bold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="col-span-2">
              <label className="block text-gray-600 text-sm font-bold mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="col-span-2">
              <label className="block text-gray-600 text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows="6"
                placeholder="Your Message"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="col-span-2">
              <button
                type="submit"
                className="w-full bg-green-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-600"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Render the modal if the state is true */}
          {isModalOpen && (
            <Modal
              message={modalMessage}
              onClose={() => setIsModalOpen(false)}
            />
          )}
        </div>
      </div>

      {/* Additional Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {/* Mission Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-bold flex items-center">
            <span className="mr-2">
              <FaLightbulb size={24} />
            </span>
            Our Mission
          </h3>
          <p className="text-gray-600 mt-2">
            We aim to provide exceptional service and support to help your
            business thrive.
          </p>
        </div>

        {/* Working Hours Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-bold flex items-center">
            <span className="mr-2">
              <FaClock size={24} />
            </span>
            Working Hours
          </h3>
          <p className="text-gray-600 mt-2">Monday to Friday: 9 AM - 6 PM</p>
        </div>

        {/* FAQs Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-bold flex items-center">
            <span className="mr-2">
              <FaQuestionCircle size={24} />
            </span>
            FAQs
          </h3>
          <p className="text-gray-600 mt-2">
            How long does it take to respond? We aim to respond within 24 hours.
          </p>
        </div>

        {/* Social Media Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-bold flex items-center">
            <span className="mr-2">
              <FaShareAlt size={24} />
            </span>
            Follow Us
          </h3>
          <div className="flex space-x-4 mt-2 cursor-pointer">
            <a
              href="http://wa.me/+919495488488?text=Hello"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsappSquare size={30} />
            </a>
            <FaFacebookSquare size={30} />
            <FaTwitterSquare size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
