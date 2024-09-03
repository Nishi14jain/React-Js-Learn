import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import RouteConfig from './main/routes/RouteConfig';  // Corrected import statement
import Header from './main/components/Header';
import Index from './main/views';

function App() {
 

  return (
    <Router>
      <Header />
      <RouteConfig />  
    </Router>
  );
}

export default App;
