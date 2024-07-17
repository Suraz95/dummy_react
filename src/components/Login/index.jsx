import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async () => {
      axios
        .post("http://localhost:8000/login", { email, password })
        .then((result) => {
          console.log(result);
          if (result.data.token) {
            const decoded = jwtDecode(result.data.token);
            sessionStorage.setItem("token", result.data.token);
            console.log(decoded.email);
            if (decoded.email.includes("@numetry")) {
              console.log("dashboard");
              navigate("/admin");
            } else {
              navigate("/");
            }
          } else {
            setError("Login failed. Please check your credentials.");
          }
        })
        .catch((err) => {
          console.log(err);
          setError(
            "An error occurred while logging in. Please try again later."
          );
        });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center mt-40">
      <img
        src="https://wallpaperaccess.com/full/3493336.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative bg-white p-10 rounded-lg shadow-lg max-w-md w-full  bg-opacity-60 backdrop-blur-md">
        <h2 className="text-3xl font-extrabold mb-9 text-center text-gray-800">Welcome🛒🛍️</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-9 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
              type="button"
              onClick={handleSignIn}
            >
              Sign In
            </button>
          </div>
          <div className="text-center mt-4">
            <a className="inline-block align-baseline font-bold text-lg text-black" href="#">
              Don't have an account? <span className="text-blue-700 hover:text-blue-800">Register</span> here.
            </a>
          </div>
        </form>
      </div>
      
    </div>
  );
};

export default Login;
