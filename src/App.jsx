import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
