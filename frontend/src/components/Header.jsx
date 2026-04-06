import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-xl font-semibold text-indigo-600 cursor-pointer">
          <Link to="/" >AuthApp</Link>
        </h1>
        <nav className="flex items-center gap-6">
          <Link
            to="/"
            className="text-gray-600 hover:text-indigo-600 transition"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="text-gray-600 hover:text-indigo-600 transition"
          >
            About
          </Link>

          <Link
            to="/login"
            className="text-gray-600 hover:text-indigo-600 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="text-gray-600 hover:text-indigo-600 transition"
          >
            Register
          </Link>
          <FaUserCircle className="text-2xl text-gray-600 cursor-pointer hover:text-indigo-600 transition" />
        </nav>
      </div>
    </header>
  );
}

export default Header;
