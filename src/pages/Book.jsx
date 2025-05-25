import React, { useState } from "react";
import Header from "../components/Header";
import bookBackground from "../assets/book.png";

export default function Book() {
  const [step, setStep] = useState("start");
  const [formData, setFormData] = useState({
    selection: [],
    lodging: {},
    tours: {},
    transport: {},
    contact: {},
  });

  const handleSelection = (option) => {
    const updated = formData.selection.includes(option)
      ? formData.selection.filter((item) => item !== option)
      : [...formData.selection, option];
    setFormData({ ...formData, selection: updated });
  };

  const handleChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const renderStep = () => {
    switch (step) {
      case "start":
        return (
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">Plan Your Taniti Adventure</h2>
            <p className="mb-4 text-white text-lg font-bold">What would you like to book?</p>
            <div className="flex flex-col gap-4 mb-6">
              {[
                { id: "lodging", label: "Lodging" },
                { id: "tours", label: "Adventures & Tours" },
                { id: "transport", label: "Transportation" },
              ].map((opt) => {
                const isActive = formData.selection.includes(opt.id);
                return (
                  <button
                    key={opt.id}
                    className={`px-6 py-4 rounded-lg text-lg font-semibold shadow ${
                      isActive
                        ? "bg-primary text-white"
                        : "bg-white text-gray-800 border border-gray-300 hover:bg-gray-100"
                    }`}
                    onClick={() => handleSelection(opt.id)}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
            <button className="btn btn-accent" onClick={() => setStep("form")}>Continue</button>
          </div>
        );

      case "form":
        return (
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Booking Details</h2>

            {formData.selection.includes("lodging") && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-700">Lodging</h3>
                <input
                  type="date"
                  className="input input-bordered w-full mb-2 text-gray-800"
                  placeholder="Check-in"
                  onChange={(e) => handleChange("lodging", "checkin", e.target.value)}
                />
                <input
                  type="date"
                  className="input input-bordered w-full text-gray-800"
                  placeholder="Check-out"
                  onChange={(e) => handleChange("lodging", "checkout", e.target.value)}
                />
              </div>
            )}

            {formData.selection.includes("tours") && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-700">Tours</h3>
                <textarea
                  className="textarea textarea-bordered w-full text-gray-800"
                  placeholder="Which tours are you interested in?"
                  onChange={(e) => handleChange("tours", "notes", e.target.value)}
                ></textarea>
              </div>
            )}

            {formData.selection.includes("transport") && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-700">Transportation</h3>
                <select
                  className="select select-bordered w-full text-gray-800"
                  onChange={(e) => handleChange("transport", "type", e.target.value)}
                >
                  <option value="">Select Option</option>
                  <option value="taxi">Taxi from airport</option>
                  <option value="rental">Car Rental</option>
                  <option value="bike">Bike Rental</option>
                </select>
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-700">Contact Info</h3>
              <input
                type="text"
                className="input input-bordered w-full mb-2 bg-white text-gray-800"
                placeholder="Full Name"
                onChange={(e) => handleChange("contact", "name", e.target.value)}
              />
              <input
                type="email"
                className="input input-bordered w-full bg-white text-gray-800"
                placeholder="Email"
                onChange={(e) => handleChange("contact", "email", e.target.value)}
              />
            </div>

            <div className="text-center">
              <button className="btn btn-primary text-white">Submit Booking</button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <Header hideBookNow />
      <div
        className="min-h-[calc(100vh-4rem)] bg-cover bg-center bg-no-repeat px-4 py-10 text-gray-800"
        style={{ backgroundImage: `url(${bookBackground})` }}
      >
        <div>
          {renderStep()}
        </div>
      </div>
    </>
  );
}