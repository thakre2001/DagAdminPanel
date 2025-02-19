import React from "react";
import './Dashboard.css'
import Sidebar from "./Sidebar/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <Sidebar/>
      <div className="main-content">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
