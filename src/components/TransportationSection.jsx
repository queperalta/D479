import React, { useState, useEffect } from "react";
import publicBus from "../assets/public_bus.png";
import taxiCar from "../assets/taxi_and_car_rental.png";
import bikeWalk from "../assets/bike_rental_and_walking.png";

const transportOptions = [
  {
    label: "Public Buses",
    image: publicBus,
    description: "Affordable and reliable buses run daily through Taniti City to Yellow Leaf Bay.",
  },
  {
    label: "Taxi & Rental Cars",
    image: taxiCar,
    description: "Pick up a taxi or rent a car at the airport for maximum freedom and convenience.",
  },
  {
    label: "Bike Rentals & Walking",
    image: bikeWalk,
    description: "Enjoy scenic walks or rent bikes from several vendors around the island.",
  },
];

export default function TransportationSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    transportOptions.forEach((option, index) => {
      const img = new Image();
      img.src = option.image;
      img.onload = () =>
        setLoadedImages((prev) => ({ ...prev, [index]: true }));
    });
  }, []);

  return (
    <section
      id="transport"
      className="min-h-screen px-6 py-10 flex items-start justify-center relative overflow-hidden text-white"
    >
      {/* Background */}
      <div className="absolute inset-0 transition-opacity duration-700 ease-in-out z-0">
        {transportOptions.map((option, index) => (
          <img
            key={index}
            src={option.image}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              activeIndex === index && loadedImages[index]
                ? "opacity-100"
                : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      {/* Foreground content */}
      <div className="relative z-10 w-full max-w-5xl">
        <h2 className="text-4xl font-bold mb-6 text-center">Transportation</h2>

        <div className="flex flex-col md:flex-row justify-center gap-4 mb-10 text-center">
          {transportOptions.map((option, index) => (
            <button
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              className={`px-6 py-3 rounded-full border-2 transition-all duration-300 font-semibold ${
                activeIndex === index
                  ? "bg-white text-gray-900 border-white"
                  : "bg-transparent border-white hover:bg-white hover:text-gray-900"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Description */}
        <div className="text-center mt-4">
          <p className="text-lg max-w-3xl mx-auto transition-opacity duration-500">
            {transportOptions[activeIndex].description}
          </p>
        </div>
      </div>
    </section>
  );
}
