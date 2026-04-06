import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">

      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

        <div>
          <h2 className="text-lg font-semibold text-indigo-600 mb-2">
            AuthApp
          </h2>

          <p className="text-sm text-gray-500">
            A simple authentication system where users can register,
            login and manage their accounts securely.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-3">
            Navigation
          </h3>

          <div className="flex flex-col gap-2 text-sm text-gray-500">

            <Link
              to="/"
              className="hover:text-indigo-600 transition"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="hover:text-indigo-600 transition"
            >
              About
            </Link>

            <Link
              to="/login"
              className="hover:text-indigo-600 transition"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="hover:text-indigo-600 transition"
            >
              Register
            </Link>

          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-3">
            Contact
          </h3>

          <div className="flex flex-col gap-2 text-sm text-gray-500">

            <p>Email: support@authapp.com</p>
            <p>Location: India</p>

            <Link
              to="/contact"
              className="hover:text-indigo-600 transition"
            >
              Contact Page
            </Link>

          </div>
        </div>

      </div>


      <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-500">
        © 2026 AuthApp. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;