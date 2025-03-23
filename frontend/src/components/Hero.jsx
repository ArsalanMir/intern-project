import React from "react";
import { Link } from "react-router-dom";
import bgimg from "../assets/images/hero.jpg";

const Hero = () => {
  return (
    <div
      className="relative h-[80vh] flex items-center justify-center text-center text-white bg-cover bg-center px-6"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      {/* Hero Content */}
      <div className="relative max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
          Pure Water, Pure Life
        </h1>
        <p className="text-lg mt-4 drop-shadow-md">
          Providing the best water purification solutions.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">
          <Link
            to="/products"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300"
          >
            Explore Products
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-black font-semibold rounded-lg transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
