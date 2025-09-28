import React, { useState } from "react";
import { EnvelopeIcon, PhoneIcon, MapPinIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000); // Message visible for 5s
    // Here, add actual form submission logic if needed
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 p-8 flex items-center justify-center">
      <div className="w-full max-w-5xl bg-white shadow-xl rounded-2xl p-10 flex flex-col md:flex-row gap-10">
        {/* Contact Info Sidebar */}
        <div className="md:w-1/3 space-y-6 border-b md:border-b-0 md:border-r border-gray-200 pr-0 md:pr-8 pb-6 md:pb-0">
          <h2 className="text-2xl font-bold text-blue-800 mb-1">Contact Details</h2>
          <div className="flex items-center gap-2 text-gray-700">
            <EnvelopeIcon className="h-6 w-6 text-blue-500" />
            <span className="font-medium">contact@geofusion.org</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <PhoneIcon className="h-6 w-6 text-blue-500" />
            <span className="font-medium">+91 90000 12345</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <MapPinIcon className="h-6 w-6 text-blue-500" />
            <span className="font-medium">Innovation Cove, Bengaluru, India</span>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700">Office Hours</h3>
            <ul className="text-gray-600 ml-2">
              <li>Mon–Fri: 9:00 AM – 6:00 PM</li>
              <li>Sat: 10:00 AM – 2:00 PM</li>
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:w-2/3 pl-0 md:pl-8 flex flex-col justify-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Reach Out to GeoFusion
            </h1>
            <p className="text-gray-600 mb-6">
              Questions, suggestions, or collaboration ideas? Fill out the form below and our team will respond within one business day. You can also email or call us directly.
            </p>
          </div>
          {sent ? (
            <div className="flex items-center gap-3 p-5 bg-green-50 border border-green-300 rounded-lg shadow mb-6 animate-fade-in">
              <CheckCircleIcon className="h-8 w-8 text-green-600" />
              <span className="text-green-700 font-medium text-lg">
                Thank you for reaching out! Your message has been received.
              </span>
            </div>
          ) : null}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex gap-4 flex-col md:flex-row">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <textarea
              placeholder="Your Message"
              className="border border-gray-300 rounded px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-700 text-white font-semibold py-2 px-6 rounded hover:bg-blue-800 transition"
            >
              Send Message
            </button>
          </form>
          {/* Optional: Additional Note */}
          <div className="mt-5 text-sm text-gray-500">
            We value your privacy. Your email and message will not be shared without consent.
          </div>
        </div>
      </div>
    </section>
  );
}
