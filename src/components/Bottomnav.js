import React from "react";
import { NavLink } from "react-router-dom";

const Bottomnav = () => {
  return (
    <>
      <div className="dem bottom-nav">
        <div className="bnav-inner">
          <NavLink className="bnav-item" to={"/"}>
            <i className="bnav-icon tf-icons bx bx-layout"></i>
            <span>Dashboard</span>
          </NavLink>
          <NavLink className="bnav-item" to={"/opportunities"}>
            <i className="bnav-icon tf-icons bx bx-layout"></i>
            <span>Events</span>
          </NavLink>
          <NavLink className="bnav-item" to={"/chat"}>
            <i className="bnav-icon tf-icons bx bx-layout"></i>
            <span>Resume</span>
          </NavLink>
          <NavLink className="bnav-item" to={"/shoot"}>
            <i className="bnav-icon tf-icons bx bx-layout"></i>
            <span>Pitch</span>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Bottomnav;
