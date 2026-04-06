import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";
function Login() {
  // const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      {/* {isOpen && ( */}
      <div className="relative bg-white p-10 rounded-2xl shadow-lg w-105 border border-gray-200">
 
        <IoClose
          onClick={() => navigate("/")}
          className="absolute top-4 right-4 text-2xl text-gray-500 cursor-pointer hover:text-gray-700"
        />

        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">
          Welcome Back
        </h2>

        <p className="text-center text-gray-500 mb-6 text-sm">
          Login to your account
        </p>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-200 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            className="w-full border border-gray-200 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        
        <button className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition">
          Login
        </button>

        <p className="text-center text-sm text-gray-500 mt-4">
          Don't have an account?
          <Link to="/register" className="text-indigo-500 font-medium ml-1">
            Register
          </Link>
        </p>
      </div>
      {/* )} */}
    </div>
  );
}

export default Login;
