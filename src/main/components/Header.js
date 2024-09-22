import React from "react";
import { Navigate, useNavigate } from 'react-router-dom';
import { FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import '../css/HeaderStyle.css';

const Header = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        // Clear the login status
        localStorage.removeItem('isLoggedIn');
        navigate('/login'); // Redirect to the login page
    };
    return (
        <header className="header">
            <nav className="navbar">
                <div className="logo">
                    <h1>My App</h1>
                </div>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li> {/* Use Link instead of a */}
                    <li><Link to="/about">About</Link></li> {/* Use Link for About */}
                    <li><Link to="/contact">Contact</Link></li> {/* Same for Contact */}
                </ul>
                <div className="login-icon">
                    <a href="/signup"><FaUser size={24} /></a>
                    <a href="" onClick={handleLogout} className="logout"><FaSignOutAlt size={24} /></a>
               
                </div>

            </nav>
        </header>
    );
};

export default Header;
