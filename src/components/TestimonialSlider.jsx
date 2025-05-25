import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const testimonials = [
  {
    name: "Alyssa M.",
    quote: "Rainforest hiking was pure magic. I felt like I was in a movie.",
  },
  {
    name: "Carlos D.",
    quote: "Ziplining over waterfalls? Bucket list: checked!",
  },
  {
    name: "Jessica P.",
    quote: "The snorkeling tour blew my mind. So many colors, so peaceful.",
  },
  {
    name: "Greg T.",
    quote: "Taniti's volcano trek was the most surreal thing I’ve ever done.",
  },
  {
    name: "Lina S.",
    quote: "Falling asleep to the ocean breeze at the family BnB was perfection.",
  },
  {
    name: "Devon R.",
    quote: "We booked three tours in one day. Taniti kept surprising us!",
  },
  {
    name: "Maya L.",
    quote: "Our guide was so knowledgeable — we saw rare birds in the rainforest!",
  },
  {
    name: "Trevor W.",
    quote: "The coral reefs were alive with color. Unreal underwater experience.",
  },
  {
    name: "Chenaya S.",
    quote: "You haven’t lived until you’ve watched sunrise from a volcano rim.",
  },
];


export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

    useEffect(() => {
      const timer = setInterval(() => {
          setCurrentIndex((prev) => {
          let next;
          do {
              next = Math.floor(Math.random() * testimonials.length);
          } while (next === prev);
          return next;
          });
      }, 3000);

      return () => clearInterval(timer);
    }, []);

  return (
    <section className="bg-primary/5 py-20 px-6 text-gray-800 text-center">
      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-2">Build Your Adventure</h2>
        <p className="text-gray-600 text-lg mb-4">Choose your tour, pack your bags, and start exploring.</p>
        <a
          onClick={() => navigate("/book")}
          className="inline-block bg-primary text-white px-6 py-3 rounded-full shadow hover:bg-primary/90 transition-colors duration-300 text-lg font-semibold"
        >
          Book Your Tour
        </a>
      </div>
      {/* Outer container limits visible area */}
      <div className="relative h-40 w-full max-w-xl mx-auto overflow-hidden">
        {/* Inner wrapper scrolls vertically */}
        <div
          className="transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateY(-${currentIndex * 10}rem)`,
          }}
        >
          {/* Stack testimonials vertically */}
          <div className="flex flex-col">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="h-40 flex flex-col justify-center items-center px-6"
              >
                <p className="text-lg italic mb-3 max-w-md">“{t.quote}”</p>
                <p className="font-semibold text-primary">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
