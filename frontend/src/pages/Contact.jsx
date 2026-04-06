import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhone, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";

function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>

        <p className="text-gray-600 max-w-xl mx-auto">
          If you have any questions or feedback about AuthApp, feel free to
          contact us. We would love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Send a Message</h2>

          <div className="mb-4">
            <label className="block text-sm text-gray-700 mb-1">Name</label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-200 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-700 mb-1">Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-200 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm text-gray-700 mb-1">Message</label>

            <textarea
              rows="4"
              placeholder="Write your message"
              className="w-full border border-gray-200 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <button className="bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-600 transition">
            Send Message
          </button>
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>

          <p className="text-gray-600 mb-6">
            This authentication project demonstrates user login, registration,
            and secure authentication using modern web technologies.
          </p>

          <div className="space-y-4 text-gray-600">
            <div className="flex items-center gap-3">
              <MdEmail className="text-indigo-500 text-xl" />
              <span>asadilshah919@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <FaPhone className="text-indigo-500 text-lg" />
              <span>8881013340</span>
            </div>

            <div className="flex items-center gap-3">
              <FaGlobe className="text-indigo-500 text-lg" />
              <span>www.authapp.com</span>
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-indigo-500 text-lg" />
              <span>Mumbai, India</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
