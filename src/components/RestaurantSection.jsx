import React, { useState } from "react";
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
  const current = restaurants[index];

  return (
    <section id="restaurants" className="relative overflow-hidden h-screen w-full">
      <div
        className="flex transition-transform duration-700 ease-in-out w-full h-full"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {restaurants.map((restaurant, i) => (
          <div
            key={restaurant.name}
            className="min-w-full h-full bg-center bg-cover flex items-center justify-center"
            style={{ backgroundImage: `url(${restaurant.image})` }}
          >
            <div className="bg-black bg-opacity-60 w-full py-20 px-6 flex flex-col items-center text-center text-white">
              <h2 className="text-4xl font-bold mb-4">{restaurant.name}</h2>
              <h3 className="text-2xl italic mb-4">{restaurant.type}</h3>
              <p className="max-w-2xl mb-8 text-lg">{restaurant.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                {restaurant.buttonLabels.map(({ label, index: targetIndex }) => (
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
        ))}
      </div>
    </section>
  );
}
