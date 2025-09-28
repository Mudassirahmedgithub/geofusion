import React from "react";
import { UsersIcon, RocketLaunchIcon, ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/solid";

export default function Collaborate() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-blue-900 mb-4">
            Collaborate with GeoFusion
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Join us in advancing early detection and community resilience against landslides. 
            Partner, contribute, or join our team to make an impact!
          </p>
        </div>

        {/* Collaboration Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Become a Partner */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition flex flex-col items-center text-center">
            <RocketLaunchIcon className="h-10 w-10 text-green-500 mb-3" />
            <h2 className="text-xl font-bold mb-2">Become a Partner</h2>
            <p className="text-gray-600 mb-4">Work with GeoFusion for technical research, field deployment, or data exchange.</p>
            <a 
              href="#partnership-form" 
              className="bg-green-600 text-white py-2 px-4 rounded font-semibold shadow hover:bg-green-700 transition"
            >Contact Us</a>
          </div>
          {/* Volunteer */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition flex flex-col items-center text-center">
            <UsersIcon className="h-10 w-10 text-blue-500 mb-3" />
            <h2 className="text-xl font-bold mb-2">Volunteer</h2>
            <p className="text-gray-600 mb-4">Join the GeoFusion community, help with outreach, training, or event organization.</p>
            <a 
              href="#volunteer-form" 
              className="bg-blue-600 text-white py-2 px-4 rounded font-semibold shadow hover:bg-blue-700 transition"
            >Sign Up</a>
          </div>
          {/* Suggest Ideas */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition flex flex-col items-center text-center">
            <ChatBubbleBottomCenterTextIcon className="h-10 w-10 text-purple-500 mb-3" />
            <h2 className="text-xl font-bold mb-2">Suggest Ideas</h2>
            <p className="text-gray-600 mb-4">Propose new features, partnerships, or improvements to our platform.</p>
            <a 
              href="#suggestion-form" 
              className="bg-purple-600 text-white py-2 px-4 rounded font-semibold shadow hover:bg-purple-700 transition"
            >Submit Idea</a>
          </div>
        </div>

        {/* Example Team Showcase */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-gray-800 mb-5">Meet Our Team</h2>
          <div className="flex flex-wrap gap-6 justify-center">
            <div className="bg-white rounded-lg shadow p-4 w-56 flex flex-col items-center">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Team member" className="w-16 h-16 rounded-full mb-2" />
              <h3 className="font-bold text-gray-700">Dr. Arun Singh</h3>
              <p className="text-sm text-gray-500">Lead Geologist</p>
            </div>
            <div className="bg-white rounded-lg shadow p-4 w-56 flex flex-col items-center">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Team member" className="w-16 h-16 rounded-full mb-2" />
              <h3 className="font-bold text-gray-700">Priya Desai</h3>
              <p className="text-sm text-gray-500">GIS Specialist</p>
            </div>
            <div className="bg-white rounded-lg shadow p-4 w-56 flex flex-col items-center">
              <img src="https://randomuser.me/api/portraits/men/55.jpg" alt="Team member" className="w-16 h-16 rounded-full mb-2" />
              <h3 className="font-bold text-gray-700">Rahul Patel</h3>
              <p className="text-sm text-gray-500">Field Coordinator</p>
            </div>
          </div>
        </div>

        {/* Simple Partnership Form */}
        <form id="partnership-form" className="bg-white shadow-md rounded-xl p-8 max-w-lg mx-auto mb-8 space-y-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Partnership Inquiry</h2>
          <input type="text" placeholder="Your Name" name="name" className="w-full border p-2 rounded" required />
          <input type="email" placeholder="Your Email" name="email" className="w-full border p-2 rounded" required />
          <textarea placeholder="Tell us how you'd like to collaborate..." name="message" className="w-full border p-2 rounded h-24" required />
          <button type="submit" className="bg-green-600 text-white py-2 px-6 rounded font-semibold shadow hover:bg-green-700 transition">
            Send Inquiry
          </button>
        </form>
      </div>
    </section>
  );
}
