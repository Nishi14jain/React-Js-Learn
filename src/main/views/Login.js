import React, { useEffect, useState } from 'react';
import '../css/SignUp.css';
import { Navigate, useNavigate } from 'react-router-dom';

const LoginForm = () => {
    

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate(); 

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn'); 
        console.log(isLoggedIn); 
        if(isLoggedIn){
            navigate('/about'); 
        }
    }, [navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Retrieve user data from local storage
        const storedData = localStorage.getItem(formData.email);
        if (storedData) {
            const userData = JSON.parse(storedData);

            if (userData.password === formData.password) {
                alert('Login successful!');
                // navigate('/About'); 
                localStorage.setItem('isLoggedIn', 'true'); 
                navigate('/Index'); 
            } else {
                alert('Invalid password.');
            }
        } else {
            alert('User not found.');
        }

        setFormData({
            email: '',
            password: '',
        });
    };

    const handlesignupClick = () =>{
        navigate('/signup'); 
    };
    
    return (
        <div className='form-container'>

        <form onSubmit={handleSubmit} className='sign-up-form'>
            <h2>Login</h2>
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
            <button type="submit">Login</button>
            <button type="button" onClick={handlesignupClick}>signup</button>

        </form>
        </div>

    );
};

export default LoginForm;
