import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import adminProfImg from '../../assets/templet/assets/img/profile.jpg';
import underImage from '../../assets/templet/assets/img/profile.jpg';

const Navbar = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [user, setUser] = useState(null)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('token')
    setUser(loggedInUser)
  })

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from localStorage
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <>
      <div className="main-header m-0 p-0 bg-dark w-100 position-fixed">
        {/* <!-- Navbar Header --> */}
        <nav className="navbar navbar-header">
          <div className="container-fluid">
            {
              user && (
                <ul className="navbar-nav topbar-nav ms-auto align-items-center text-end">
                  <li className="nav-item topbar-user dropdown ">
                    <a className="dropdown-toggle profile-pic d-flex" data-bs-toggle="dropdown" href="#" aria-expanded="true">
                      <div className="avatar-sm">
                        <img src={adminProfImg} alt="..." className="avatar-img w-25 rounded-circle" />
                      </div>
                      <span className="profile-username">
                        <span className="op-7">Hi,</span>
                        <span className="fw-bold">Admin</span>
                      </span>
                    </a>
                    <ul className="dropdown-menu dropdown-user animated fadeIn bg-secondary text-light">
                      <div className="scroll-wrapper position-relative dropdown-user-scroll scrollbar-outer">
                        <div className="dropdown-user-scroll scrollbar-outer scroll-content">
                          <li>
                            <div className="user-box text-center">
                              <div className="avatar-lg">
                                <img src={underImage} alt="image profile" className="avatar-img rounded shadow" />
                              </div>
                              <div className="u-text">
                                <h4>Admin</h4>
                                <p className="text-">admin@gmail.com</p>
                              </div>
                            </div>
                          </li>
                          <li className="text-center">
                            <div className="dropdown-divider"></div>
                            <a className="btn btn-danger" onClick={handleLogout}>Logout</a>
                          </li>
                        </div>
                      </div>
                    </ul>
                  </li>
                </ul>
              )
            }
          </div>
        </nav>
        {/* <!-- End Navbar --> */}
      </div>
    </>
  );
};

export default Navbar;
