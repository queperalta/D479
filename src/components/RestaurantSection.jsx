import React, { useState, useEffect } from "react";
import americanCuisine from "../assets/american_cuisine.png";
import panAsianFlavor from "../assets/pan_asian_flavor.png";
import fishAndRice from "../assets/fish_and_rice.png";

const restaurants = [
  {
    name: "Bob's on the Beach",
    type: "American Fine Dining Cuisine",
    description:
      "Enjoy classic American dishes with an island twist, served oceanside with breathtaking sunset views.",
    image: americanCuisine,
    buttonLabels: [
      { label: "Feast on Mama’s Fresh Catch", index: 2 },
      { label: "Taste General Tsing’s Fusion Fire", index: 1 },
    ],
  },
  {
    name: "General Tsing's",
    type: "Pan-Asian Flavors Cuisine",
    description:
      "A fusion of bold flavors from Thailand, China, and Japan, offering fresh island-grown ingredients in every bite.",
    image: panAsianFlavor,
    buttonLabels: [
      { label: "Back to Bob’s Ocean Grill", index: 0 },
      { label: "Dive into Mama’s Island Stew", index: 2 },
    ],
  },
  {
    name: "Mama's Fish & Rice",
    type: "Local Island Cuisine",
    description:
      "A homegrown favorite serving up the freshest catch and local-grown vegetables in traditional Tanitian style.",
    image: fishAndRice,
    buttonLabels: [
      { label: "Savor Tsing’s Noodle Harmony", index: 1 },
      { label: "Sample Bob’s Sunset Burgers", index: 0 },
    ],
  },
];

export default function RestaurantSection() {
  const [index, setIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    restaurants.forEach((restaurant, i) => {
      const img = new Image();
      img.src = restaurant.image;
      img.onload = () =>
        setLoadedImages((prev) => ({ ...prev, [i]: true }));
    });
  }, []);

  const current = restaurants[index];

  return (
    <section id="restaurants" className="relative overflow-hidden h-screen w-full">
      {/* Image Preload Background Layers */}
      <div className="absolute inset-0 z-0">
        {restaurants.map((restaurant, i) => (
          <img
            key={i}
            src={restaurant.image}
            alt=""
            className={`absolute w-full h-full object-cover top-0 left-0 transition-opacity duration-700 ease-in-out ${
              loadedImages[i] && index === i ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-20 w-full h-full flex items-center justify-center transition-opacity duration-500">
        <div className="text-white text-center px-6">
          <h2 className="text-4xl font-bold mb-4">{current.name}</h2>
          <h3 className="text-2xl italic mb-4">{current.type}</h3>
          <p className="max-w-2xl mb-8 text-lg mx-auto">{current.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {current.buttonLabels.map(({ label, index: targetIndex }) => (
              <button
                key={label}
                onClick={() => setIndex(targetIndex)}
                className="btn btn-primary text-lg"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
