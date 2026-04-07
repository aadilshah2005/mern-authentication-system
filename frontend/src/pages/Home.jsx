import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to AuthApp
        </h1>

        <p className="text-gray-600 max-w-xl mx-auto">
          A simple and secure authentication system where users can create an
          account, log in, and manage their profile safely. Built using modern
          web technologies.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/login"
            className="bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-600 transition duration-300 transform hover:scale-105 hover:shadow-md"
          >
            Get Started
          </Link>

          <Link
            to="/learn-more"
            className="border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105 hover:shadow-sm"
          >
            Learn More
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <Link to="/login">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 transition duration-300 transform hover:-translate-y-1 hover:shadow-md">
            <h3 className="text-lg font-semibold mb-2">Secure Login</h3>

            <p className="text-gray-600 text-sm">
              Users can securely log into their accounts with authentication and
              protected routes.
            </p>
          </div>
        </Link>

        <Link to="/register">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 transition duration-300 transform hover:-translate-y-1 hover:shadow-md">
            <h3 className="text-lg font-semibold mb-2">Easy Registration</h3>

            <p className="text-gray-600 text-sm">
              New users can quickly create an account and start using the
              application.
            </p>
          </div>
        </Link>

        <Link to="/profile">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 transition duration-300 transform hover:-translate-y-1 hover:shadow-md">
            <h3 className="text-lg font-semibold mb-2">User Profile</h3>

            <p className="text-gray-600 text-sm">
              Manage your profile and access your account information securely
              anytime.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
