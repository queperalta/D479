import React, { useState } from "react";
import lodgingImage from "../assets/lodging.png";
import hostelImg from "../assets/hostel.png";
import familyImg from "../assets/family.png";
import resortImg from "../assets/resort.png";
import { BedDouble, Home, Hotel } from "lucide-react";

export default function LodgingSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const cards = [
    {
      title: "Affordable Hostels & BnBs",
      icon: <BedDouble className="text-primary" />,
      description: "Cozy and budget-friendly options for solo travelers or backpackers.",
      image: hostelImg,
    },
    {
      title: "Family-Owned Hotels",
      icon: <Home className="text-primary" />,
      description: "Experience local hospitality with warm, family-run accommodations.",
      image: familyImg,
    },
    {
      title: "Luxury 4-Star Resort",
      icon: <Hotel className="text-primary" />,
      description: "Relax in tropical elegance with full amenities and ocean views.",
      image: resortImg,
    },
  ];

  return (
    <section
      id="lodging"
      className="min-h-screen bg-cover bg-center text-white flex items-start pt-2"
      style={{ backgroundImage: `url(${lodgingImage})` }}
    >
      <div className="bg-black bg-opacity-10 w-full py-20 px-6">
        <div className="max-w-4xl mx-auto text-left">
          <h2 className="text-4xl font-bold mb-8 text-center">Lodging</h2>

          <div data-aos="fade-up" className="flex flex-col gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white/80 text-gray-800 rounded-lg shadow p-6 transition-all duration-500 ease-in-out cursor-pointer"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <div className="flex items-center gap-4">
                  {card.icon}
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                </div>

                {activeIndex === index && (
                  <div className="mt-4 animate-fade-in">
                    <p className="mb-4">{card.description}</p>
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-80 object-cover rounded-lg shadow-md"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <a href="#book" className="btn btn-primary text-lg">
              Book Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
