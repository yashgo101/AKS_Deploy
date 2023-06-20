import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AddEmployees from './components/employees/AddEmployees';
import Home from './components/common/Home';
import Navigation from './components/common/Navigation';
import Employees from './components/employees/Employee';


function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-employee" element={<AddEmployees />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
    </>
  );
}

export default App;