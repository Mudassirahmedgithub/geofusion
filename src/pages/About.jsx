import React from "react";

export default function About() {
  return (
    <div className="p-10 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-5xl font-bold text-center mb-10 text-green-600">
          About GeoFusion
        </h1>

        {/* Introduction */}
        <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
          <strong>GeoFusion</strong> is an AI-powered landslide prediction and 
          response platform designed to transform disaster management in India. 
          By fusing IoT sensors, satellite imagery, and machine learning, 
          GeoFusion provides early warnings, accurate predictions, and 
          real-time decision support for communities and authorities.
        </p>

        {/* Problem Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            The Problem
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Nearly <strong>12% of India’s landmass</strong> is prone to landslides, 
            directly affecting over 15 states and union territories every year. 
            Current monitoring systems are fragmented and reactive, often relying 
            on single data sources like rainfall records. This results in delayed 
            or false alerts, poor evacuation readiness, and loss of trust in 
            disaster warnings.
          </p>
        </section>

        {/* Solution Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            Our Solution
          </h2>
          <p className="text-gray-700 leading-relaxed">
            GeoFusion introduces a fusion-based approach that integrates{" "}
            <strong>soil moisture sensors, rain gauges, piezometers, seismic
            activity monitors, satellite data, and historical records</strong> into 
            one platform. Our deep learning models classify landslides as 
            rainfall-induced, earthquake-induced, or hybrid, enabling smarter 
            responses and reducing false positives.
          </p>
        </section>

        {/* Key Differentiators */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            Why GeoFusion Stands Out
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Data Fusion:</strong> Multi-source integration for reliability.</li>
            <li><strong>Hybrid Edge–Cloud:</strong> Local devices + cloud analytics ensure resilience.</li>
            <li><strong>Dual Response:</strong> Dashboards for authorities & public alerts via SMS, IoT sirens, and drones.</li>
            <li><strong>Risk Maps:</strong> Real-time heatmaps and severity levels for planning.</li>
            <li><strong>Scalability:</strong> Extendable to floods, mining collapses, and earthquakes.</li>
          </ul>
        </section>

        {/* Vision Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            Our Vision
          </h2>
          <p className="text-gray-700 leading-relaxed">
            With its blend of <strong>AI, IoT, and GIS technologies</strong>, GeoFusion 
            shifts India’s disaster management from reactive recovery to proactive 
            prevention. Our vision is to safeguard lives, reduce economic losses, 
            and set the foundation for a national disaster resilience platform 
            that can serve communities worldwide.
          </p>
        </section>
      </div>
    </div>
  );
}
