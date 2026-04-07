import React from "react";

function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About AuthApp</h1>

        <p className="text-gray-600 max-w-2xl mx-auto">
          AuthApp is a simple authentication system that allows users to
          register, log in, and manage their accounts securely. This project
          demonstrates how authentication works in modern web applications.
        </p>
      </div>

      
      <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm mb-10 transition duration-300 transform hover:-translate-y-1 hover:shadow-md">
        <h2 className="text-2xl font-semibold mb-3">Project Purpose</h2>

        <p className="text-gray-600">
          The purpose of this project is to demonstrate a complete user
          authentication flow including user registration, login, logout, and
          protected routes. It is designed as a learning project for
          understanding authentication systems in modern web development.
        </p>
      </div>

      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm transition duration-300 transform hover:-translate-y-1 hover:shadow-md">
          <h3 className="font-semibold mb-2">Frontend</h3>
          <p className="text-gray-600 text-sm">
            React.js and Tailwind CSS are used to build a modern and responsive
            user interface.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm transition duration-300 transform hover:-translate-y-1 hover:shadow-md">
          <h3 className="font-semibold mb-2">Backend</h3>
          <p className="text-gray-600 text-sm">
            Node.js and Express.js handle the authentication APIs including
            login, registration, and user profile.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm transition duration-300 transform hover:-translate-y-1 hover:shadow-md">
          <h3 className="font-semibold mb-2">Database</h3>
          <p className="text-gray-600 text-sm">
            MongoDB is used to store user information securely and manage
            authentication data.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
