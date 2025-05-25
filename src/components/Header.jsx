import React from 'react';
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.svg';
import {
  Home,
  Utensils,
  MapPinned,
  Bus,
  Phone,
  CalendarCheck,
} from 'lucide-react';

export default function Header({ hideBookNow = false }) {
  const navigate = useNavigate();

  return (
    <div className="navbar bg-white/80 backdrop-blur-md text-gray-800 shadow-md sticky top-0 z-50">
      <div className="flex-1">
        <div className="inline-flex items-center gap-2">
          <a href="/">
            <img src={logo} alt="Taniti Logo" className="h-8 w-auto" />
          </a>
          <a href="/" className="text-xl font-semibold text-gray-800">
            Visit Taniti
          </a>
        </div>
      </div>

      <div className="flex-none hidden md:flex gap-2">
        <a href="/#lodging" className="px-3 py-2 hover:text-primary font-medium">Lodging</a>
        <a href="/#restaurants" className="px-3 py-2 hover:text-primary font-medium">Restaurants</a>
        <a href="/#tours" className="px-3 py-2 hover:text-primary font-medium">Tours</a>
        <a href="/#transport" className="px-3 py-2 hover:text-primary font-medium">Transport</a>
        <a href="/#contact" className="px-3 py-2 hover:text-primary font-medium">Contact Us</a>
        {!hideBookNow && (
          <a
            onClick={() => navigate("/book")}
            className="btn btn-primary ml-4 text-white px-5"
          >
            Book Now
          </a>
        )}
      </div>

      <div className="dropdown dropdown-end md:hidden">
        <label tabIndex={0} className="btn btn-ghost text-lg">
          ☰
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white text-gray-800 rounded-box w-60 z-50 space-y-1 text-lg"
        >
          <li>
            <a href="/#lodging" className="flex items-center gap-3 text-lg">
              <Home size={18} /> Lodging
            </a>
          </li>
          <li>
            <a href="/#restaurants" className="flex items-center gap-3 text-lg">
              <Utensils size={18} /> Restaurants
            </a>
          </li>
          <li>
            <a href="/#tours" className="flex items-center gap-3 text-lg">
              <MapPinned size={18} /> Tours
            </a>
          </li>
          <li>
            <a href="/#transport" className="flex items-center gap-3 text-lg">
              <Bus size={18} /> Transport
            </a>
          </li>
          <li>
            <a href="/#contact" className="flex items-center gap-3 text-lg">
              <Phone size={18} /> Contact Us
            </a>
          </li>
          {!hideBookNow && (
            <li className="pt-2">
              <a
                onClick={() => navigate("/book")}
                className="btn btn-primary w-full text-white text-lg flex justify-center items-center gap-2"
              >
                <CalendarCheck size={18} /> Book Now
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
