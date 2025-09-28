import React from "react";
import {
  ExclamationTriangleIcon,
  ShieldCheckIcon,
  ArrowPathRoundedSquareIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";

export default function Evacuation() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
            Evacuation Guidelines
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            GeoFusion provides early warnings and safety practices to help
            communities take quick action during landslides. Follow these steps
            to ensure maximum safety.
          </p>
        </div>

        {/* Steps Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Before */}
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
            <ShieldCheckIcon className="h-12 w-12 text-blue-600 mb-4" />
            <h2 className="text-2xl font-semibold mb-3">Before a Landslide</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Identify safe evacuation routes and shelters nearby.</li>
              <li>
                Prepare emergency kits: water, food, flashlight, first aid.
              </li>
              <li>Stay updated with alerts from GeoFusion & authorities.</li>
            </ul>
          </div>

          {/* During */}
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
            <ExclamationTriangleIcon className="h-12 w-12 text-red-600 mb-4" />
            <h2 className="text-2xl font-semibold mb-3">During a Landslide</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Evacuate immediately if warnings are issued.</li>
              <li>Avoid rivers, streams, and unstable slopes.</li>
              <li>Follow GeoFusion alerts & official instructions.</li>
            </ul>
          </div>

          {/* After */}
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
            <ArrowPathRoundedSquareIcon className="h-12 w-12 text-green-600 mb-4" />
            <h2 className="text-2xl font-semibold mb-3">After a Landslide</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Check for injuries & provide first aid if required.</li>
              <li>Report hazards/damages to authorities quickly.</li>
              <li>Stay away until the area is officially safe.</li>
            </ul>
          </div>
        </div>

        {/* Quick Action Panel */}
        <div className="mt-16 bg-red-50 border border-red-300 rounded-xl p-6 text-center">
          <h2 className="text-3xl font-bold text-red-700 mb-4">
            🚨 Quick Action Panel
          </h2>
          <p className="text-gray-700 mb-6">
            In an emergency, contact helplines immediately or locate the nearest
            shelter.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href="tel:108"
              className="flex items-center bg-red-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-red-700 transition"
            >
              <PhoneIcon className="h-5 w-5 mr-2" /> Emergency Helpline (108)
            </a>
            <a
              href="/livemonitoring"
              className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition"
            >
              🌍 Live Monitoring
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
