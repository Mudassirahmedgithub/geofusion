// src/pages/LiveMonitoring.jsx

import React from 'react';

export default function LiveMonitoring() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Live Monitoring Dashboard</h1>
      <p className="text-lg text-gray-600 text-center max-w-xl">
        Monitor real-time sensor data from GeoFusion’s early landslide detection system.
        This includes rainfall, soil moisture, seismic activity, and other critical parameters.
      </p>

      <div className="mt-8 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Placeholder cards for live sensor data */}
        <div className="bg-white shadow-md rounded p-6">
          <h2 className="text-2xl font-semibold mb-2">Rainfall Sensor</h2>
          <p className="text-gray-700">Current rainfall: <span className="font-bold">-- mm</span></p>
        </div>

        <div className="bg-white shadow-md rounded p-6">
          <h2 className="text-2xl font-semibold mb-2">Soil Moisture Sensor</h2>
          <p className="text-gray-700">Current soil moisture: <span className="font-bold">-- %</span></p>
        </div>

        <div className="bg-white shadow-md rounded p-6">
          <h2 className="text-2xl font-semibold mb-2">Seismic Sensor</h2>
          <p className="text-gray-700">Current seismic activity: <span className="font-bold">-- Richter</span></p>
        </div>

        <div className="bg-white shadow-md rounded p-6">
          <h2 className="text-2xl font-semibold mb-2">Piezometer</h2>
          <p className="text-gray-700">Groundwater pressure: <span className="font-bold">-- kPa</span></p>
        </div>
      </div>

      <div className="mt-8 text-gray-400 italic">
        Real-time graphs and alerts coming soon.
      </div>
    </section>
  );
}
