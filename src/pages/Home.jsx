import { Link } from 'react-router-dom';
  import { useEffect } from 'react';
import Header from '../components/Header';
import welcomeToTaniti from '../assets/welcome_to_taniti.png';
import HeroSection from '../components/HeroSection.jsx';
import LodgingSection from '../components/LodgingSection.jsx';
import RestaurantSection from '../components/RestaurantSection.jsx';
import ToursSection from '../components/ToursSection.jsx';
import TransportationSection from '../components/TransportationSection.jsx';
import ScrollToTopButton from '../components/ScrollToTopButton';
import Footer from '../components/Footer';


export default function Home() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.substring(1);
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100); // delay for content to render
      }
    }
  }, []);
  
  return (
    <div className="bg-white min-h-screen">
      {/* Navbar */}
      <Header />
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory md:snap-none md:overflow-visible">
        {/* Hero Section */}
        <HeroSection />

        {/* Welcome Section */}
        <section
          id="welcome"
          className="min-h-screen py-20 px-6 bg-white text-gray-800 flex items-center"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="w-full">
              <img
                src={welcomeToTaniti}
                alt="Scenic Taniti beach and volcano"
                className="rounded-xl shadow-lg w-full object-cover"
              />
              <p className="text-sm mt-2 text-gray-500">A view from Yellow Leaf Bay, Taniti Island</p>
            </div>
            {/* Text */}
            <div className="text-left">
              <h2 className="text-4xl font-bold mb-4">Welcome to Taniti</h2>
              <p className="text-lg leading-relaxed">
                Escape the ordinary and reconnect with nature on the island of Taniti — where eco-adventure meets cultural authenticity. Hike rainforest trails to hidden waterfalls, snorkel vibrant reefs teeming with marine life, or witness the raw power of our active volcano. Support local businesses, explore native architecture, and savor fresh island cuisine — all while treading lightly and traveling sustainably.
              </p>
              <br/>
              <a href="#lodging" className="btn btn-outline mt-2 ml-2">Stay in Style</a>
              <a href="#tours" className="btn btn-outline mt-2 ml-2">Go Taniti Wild</a>
              <a href="#restaurants" className="btn btn-outline mt-2 ml-2">Savor the Island</a>
            </div>
          </div>
        </section>


        {/* Lodging Section */}
        <LodgingSection />

        {/* Restaurants Section */}
        <RestaurantSection />

        {/* Tours Section */}
        <ToursSection />

        {/* Transport Section */}
        <TransportationSection />

        {/* Footer */}
        <Footer />
      </div>

      {/* Scroll to Top Button */}
      {/* This button will be visible when the user scrolls down the page */}
      <ScrollToTopButton />
    </div>
  );
}
