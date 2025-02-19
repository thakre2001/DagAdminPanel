import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard";
import Services from "./pages/Services";
import Careers from "./components/Career/Careers";
import PrivateRoute from "./components/PrivateRoute";
import "./styles.css";
import Login from "./components/Login/Login";

function App() {
  return (
    <Router>
      <Navbar/>
      <div style={{ display: "flex" }}>
        <Sidebar />  {/* Ensure Sidebar is displayed properly */}
        <div style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} /> 
            <Route path="/login" element={<Login />} />

            {/* Protect these routes with PrivateRoute */}
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/services" element={<PrivateRoute><Services /></PrivateRoute>} />
            <Route path="/careers" element={<PrivateRoute><Careers /></PrivateRoute>} />

            {/* Catch-all route */}
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
