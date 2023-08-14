import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import FixedBottomNavigation from "./components/navigation";
import Login from "./pages/Auth/login";
import ForgotPass from "./pages/Auth/forgotpass";
import SignUp from "./pages/Auth/signup";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";
import Topnav from "./components/Topnav";
import Bottomnav from "./components/Bottomnav";
import Chat from "./pages/Chat";
import Profile from "./pages/profile/profile";

function App() {
  return (
    <Router>
      <div className="layout-container layout-menu-fixed">
        <Sidebar />
        <div className="layout-page">
          <nav className="layout-navbar top-menu-fixed container-xxl align-items-center bg-navbar-theme navbar-detached navbar-expand-xl navbar ">
            <Topnav />
          </nav>
          <div className="content-wrapper">
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<SignUp />} />
              <Route path="/reset-password" element={<ForgotPass />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>{" "}
        </div>
      </div>
      <Bottomnav />
    </Router>
  );
}
export default App;
