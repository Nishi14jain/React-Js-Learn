import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import '../css/SignUp.css';


const SignUpForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate(); // Initialize useNavigate

    const handleChange = (e) => { 
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if the user already exists
        if (localStorage.getItem(formData.email)) {
            alert('User already exists with this email!');
        } else {
            // Store user data in local storage
            localStorage.setItem(formData.email, JSON.stringify(formData));
            alert('User registered successfully!');
            setFormData({
                email: '',
                password: '',
            });
            console.log(formData); 
        }
    };

    const handleLoginClick = () =>{
        navigate('/login'); 
    };

    return (
        <div className='form-container'>

        <form onSubmit={handleSubmit} className='sign-up-form'>  
            <h2>Sign Up</h2>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="button" onClick={handleLoginClick}>Login</button>

            <button type="submit">Sign Up</button>
        </form>
        </div>

    );
};

export default SignUpForm;
