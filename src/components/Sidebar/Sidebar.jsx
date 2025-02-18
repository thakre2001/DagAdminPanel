import React from "react";
import { Link } from "react-router-dom";
import "../Sidebar/Sidebar.css";
import navBrandImg from '../../assets/templet/assets/img/kaiadmin/logo_light.svg'

const Sidebar = () => {
  return (
    <>
      <div style={{ width: "200px", height: "100vh", background: "#03023d", color: "#fff", padding: "20px" }}>
      <p><Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Dashboard</Link></p>
      <p><Link to="/services" style={{ color: "#fff", textDecoration: "none" }}>Services</Link></p>
      <p><Link to="/careers" style={{ color: "#fff", textDecoration: "none" }}>Careers</Link></p>
    </div>
    </>
  );
};

export default Sidebar;
