import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Index from "../views/index";
import About from "../views/About";
import SignUP from "../views/SignUp";
import Login from "../views/Login";
// RouteConfig.js
import ProtectedRoute from './components/ProtectedRoute'; // Correct import statement

import { Navigate, useNavigate } from 'react-router-dom';


const RouteConfig = () => { 
    const navigate = useNavigate();
   
 // Corrected the component name
    return (
       <Routes>
        <Route path="/signup" element={<SignUP />} />  {/* Additional route for the About page */}
        <Route path="/login" element={<Login />} />  {/* Additional route for the About page */}
       
        <Route path="/" element={ <ProtectedRoute><Index /></ProtectedRoute> } />   {/* "/" path for the index page */}
        <Route path="/about" element={ <ProtectedRoute><About /></ProtectedRoute> } />  {/* Additional route for the About page */}
        
       </Routes>
    ); 
}; 

export default RouteConfig;
