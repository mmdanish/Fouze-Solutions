import React from "react";
import {
  FaWhatsappSquare,
  FaFacebookSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-full bg-gray-100 py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8">
        {/* Left side - contact Info */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
          <p className="text-gray-600 py-4">
            If you have any questions or want to talk about how we can help your
            business grow, feel free to reach out!
          </p>
          <p className="text-gray-800 font-bold">Contact Information:</p>
          <p className="text-gray-600">Email: info@fouze.in</p>
          <p className="text-gray-600">
            Mob: +91 94954 88488, Tel: +91 483 2736488, <br />
            Fax: +91 483 2737488
          </p>
          <p className="text-gray-600">
            Address: 1st Floor - Parambil Buildings, Big Bazaar Road,
            Kizhekkethala Down Hill - 676519, Malappuram, Kerala, India
          </p>
          <div className="flex space-x-4 py-4 md:w-[75%] cursor-pointer">
            <FaFacebookSquare size={30} />
            <FaWhatsappSquare size={30} />
            <FaTwitterSquare size={30} />
          </div>
        </div>

        {/* Right side - Contact Form */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <form action="" method="">
            <div className="mb-4">
              <label
                className="block text-gray-600 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-600 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-600 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="w-full mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d562.2626336769714!2d76.07074953250043!3d11.051839349603208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1726756307687!5m2!1sen!2sin"
          width="100%"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          title="Map showing our business location"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
