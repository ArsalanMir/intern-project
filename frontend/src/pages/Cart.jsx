import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();


  const totalAmount = cart.reduce((total, product) => {
    const price = parseFloat(product.price.replace("$", "")); 
    return total + price * product.quantity;
  }, 0);

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8 border-b-2 pb-2">
        🛒 Shopping Cart
      </h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cart.map((product) => (
              <div
                key={product.id}
                className="bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border border-gray-200"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-md"
                />
                <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
                <p className="text-gray-600 mt-1">💰 Price: {product.price}</p>

                {/* Quantity Controls */}

                <div className="flex items-center justify-center mt-4">
                  <button
                    onClick={() => updateQuantity(product.id, product.quantity - 1)}
                    className="bg-gray-300 px-4 py-1 rounded-l text-lg hover:bg-gray-400"
                  >
                    -
                  </button>
                  <span className="px-6 py-1 text-lg font-semibold bg-gray-100 border border-gray-300">
                    {product.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(product.id, product.quantity + 1)}
                    className="bg-gray-300 px-4 py-1 rounded-r text-lg hover:bg-gray-400"
                  >
                    +
                  </button>
                </div>

                {/* Remove from Cart Button */}

                <button
                  onClick={() => removeFromCart(product.id)}
                  className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition"
                >
                  ❌ Remove
                </button>
              </div>
            ))}
          </div>

          {/* Display Total Amount */}
          
          <div className="text-center mt-10 bg-gray-100 py-6 px-4 rounded-lg shadow-md border border-gray-300">
            <h3 className="text-2xl font-bold text-gray-800">
              🏷️ Total: <span className="text-blue-600"> ${totalAmount.toFixed(2)}</span>
            </h3>
            <Link to="/checkout">
              <button className="mt-4 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition shadow-md text-lg">
                ✅ Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
