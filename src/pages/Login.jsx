import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

    const [email, setEmail ] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const info = {
        email: email,
        password: password,
    }

    const submitHandler = async ( e) => {

        e.preventDefault();

        try {
            // Login Checker
             const response = await axios.post('https://spotbusbackend.onrender.com/login', info);

             // Error checking Statements
        if(response != null) {
            navigate('/');
        }} catch (err) {
            console.log( "Error is in the Login at the time of the sending in the backend");
            console.error(err);
        }}

    return (
        <>
           <div className="h-screen w-screen bg-cover bg-[url('/Bus.jpg')] ">

            <div className='p-5 pt-8'>

            {/* E-Mail */}

                <h3 className='text-white black text-2xl'> Email</h3>
                <input type='text'
                className=' border bg-white p-2 rounded-md w-5/6 mt-1.5'
                required
                name='email'
                placeholder='abc123@gmail.com'
                value = {email}
                onChange= {(e) => setEmail(e.target.value)}
                />

            {/* Password  */}

                <h3 className='text-white black text-2xl'> Password</h3>
                <input type='password'
                className=' border bg-white p-2 rounded-md w-5/6 mt-1.5'
                required
                name='password'
                value = {password}
                onChange= {(e) => setPassword(e.target.value)}
        />
                <br />
                <Link to='/passwordChange' className='text-white font-4xl font-bold'> Forgot Password ? </Link>
                <Link to ='/register' className='text-white black text-xl'> Register here</Link>
                <br />

            </div>

            {/* Login */}

                <button className=' w-9/10 center ml-5 mb-6 transform-translate-y-40  text-white p-2 font-bold text-2xl bg-linear-to-r from-indigo-400  via-yellow-500 to-green-500 rounded'
                onClick={submitHandler}> Login</button>
{/* Home Page */}
                                <Link to = '/home' className='w-9/10 center ml-5 mb-6 transform-translate-y-40  text-white p-2 font-bold text-2xl bg-linear-to-r from-indigo-400  via-yellow-500 to-green-500 rounded'> Home Page</Link>


            </div>    
        </>
    )}

export default Login;
