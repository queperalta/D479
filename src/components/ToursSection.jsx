import React from "react";
import rainforest from "../assets/rainforest_hiking.png";
import volcano from "../assets/volcano_tours.png";
import snorkeling from "../assets/snorkeling.png";
import ziplining from "../assets/ziplining.png";
import TestimonialSlider from "./TestimonialSlider";

const tours = [
  {
    title: "Into the Wild",
    image: rainforest,
  },
  {
    title: "Lava Rock Quest",
    image: volcano,
  },
  {
    title: "Underwater Wonder",
    image: snorkeling,
  },
  {
    title: "Fly Through Falls",
    image: ziplining,
  },
];

export default function ToursSection() {
  return (
    <section id="tours" className="min-h-screen py-20 px-6 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Tours & Adventures</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {tours.map((tour, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
            >
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center py-3 text-xl font-semibold">
                {tour.title}
              </div>
            </div>
          ))}
        </div>
        <TestimonialSlider />
      </div>
    </section>
  );
}
