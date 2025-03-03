import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Sidebar/Sidebar.css";
import navBrandImg from '../../assets/templet/assets/img/kaiadmin/logo_light.svg'
import Footer from "../Footer/Footer";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  function toggleSideBar() {
    setIsOpen(!isOpen)
  }

  const sideBarClasses = `${isOpen ? "open" : ""}`
  return (
    <>
      <div class="sidebar">
        <div className={sideBarClasses}>
          <div class="sidebar-logo">
            {/* <!-- Logo Header --> */}
            <div class="logo-header d-flex justify-content-between" >
              <Link to={'/dashboard'}>
                <img src={navBrandImg} alt="navbar brand" class="navbar-brand" height="20" />
              </Link>
              {/* <button onClick={toggleSideBar}>
                <i className={isOpen?'fa fa-x':'fa fa-bars'}></i>
              </button> */}
            </div>
            {/* <!-- End Logo Header --> */}
          </div>
          <div class="scroll-wrapper sidebar-wrapper scrollbar scrollbar-inner">
            <div class="sidebar-wrapper scrollbar scrollbar-inner scroll-content scroll-scrolly_visible">
              <div class="sidebar-content">
                <ul class="nav nav-secondary d-flex flex-column">
                  <li class="nav-item active">
                    <a data-bs-toggle="collapse" href="#dashboard" class="collapsed" aria-expanded="false">
                      <i class="fas fa-home"></i>
                      <p>Dashboard</p>
                      <span class="caret"></span>
                    </a>
                    <div class="collapse" id="dashboard">
                      <ul class="nav nav-collapse">
                        <li>
                          <Link to={'/dashboard'}><span class="sub-item">Dashboard 1</span></Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="nav-section">
                    <span class="sidebar-mini-icon">
                      <i class="fa fa-ellipsis"></i>
                    </span>
                    <h4 class="text-section">Components</h4>
                  </li>
                  <li class="nav-item">
                    <Link to={'/services'}>
                      <i class="fas fa-desktop"></i>
                      <p>Services</p>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to={'/careers'}>
                      <i class="fas fa-desktop"></i>
                      <p>Career</p>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to={'/inquiry'}>
                      <i class="fas fa-desktop"></i>
                      <p>Inquiry</p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="scroll-element scroll-x scroll-scrolly_visible">
              <div class="scroll-element_outer">
                <div class="scroll-element_size">
                </div>
                <div class="scroll-element_track">
                </div>
                <div class="scroll-bar">
                </div></div></div><div class="scroll-element scroll-y scroll-scrolly_visible">
              <div class="scroll-element_outer">
                <div class="scroll-element_size">
                </div>
                <div class="scroll-element_track">
                </div>
                <div class="scroll-bar">
                </div>
              </div>
            </div>
          </div >
        </div>
      </div >
    </>
  );
};

export default Sidebar;
