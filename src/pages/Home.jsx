import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-green-700 to-blue-800 text-white overflow-hidden">
      
      {/* Background visual effect */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-[url('/images/landslide-bg.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Header */}
      <header className="container mx-auto flex flex-col items-center py-10 px-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          GeoFusion
        </h1>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto flex flex-col items-center justify-center text-center mt-20 space-y-8 px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold leading-snug">
          AI-Powered Landslide Prediction & Monitoring System
        </h2>
        <p className="max-w-2xl text-lg md:text-xl text-gray-200">
          Real-time sensor fusion from rainfall, seismic, soil moisture, and
          piezometer data to predict landslides before they happen. Protect
          lives and infrastructure with intelligent alerts and monitoring.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <Link
            to="/live-monitoring"
            className="px-8 py-3 bg-red-600 hover:bg-red-500 rounded-2xl font-bold text-lg transition"
          >
            Live Monitoring
          </Link>
          <Link
            to="/evacuation"
            className="px-8 py-3 bg-yellow-500 hover:bg-yellow-400 rounded-2xl font-bold text-lg text-black transition"
          >
            Evacuation Plans
          </Link>
        </div>

        {/* Feature Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md hover:bg-white/20 transition">
            <h3 className="text-xl font-bold mb-2">Sensor Fusion</h3>
            <p>Integrates multiple sensor types for accurate landslide prediction.</p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md hover:bg-white/20 transition">
            <h3 className="text-xl font-bold mb-2">AI & Machine Learning</h3>
            <p>Predicts risk zones using advanced AI models trained on real data.</p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md hover:bg-white/20 transition">
            <h3 className="text-xl font-bold mb-2">Real-Time Alerts</h3>
            <p>Immediate notifications to authorities and citizens for safety.</p>
          </div>
        </div>
      </main>

      <footer className="mt-20 py-10 text-center text-gray-300">
        &copy; 2025 GeoFusion. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
