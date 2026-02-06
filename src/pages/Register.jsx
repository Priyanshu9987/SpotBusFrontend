import React, { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';

const Register = () => {

// text data
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ plate, setPlate ] = useState('');
    const [ startingRoute, setStartingRoute ] = useState('');
    const [ endingRoute, setEndingRoute ] = useState('');
    const [ errorMessage, setErrorMessage ] = useState('');

// multipart/form-data Reference Variables.
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

// variables
    const navigate = useNavigate();
    const formData = new FormData();

// Submit Checking Function
    const submitHandler = async (e) => {
        e.preventDefault();

// textfiles attaching to the form-data
        formData.append("name", name);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("phone", phone);
        formData.append("plate", plate);
        formData.append("startingRoute", startingRoute);
        formData.append("endingRoute", endingRoute);

// multipart/form-data attaching to the form-data
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
             const response = await axios.post('https://spotbusbackend.onrender.com/register', formData);
             console.log(response.data);

             if(response.status === 200){
                // Succcessful Register
                navigate("/home");// redirect to home page
             }  else {
                setErrorMessage('Registration gone wrong');
             }
                

        }catch(err) {
            console.log(" Error is in the sending details to the backend through the frontend.");
            console.error(err);
            setErrorMessage("Error is at the time of the registration")
        }}



// Reset Button Function
        const resetHandler = (e) => {
        e.preventDefault();
        formRef.current.reset();
    }

// Body Statements
    return (
        <>
        <form ref={formRef} onSubmit={submitHandler} action="">

        <div className=" h-full w-full bg-cover bg-fixed bg-[url('/RegisterPhoto.jpg')] ">

        <div className="p-3"> 

        <h3 className="text-white font-2xl font-bold" >
         All of the Documents should be completely Readable otherwise you will be discarded from the SpotBus App features.
        </h3>

{/* Name */}

        <h2 className="text-white font-2xl font-bold">Name </h2>
        <input
            type = "text"
            required
            name="name"
            className=" font-2xl font-bold bg-white mb-2 p-2 rounded"
            value = {name}
            onChange={ (e) => setName(e.target.value)} /> 
                
{/* Email */}

        <h2 className="text-white font-2xl font-bold"> Email </h2>
        <input
            type = "text"
            required
            name = "email"
            className=" font-2xl font-bold bg-white mb-2 p-2 rounded"
            placeholder="abc123@gmail.com"
            value = {email}
            onChange={ (e) => setEmail(e.target.value)} /> 

{/* Password */}

        <h2 className="text-white font-2xl font-bold"> Password </h2>
        <input
            type = "password"
            required
            name= "password"
            className=" font-2xl font-bold bg-white mb-2 p-2 rounded"
            value = {password}
            onChange={ (e) => setPassword(e.target.value)} /> 

{/* Phone No. */}

        <h2 className="text-white font-2xl font-bold"> Phone No. </h2>
        <input
            type = "text"
            required
            name="phone"
            className=" font-2xl font-bold bg-white mb-2 p-2 rounded"
            placeholder="123456789"
            value = {phone}
            onChange={ (e) => setPhone(e.target.value)} /> 

{/* Number Plate of Bus */}

        <h2 className="text-white font-2xl font-bold"> Number Plate(Bus) </h2>
        <input
            type = "text"
            required
            name="plate"
            className=" font-2xl font-bold bg-white mb-2 p-2 rounded"
            value = {plate}
            onChange={ (e) => setPlate(e.target.value)} /> 
            
{/* Route Starting to Ending With time  */}
        <h2 className="text-white font-2xl font-bold"> Route And Time  </h2>
        <input
            type="text"
            name='startingRoute'
            className="bg-white rounded p-3"
            placeholder="New Delhi(7:00)"
            value={startingRoute}
            onChange={ (e) => setStartingRoute(e.target.value)}
            />
                
{/* Route Ending to Starting With time  */}
        <h2 className="text-white font-2xl font-bold"> Return Route And Time  </h2>
        <input
            type="text"
            name='endingRoute'
            className="bg-white rounded p-3 "
            placeholder="Kolkata (11:00)"
            value={endingRoute}
            onChange={ (e) => setEndingRoute(e.target.value)}
            />    

{/* Bus Driver Photo */}

        <h2 className="text-white font-2xl font-bold"> Bus Driver Photo </h2>
        <input
            type = "file"
            name="driver"
            ref={driverRef}
            className="bg-white rounded"
            required
        /> 

{/* Conductor Photo  */}

        <h2 className="text-white font-2xl font-bold"> Bus Conductor Photo </h2>
        <input
            type = "file"
            name="conductor"
            ref = {conductorRef}
            className="bg-white rounded"
            required
                /> 

{/* Bus Photo  */}

        <h2 className="text-white font-2xl font-bold"> Bus  Photo </h2>
        <input
            type = "file"
            name= "bus"
            ref={busRef}
            className="bg-white rounded"
            required
                /> 

{/* Bus Number Plate Photo  */}

        <h2 className="text-white font-2xl font-bold"> Bus Number Plate Photo </h2>
        <input
            type = "file"
            name="platePhoto"
            ref={platePhotoRef}
            className="bg-white rounded"
            required
                /> 

{/* Driving License */}

        <h2 className="text-white font-2xl font-bold"> Driving License (Bus Driver) </h2>
        <input
            type = "file"
            name="license"
            ref={licenseRef}
            className="bg-white rounded"
            required
                /> 

{/* Vehicle Registration Certificate */}

        <h2 className="text-white font-2xl font-bold"> Vehcile Registration Certificate (RC) </h2>
        <input
            type = "file"
            name="registration"
            ref={registrationRef}
            className="bg-white rounded"
            required
                /> 

{/* Bus Insurance Papers */}

        <h2 className="text-white font-2xl font-bold"> Bus Insurance Papers </h2>
        <input
            type = "file"
            name="insurance"
            ref={insuranceRef}
            className="bg-white rounded"
            required
                /> 

{/* Pollution Under Control Certificate */}

        <h2 className="text-white font-2xl font-bold">Pollution Under Control Certificate </h2>
        <input
            type = "file"
            name="pu"
            ref={puRef}
            className="bg-white rounded"
            required
                /> 

{/* Vehicle Certificate */}

        <h2 className="text-white font-2xl font-bold"> Vehicle Certificate </h2>
        <input
            type = "file"
            name="certificate"
            ref={certificateRef}
            className="bg-white rounded"
            required
                />

         <Link to ='/login' className='text-white black text-2xl'> Login </Link>
           

        </div>

{/* Register Button  */}

        <div className="h-auto w-full flex justify-center">
        <button className = 'w-full h-auto mt-5 mx-2 mb-4 p-3 text-green-800 font-bold text-2xl rounded  bg-linear-to-b from-orange-400 via-white to-green-600 '
               type="submit">
                Register
        </button>  
        {errorMessage && (
          <p className="text-red-500 mb-4">{errorMessage}</p>
        )}

{/* Reset Button */}
        <button className = 'w-full h-auto mt-5 mx-2 mb-4 p-3 text-green-800 font-bold text-2xl rounded  bg-linear-to-b from-orange-400 via-white to-green-600'
             onClick={resetHandler}
             type="button">
                Reset
        </button>                 
        </div>

        </div>
                
        </form>
            

        </>
     )}

export default Register;

