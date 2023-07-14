import React from "react";

const Bottomnav = () => {
  return (
    <>
      <div className="dem bottom-nav">
        <ul className="bnav-inner">
          <li className="bnav-item">
            <i className="bnav-icon tf-icons bx bx-layout"></i>
            <span>Dashboard</span>
          </li>
          <li className="bnav-item">
            <i className="bnav-icon tf-icons bx bx-layout"></i>
            <span>Layouts</span>
          </li>
          <li className="bnav-item">
            <i className="bnav-icon tf-icons bx bx-layout"></i>
            <span>Jobs</span>
          </li>
          <li className="bnav-item">
            <i className="bnav-icon tf-icons bx bx-layout"></i>
            <span>Me</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Bottomnav;
