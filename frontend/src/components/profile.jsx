import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const firstLetter = localStorage.getItem("userName");
  const hanleLogout = async () => {
    try {
      await axios.get("http://localhost:3000/api/auth/logout");
      localStorage.removeItem("userName");
      localStorage.removeItem("userData");
      navigate("/");
    } catch (error) {
      console.log("Logout error: ", error.message);
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await axios.get("http://localhost:3000/api/auth/profile", {
        withCredentials: true,
      });

      console.log(res.data);
      setUser(res.data.user);
    };

    fetchProfile();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-start py-12">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-sm border border-gray-200 p-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-full bg-indigo-500 text-white flex items-center justify-center text-2xl font-semibold">
            {firstLetter}
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              User Profile
            </h2>
            <p className="text-gray-500 text-sm">
              Manage your account information
            </p>
          </div>
        </div>

       
        <div className="space-y-6">
          <div className="border-b pb-4">
            <p className="text-sm text-gray-500">Full Name</p>
            <p className="text-gray-800 font-medium">{user?.name}</p>
          </div>

          <div className="border-b pb-4">
            <p className="text-sm text-gray-500">Email Address</p>
            <p className="text-gray-800 font-medium">{user?.email}</p>
          </div>

          <div className="border-b pb-4">
            <p className="text-sm text-gray-500">Account Created</p>
            {new Date(user?.createdAt).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </div>

          <div className="border-b pb-4">
            <p className="text-sm text-gray-500">Last Updated</p>
            <p className="text-gray-800 font-medium">
              {new Date(user?.updatedAt).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
        </div>

  
        <div className="flex gap-4 mt-8">
          <Link
            to="/edit-profile"
            className="bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-600 transition"
          >
            Edit Profile
          </Link>

          <button
            onClick={hanleLogout}
            className="border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-100 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
