import React from 'react';
import { useNavigate } from "react-router-dom";
import { CalendarCheck } from 'lucide-react';

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer id="contact" className="bg-base-200 text-base-content py-40 sm:py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* About / Legal */}
        <div>
          <h3 className="text-xl font-bold mb-2">About Taniti</h3>
          <p>Taniti is a small island paradise in the Pacific Ocean. Known for its eco-tourism, cultural depth, and stunning biodiversity, it's your next unforgettable destination.</p>
          <a
            onClick={() => navigate("/book")}
            className="btn btn-primary w-full text-white text-lg flex justify-center items-center gap-2"
          >
            <CalendarCheck size={18} /> Book Now
          </a>
          <p className="mt-4 text-sm text-gray-500">© 2025 Taniti Tourism Board. All rights reserved.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-2">Explore</h3>
          <ul className="space-y-1">
            <li><a href="#lodging" className="link link-hover">Lodging</a></li>
            <li><a href="#restaurants" className="link link-hover">Restaurants</a></li>
            <li><a href="#tours" className="link link-hover">Tours</a></li>
            <li><a href="#transport" className="link link-hover">Transportation</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-2">Contact Us</h3>
          <p>Email: <a href="mailto:info@visittaniti.com" className="link">info@visittaniti.com</a></p>
          <p>Phone: +1 (800) 555-TANI</p>
          <p>
            Address: Yellow Leaf Bay Visitor Center,<br />
            125 Seaside Boulevard,<br />
            Taniti City, Taniti Island 98765
          </p>
        </div>

      </div>
    </footer>
  );
}
