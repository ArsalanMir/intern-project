import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleOrder = async (e) => {
    e.preventDefault();

    const orderData = {
      name,
      address,
      phone,
      cart,
      totalAmount: cart.reduce(
        (total, product) => total + parseFloat(product.price.replace("$", "")) * product.quantity,
        0
      ).toFixed(2),
    };

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      const result = await response.json();
      if (result.success) {
        alert("Order placed successfully! Admin has been notified.");
        clearCart();
        navigate("/");
      } else {
        alert("Failed to place order. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Checkout
      </h2>
      <form onSubmit={handleOrder} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-700">Full Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}
            className="w-full border p-2 rounded-lg" required />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Phone Number</label>
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)}
            className="w-full border p-2 rounded-lg" required />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Address</label>
          <textarea value={address} onChange={(e) => setAddress(e.target.value)}
            className="w-full border p-2 rounded-lg" required />
        </div>

        <button type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition">
          Place Order (Cash on Delivery)
        </button>
      </form>
    </div>
  );
};

export default Checkout;
