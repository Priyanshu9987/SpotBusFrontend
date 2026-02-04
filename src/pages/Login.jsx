import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://spotbusbackend.onrender.com/login",
        { email, password },
        { withCredentials: true } // important if backend uses cookies/sessions
      );

      if (response.status === 200) {
        // ✅ Successful login
        navigate("/home"); // redirect to home page
      } else {
        setErrorMessage("Invalid login credentials");
      }
    } catch (err) {
      console.error("Login error:", err);
      setErrorMessage("Login failed. Please check your email/password.");
    }
  };

  return (
    <div className="h-screen w-screen bg-cover bg-[url('/Bus.jpg')] flex flex-col items-center justify-center">
      <div className="bg-black bg-opacity-50 p-8 rounded-md w-4/5 max-w-md">
        <h3 className="text-white text-2xl mb-2">Email</h3>
        <input
          type="text"
          className="border bg-white p-2 rounded-md w-full mb-4"
          required
          placeholder="abc123@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <h3 className="text-white text-2xl mb-2">Password</h3>
        <input
          type="password"
          className="border bg-white p-2 rounded-md w-full mb-4"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {errorMessage && (
          <p className="text-red-500 mb-4">{errorMessage}</p>
        )}

        <button
          className="w-full text-white p-2 font-bold text-xl bg-gradient-to-r from-indigo-400 via-yellow-500 to-green-500 rounded mb-4"
          onClick={submitHandler}
        >
          Login
        </button>

        <Link
          to="/passwordChange"
          className="block text-white mb-2 text-center"
        >
          Forgot Password?
        </Link>
        <Link
          to="/register"
          className="block text-white mb-2 text-center"
        >
          Register here
        </Link>
        <Link
          to="/home"
          className="block text-white text-center font-bold"
        >
          Home Page
        </Link>
      </div>
    </div>
  );
};

export default Login;