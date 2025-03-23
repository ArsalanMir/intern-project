import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; 
import aquaTouch from "../assets/images/aqua-touch.jpg";
import aquaGrand from "../assets/images/aquagrand-plus.jpg";
import blueDimond from "../assets/images/blue-dimond.jpg";
import aquaPearl from "../assets/images/portfolio-3.jpg";
import crystalRo from "../assets/images/Crystal-ro.jpg"; 



const products = [
  { 
    id: 1, 
    name: "Aqua Touch", 
    description: "Advanced filtration system for clean drinking water.", 
    price: "$150", 
    purificationCapacity: "15 L/hr",
    storageCapacity: "10 Liters",
    dimensions: "380 x 270 x 505 mm",
    netWeight: "8.5 kg",
    warranty: "1 Year",
    support: "24/7 Customer Support",
    image: aquaTouch 
  },
  { 
    id: 2, 
    name: "Aqua Grand Plus", 
    description: "Removes bacteria and viruses for safe consumption.", 
    price: "$200",
    purificationCapacity: "20 L/hr",
    storageCapacity: "12 Liters",
    dimensions: "400 x 280 x 540 mm",
    netWeight: "9.0 kg",
    warranty: "1 Year",
    support: "24/7 Customer Support",
    image: aquaGrand 
  },
  { 
    id: 3, 
    name: "Blue Dimond", 
    description: "Reduces hardness for better quality water.", 
    price: "$180",
    purificationCapacity: "18 L/hr",
    storageCapacity: "8 Liters",
    dimensions: "370 x 260 x 500 mm",
    netWeight: "7.5 kg",
    warranty: "1 Year",
    support: "24/7 Customer Support",
    image: blueDimond 
  },
  { 
    id: 4, 
    name: "Aqua Pearl", 
    description: "Enhances pH level for healthier drinking water.", 
    price: "$220",
    purificationCapacity: "16 L/hr",
    storageCapacity: "10 Liters",
    dimensions: "385 x 275 x 520 mm",
    netWeight: "8.2 kg",
    warranty: "1 Year",
    support: "24/7 Customer Support",
    image: aquaPearl 
  },
  { 
    id: 5, 
    name: "Crystal RO", 
    description: "Purifies water for the entire home.", 
    price: "$300",
    purificationCapacity: "25 L/hr",
    storageCapacity: "15 Liters",
    dimensions: "420 x 300 x 550 mm",
    netWeight: "10.0 kg",
    warranty: "2 Years",
    support: "24/7 Customer Support",
    image: crystalRo 
  },
];

const ProductList = ({ limit, compact }) => {
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState({});

  // Function to handle adding product to cart
  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
    setAddedToCart((prev) => ({ ...prev, [product.id]: true }));
  };

  // Apply the limit to products if provided
  const displayedProducts = limit ? products.slice(0, limit) : products;

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8 border-b-2 pb-2">
        {compact ? "Featured Products" : "Our Products"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {displayedProducts.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md text-center border border-gray-200">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
            
            <h3 className="text-lg font-semibold text-blue-700">{product.name}</h3>

            {/* Show details only if NOT in compact mode */}
            {!compact && (
              <div className="mt-4 text-sm text-gray-700">
                <div className="border-b border-gray-300 pb-2 mb-2">
                  <strong>Price:</strong> <span className="text-green-600 font-semibold">{product.price}</span>
                </div>
                <div className="border-b border-gray-300 pb-2 mb-2">
                  <strong>Purification Capacity:</strong> {product.purificationCapacity}
                </div>
                <div className="border-b border-gray-300 pb-2 mb-2">
                  <strong>Storage Capacity:</strong> {product.storageCapacity}
                </div>
                <div className="border-b border-gray-300 pb-2 mb-2">
                  <strong>Dimensions:</strong> {product.dimensions}
                </div>
                <div className="border-b border-gray-300 pb-2 mb-2">
                  <strong>Net Weight:</strong> {product.netWeight}
                </div>
                <div className="border-b border-gray-300 pb-2 mb-2">
                  <strong>Warranty:</strong> {product.warranty}
                </div>
                <div>
                  <strong>Support:</strong> {product.support}
                </div>
              </div>
            )}

            {/* Buttons Section */}
            <div className="mt-4">
              {compact ? (
                <Link to="/products">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition">
                    Explore More Products
                  </button>
                </Link>
              ) : addedToCart[product.id] ? (
                <Link to="/cart">
                  <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 rounded-lg transition">
                    Go to Cart
                  </button>
                </Link>
              ) : (
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition"
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;