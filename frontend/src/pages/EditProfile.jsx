import React from "react";
import { Link } from "react-router-dom";

function EditProfile() {
  
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-start py-12">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-sm border border-gray-200 p-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-full bg-indigo-500 text-white flex items-center justify-center text-2xl font-semibold">
            A
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Edit Profile
            </h2>
            <p className="text-gray-500 text-sm">
              Update your account information
            </p>
          </div>
        </div>

        
        <form className="space-y-6">
        
          <div>
            <label className="text-sm text-gray-500 block mb-1">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>


          <div>
            <label className="text-sm text-gray-500 block mb-1">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-600 transition"
            >
              Update Profile
            </button>

            <Link
              to="/profile"
              type="button"
              className="border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-100 transition"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
