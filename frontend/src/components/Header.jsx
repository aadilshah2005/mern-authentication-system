import axios from "axios";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const userLetter = localStorage.getItem("userName");
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:3000/api/auth/logout");

      localStorage.removeItem("userName");
      localStorage.removeItem("userData");
      navigate("/");
    } catch (error) {
      console.log("Logout error:", error.message);
    }
  };
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-xl font-semibold text-indigo-600 cursor-pointer">
          <Link to="/">AuthApp</Link>
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
          <div className="relative group">
            {userLetter ? (
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-500 text-white font-semibold cursor-pointer">
                {userLetter}
              </div>
            ) : (
              <FaUserCircle className="text-2xl text-gray-600 cursor-pointer hover:text-indigo-600 transition" />
            )}

            <div
              className="absolute right-0 top-full mt-2 w-36 bg-white border border-gray-200 rounded-lg shadow-md 
              opacity-0 invisible group-hover:opacity-100 group-hover:visible 
              transition-all duration-300"
            >
              <ul className="py-2 text-sm text-gray-700">
                <Link to="/profile">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Profile
                  </li>
                </Link>

                <li
                  onClick={handleLogout}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500"
                >
                  Logout
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
