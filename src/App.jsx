import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import Book from "./pages/Book";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, disable: "mobile" });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
      </Routes>
    </BrowserRouter>
  );
}
