import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa"; 

const Contact = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center text-blue-600">Get in Touch</h1>
      <p className="text-center text-gray-500 mt-2">
        Have any questions? We’d love to hear from you!
      </p>

      {/* Contact Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Contact Details */}
        <div className="bg-white shadow-lg rounded-lg p-8 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-700">Contact Information</h2>
          <p className="text-gray-500 mt-2">Feel free to reach out via email, phone, or visit us!</p>

          <div className="mt-6 space-y-5">
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-blue-500 text-2xl" />
              <p className="text-gray-700">123 Srinagar, Kashmir</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-blue-500 text-2xl" />
              <p className="text-gray-700">000-000-0000</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-blue-500 text-2xl" />
              <p className="text-gray-700">info@aqualife.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 shadow-lg rounded-lg p-8 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-700">Send Us a Message</h2>

          <form className="mt-6 space-y-4">
            <div>
              <label className="block text-gray-600 font-semibold">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-600 font-semibold">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-600 font-semibold">Message</label>
              <textarea
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
