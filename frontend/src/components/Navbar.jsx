import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Import Cart Context
import logo from "../assets/images/water-resistant-1.png"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart(); // Get cart from context

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Aqua Global Logo" className="h-10 w-auto" />
          <span className="text-2xl font-bold">Aqua Life</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/about" className="hover:text-gray-200">About</Link>
          <Link to="/services" className="hover:text-gray-200">Services</Link>
          <Link to="/products" className="hover:text-gray-200">Products</Link>
          <Link to="/contact" className="hover:text-gray-200">Contact</Link>
          {/* Cart Icon */}
          <Link to="/cart" className="relative">
            🛒
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2">
                {cart.length}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 bg-blue-700 p-4">
          <Link to="/" className="block hover:text-gray-200" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="block hover:text-gray-200" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/services" className="block hover:text-gray-200" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/products" className="block hover:text-gray-200" onClick={() => setIsOpen(false)}>Products</Link>
          <Link to="/contact" className="block hover:text-gray-200" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/cart" className="block hover:text-gray-200" onClick={() => setIsOpen(false)}>
            🛒 Cart {cart.length > 0 && `(${cart.length})`}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
