import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import RouteConfig from './main/routes/RouteConfig';  // Corrected import statement
import Header from './main/components/Header';
import Index from './main/views';
import Header2 from './main/components/Header2';

function App() {
 

  return (
    <Router>
      <Header2 />
      <RouteConfig />  
    </Router>
  );
}

export default App;
