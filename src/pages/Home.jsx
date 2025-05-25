import { Link } from 'react-router-dom';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection.jsx';
import welcomeToTaniti from '../assets/welcome_to_taniti.png';
import ScrollToTopButton from '../components/ScrollToTopButton';
import Footer from '../components/Footer';


export default function Home() {

  return (
    <div className="bg-white min-h-screen">
      {/* Navbar */}
      <Header />
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll md:overflow-visible md:snap-none">
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
              <a href="#tours" className="btn btn-outline mt-2 ml-2">View Top Attractions</a>
            </div>
          </div>
        </section>


        {/* Lodging Section */}
        <section
          id="lodging"
          className="min-h-screen py-20 px-6 bg-white text-gray-800 flex items-center"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <h2 className="text-3xl font-bold mb-6 text-center">Lodging</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card bg-white shadow p-4">Affordable Hostels & BnBs</div>
              <div className="card bg-white shadow p-4">Family-Owned Hotels</div>
              <div className="card bg-white shadow p-4">Luxury 4-Star Resort</div>
            </div>
          </div>
        </section>

        {/* Restaurants Section */}
        <section
          id="restaurants"
          className="min-h-screen py-20 px-6 bg-white text-gray-800 flex items-center"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <h2 className="text-3xl font-bold mb-6 text-center">Restaurants</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card bg-white shadow p-4">Local Fish & Rice</div>
              <div className="card bg-white shadow p-4">American Cuisine</div>
              <div className="card bg-white shadow p-4">Pan-Asian Flavors</div>
            </div>
          </div>
        </section>

        {/* Tours Section */}
        <section
          id="tours"
          className="min-h-screen py-20 px-6 bg-white text-gray-800 flex items-center"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <h2 className="text-3xl font-bold mb-6 text-center">Tours & Adventures</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card bg-white shadow p-4">Rainforest Hiking</div>
              <div className="card bg-white shadow p-4">Volcano Sightseeing</div>
              <div className="card bg-white shadow p-4">Snorkeling & Ziplining</div>
            </div>
          </div>
        </section>

        {/* Transport Section */}
        <section
          id="transport"
          className="min-h-screen py-20 px-6 bg-white text-gray-800 flex items-center"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <h2 className="text-3xl font-bold mb-6 text-center">Transportation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card bg-white shadow p-4">Public Buses</div>
              <div className="card bg-white shadow p-4">Taxis & Rental Cars</div>
              <div className="card bg-white shadow p-4">Bike Rentals & Walking</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>

      {/* Scroll to Top Button */}
      {/* This button will be visible when the user scrolls down the page */}
      <ScrollToTopButton />
    </div>
  );
}
