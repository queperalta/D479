import React from 'react';
import logo from '../assets/logo.svg';

export default function Header() {
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
        <a href="#lodging" className="px-3 py-2 hover:text-primary font-medium">Lodging</a>
        <a href="#restaurants" className="px-3 py-2 hover:text-primary font-medium">Restaurants</a>
        <a href="#tours" className="px-3 py-2 hover:text-primary font-medium">Tours</a>
        <a href="#transport" className="px-3 py-2 hover:text-primary font-medium">Transport</a>
        <a href="#contact" className="px-3 py-2 hover:text-primary font-medium">Contact Us</a>
      </div>

      <div className="dropdown dropdown-end md:hidden">
        <label tabIndex={0} className="btn btn-ghost">
          ☰
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white text-gray-800 rounded-box w-52 z-50"
        >
          <li><a href="#lodging">Lodging</a></li>
          <li><a href="#restaurants">Restaurants</a></li>
          <li><a href="#tours">Tours</a></li>
          <li><a href="#transport">Transport</a></li>
        </ul>
      </div>
    </div>
  );
}
