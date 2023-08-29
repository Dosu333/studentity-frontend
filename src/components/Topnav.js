import React, { useEffect, useRef, useState } from "react";
import avatar from "./7.png";
import { Link } from "react-router-dom";
import logo from "../Studentity assets/Asset 4Studentity Logomark color2.png"

const Topnav = () => {
  const [isShown, setIsShown] = useState(false);

  const dropdownRef = useRef(null);

  const handleDrop = () => {
    setIsShown((current) => !current);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsShown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {" "}
      {/* <!-- Layout container --> */}
      {/* <!-- Navbar --> */}
     
        <div className="navbar-nav-right d-flex align-items-center">
          {/* logo  */}
          <div className="app-brand demo d-xl-none">
          <a href="/" className="app-brand-link">
            <span className="app-brand-logo demo">
               <img src={logo} alt="Admin" className="" width="110" />
            </span>
          </a>
        </div>
          {/* logo  */}

          <ul className="navbar-nav flex-row align-items-center ms-auto">
            {/* <!-- User --> */}
            <li class="nav-item navbar-dropdown dropdown-user dropdown">
              <a
                class="nav-link dropdown-toggle hide-arrow"
                href="javascript:void(0);"
                data-bs-toggle="dropdown"
              >
                <div className="avatar avatar-online">
                  <img
                    onClick={handleDrop}
                    src={avatar}
                    alt="profile-image"
                    className="w-px-40 h-auto rounded-circle"
                  />
                </div>
              </a>

              <ul
                ref={dropdownRef}
                className={
                  isShown ? "dropdown-menu dropdown-menu-end show" : "dropdown-menu dropdown-menu-end hide"
                }
              >
                <li>
                  <Link className="dropdown-item" to={"/profile"}>
                    <div className="d-flex">
                      <div className="flex-shrink-0 me-3">
                        <div className="avatar avatar-online">
                          <img
                            src={avatar}
                            alt
                            className="w-px-40 h-auto rounded-circle"
                          />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <span className="fw-semibold d-block">John Doe</span>
                        <small className="text-muted">Admin</small>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <div className="dropdown-divider"></div>
                </li>
                <li>
                  <Link className="dropdown-item" to={"/profile"}>
                    <i className="bx bx-user me-2"></i>
                    <span className="align-middle">My Profile</span>
                  </Link>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="bx bx-cog me-2"></i>
                    <span className="align-middle">Settings</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <span className="d-flex align-items-center align-middle">
                      <i className="flex-shrink-0 bx bx-credit-card me-2"></i>
                      <span className="flex-grow-1 align-middle">Billing</span>
                      <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">
                        4
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <div className="dropdown-divider"></div>
                </li>
                <li>
                  <a className="dropdown-item" href="auth-login-basic.html">
                    <i className="bx bx-power-off me-2"></i>
                    <span className="align-middle">Log Out</span>
                  </a>
                </li>
              </ul>
            </li>
            {/* <!--/ User --> */}
          </ul>
        </div>
      {/* </nav> */}
      {/* <!-- / Navbar --> */}
    </>
  );
};

export default Topnav;
