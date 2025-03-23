import React from "react";
import aboutImg from "../assets/images/about-service.jpg";

const About = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-blue-600">About Us</h1>
      <p className="text-center text-gray-600 mt-2">
        Learn more about Aqua Life and our mission to provide clean water solutions.
      </p>

      {/* About Section */}
      <div className="mt-12 flex flex-col md:flex-row items-center gap-12">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2">
          <img
            src={aboutImg}
            alt="About Us"
            className="w-full h-80 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side - Introduction */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            At Aqua Life, we are dedicated to delivering advanced water purification 
            systems designed to ensure safe, clean, and healthy drinking water. Our 
            technology-driven solutions provide peace of mind for households, businesses, 
            and industries looking for reliable water filtration.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6">Why Choose Us?</h2>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>✔ High-Quality Water Filtration</li>
            <li>✔ Affordable Pricing with Long-Term Benefits</li>
            <li>✔ 24/7 Expert Customer Support</li>
            <li>✔ Eco-Friendly & Sustainable Solutions</li>
          </ul>
        </div>
      </div>

      {/* Scale About Us Section */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {/* Quality Work */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-blue-600">Quality Work</h3>
          <p className="text-gray-600 mt-2">We use top-tier materials for the best water filtration.</p>
        </div>

        {/* Customer Service */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-blue-600">Customer Service</h3>
          <p className="text-gray-600 mt-2">Our support team is available 24/7 to assist you.</p>
        </div>

        {/* Innovation */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-blue-600">Innovation</h3>
          <p className="text-gray-600 mt-2">We continuously improve our purification technology.</p>
        </div>

        {/* Reliability */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-blue-600">Reliability</h3>
          <p className="text-gray-600 mt-2">Trusted by thousands of satisfied customers.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
