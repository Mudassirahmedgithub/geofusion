import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Import pages from src/pages
import Home from "./pages/Home";
import About from "./pages/About";
import LiveMonitoring from "./pages/LiveMonitoring";
import Evacuation from "./pages/Evacuation";
import Collaborate from "./pages/Collaborate";
import Contact from "./pages/Contact";

// Navbar
const Navbar = () => (
  <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
    <h1 className="text-2xl font-bold">GeoFusion</h1>
    <div className="flex gap-6">
      <Link to="/" className="hover:text-green-400">Home</Link>
      <Link to="/about" className="hover:text-green-400">About</Link>
      <Link to="/live-monitoring" className="hover:text-green-400">Live Monitoring</Link>
      <Link to="/evacuation" className="hover:text-green-400">Evacuation Policies</Link>
      <Link to="/collaborate" className="hover:text-green-400">Collaborate</Link>
      <Link to="/contact" className="hover:text-green-400">Contact</Link>
    </div>
  </nav>
);

// Main App
export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/live-monitoring" element={<LiveMonitoring />} />
        <Route path="/evacuation" element={<Evacuation />} />
        <Route path="/collaborate" element={<Collaborate />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer className="py-6 bg-gray-800 text-white text-center">
        &copy; {new Date().getFullYear()} GeoFusion. All rights reserved.
      </footer>
    </Router>
  );
}
