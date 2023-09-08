import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../Studentity assets/Asset 4Studentity Logomark color2.png"

const Sidebar = () => {
  return (
    <>
      <aside
        id="layout-menu"
        className="layout-menu menu-vertical menu bg-menu-theme"
      >
        <div className="app-brand demo">
          <a href="index.html" className="app-brand-link">
            <span className="app-brand-logo demo">
               <img src={logo} alt="Admin" className="" width="110" />
            </span>
          </a>
          <a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
              <i class="bx bx-chevron-left bx-sm align-middle"></i>
            </a>
        </div>

        <div className="menu-inner-shadow"></div>

        <ul className="menu-inner py-1">
          {/* <!-- Dashboard --> */}
          <NavLink to={"/"} className="menu-item">
            <li className="menu-link">
              <i className="menu-icon tf-icons bx bx-home-circle"></i>
              <div data-i18n="Analytics">Dashboard</div>
            </li>
          </NavLink>
          <NavLink to={"/opportunities"} className="menu-item">
            <li className="menu-link">
              <i className="menu-icon tf-icons bx bx-calendar-event"></i>
              <div data-i18n="Layouts">Opportunities</div>
            </li>
          </NavLink>

          <NavLink to={"/chat"} className="menu-item">
            <li className="menu-link">
              <i className="menu-icon tf-icons bx bx-file"></i>
              <div data-i18n="Layouts">Resume</div>
            </li>
          </NavLink>

          <NavLink to={"/shoot"} className="menu-item">
            <li className="menu-link">
              <i className="menu-icon tf-icons bx bx-layout"></i>
              <div data-i18n="Layouts">Pitch</div>
            </li>
          </NavLink>
        </ul>
      </aside>

      {/* <!-- / Menu --> */}
    </>
  );
};

export default Sidebar;
