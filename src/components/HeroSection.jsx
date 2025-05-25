import React, { useEffect, useState } from "react";
import taniti from "../assets/taniti.png";
import taniti2 from "../assets/taniti2.png";
import taniti3 from "../assets/taniti3.png";
import taniti4 from "../assets/taniti4.png";
import taniti5 from "../assets/taniti5.png";

const heroImages = [
  taniti,
  taniti2,
  taniti3,
  taniti4,
  taniti5,
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // 3 seconds
    return () => clearInterval(interval);
  }, []);

  const bgStyle = {
    backgroundImage: `url(${heroImages[currentIndex]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section
      className="hero min-h-screen text-white transition-all duration-700 ease-in-out"
      style={bgStyle}
    >
      <div className="hero-overlay bg-black bg-opacity-60" />
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Welcome to Taniti</h1>
          <p className="py-6 text-lg">
            Eco-adventures, island beauty, and unforgettable experiences.
          </p>
          <a href="#plan" className="btn btn-primary text-lg">
            Plan Your Trip Today
          </a>
        </div>
      </div>
    </section>
  );
}
