import React from "react";
import Sidebar from "../components/Sidebar";
import Topnav from "../components/Topnav";
import Bottomnav from "../components/Bottomnav";

const Dashboard = () => {
  return (
    <>
      <div className="layout-container">
        <Sidebar />
        <Topnav />
      </div>
        <Bottomnav />
    </>
  );
};

export default Dashboard;
