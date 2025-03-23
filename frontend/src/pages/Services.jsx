import React from "react";

// Sample services data (Replace with real data later)
const services = [
  {
    id: 1,
    title: "Water Filtration",
    description: "High-quality filtration systems for clean drinking water.",
    icon: "💧",
  },
  {
    id: 2,
    title: "RO System Installation",
    description: "Professional installation of RO purification systems.",
    icon: "🔧",
  },
  {
    id: 3,
    title: "Water Testing",
    description: "Comprehensive water quality testing for safety assurance.",
    icon: "🧪",
  },
  {
    id: 4,
    title: "Maintenance & Repairs",
    description: "Regular maintenance and repair services for water systems.",
    icon: "🛠",
  },
];

const Services = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center text-blue-600">Our Services</h1>
      <p className="text-center text-gray-600 mt-2">
        We provide top-notch water purification services.
      </p>

      {/* Services Grid */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <div key={service.id} className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl">{service.icon}</div>
            <h2 className="text-lg font-semibold mt-4">{service.title}</h2>
            <p className="text-gray-600 text-sm mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
