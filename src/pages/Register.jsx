import React, { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  // text data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [plate, setPlate] = useState("");
  const [startingRoute, setStartingRoute] = useState("");
  const [endingRoute, setEndingRoute] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // file refs
  const driverRef = useRef(null);
  const conductorRef = useRef(null);
  const busRef = useRef(null);
  const platePhotoRef = useRef(null);
  const licenseRef = useRef(null);
  const registrationRef = useRef(null);
  const insuranceRef = useRef(null);
  const puRef = useRef(null);
  const certificateRef = useRef(null);
  const formRef = useRef(null);

  const navigate = useNavigate();

  // Submit handler
  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData(); // ✅ fresh FormData each submit

    // text fields
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("phone", phone);
    formData.append("plate", plate);
    formData.append("startingRoute", startingRoute);
    formData.append("endingRoute", endingRoute);

    // file fields
    formData.append("driver", driverRef.current.files[0]);
    formData.append("conductor", conductorRef.current.files[0]);
    formData.append("bus", busRef.current.files[0]);
    formData.append("platePhoto", platePhotoRef.current.files[0]);
    formData.append("license", licenseRef.current.files[0]);
    formData.append("registration", registrationRef.current.files[0]);
    formData.append("insurance", insuranceRef.current.files[0]);
    formData.append("pu", puRef.current.files[0]);
    formData.append("certificate", certificateRef.current.files[0]);

    try {
      const response = await axios.post(
        "https://spotbusbackend.onrender.com/register",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        console.log("Registration successful:", response.data);
        navigate("/login"); // redirect to login after register
      } else {
        setErrorMessage("Registration failed. Please try again.");
      }
    } catch (err) {
      console.error("Error during registration:", err);
      setErrorMessage("Error sending details to backend.");
    }
  };

  // Reset handler
  const resetHandler = () => {
    formRef.current.reset();
    setName("");
    setEmail("");
    setPassword("");
    setPhone("");
    setPlate("");
    setStartingRoute("");
    setEndingRoute("");
    setErrorMessage("");
  };

  return (
    <form ref={formRef} onSubmit={submitHandler}>
      <div className="h-full w-full bg-cover bg-fixed bg-[url('/RegisterPhoto.jpg')] p-3">
        <h3 className="text-white font-bold mb-4">
          All documents must be readable, otherwise you will be discarded from
          SpotBus App features.
        </h3>

        {/* Example input: Name */}
        <h2 className="text-white font-bold">Name</h2>
        <input
          type="text"
          required
          className="bg-white mb-2 p-2 rounded w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* Repeat for email, password, phone, plate, routes... */}
        {/* Example: Email */}
        <h2 className="text-white font-bold">Email</h2>
        <input
          type="email"
          required
          className="bg-white mb-2 p-2 rounded w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* File inputs */}
        <h2 className="text-white font-bold">Bus Driver Photo</h2>
        <input type="file" ref={driverRef} required className="bg-white mb-2" />

        {/* Repeat for conductor, bus, platePhoto, license, registration, insurance, pu, certificate */}

        {errorMessage && (
          <p className="text-red-500 mt-2">{errorMessage}</p>
        )}

        {/* Buttons */}
        <div className="flex flex-col mt-4">
          <button
            type="submit"
            className="p-3 text-green-800 font-bold text-xl rounded bg-gradient-to-b from-orange-400 via-white to-green-600 mb-2"
          >
            Register
          </button>
          <button
            type="button"
            onClick={resetHandler}
            className="p-3 text-green-800 font-bold text-xl rounded bg-gradient-to-b from-orange-400 via-white to-green-600"
          >
            Reset
          </button>
        </div>

        <Link to="/login" className="text-white text-xl mt-4 block">
          Already have an account? Login
        </Link>
      </div>
    </form>
  );
};

export default Register;