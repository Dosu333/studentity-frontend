import React, { useEffect, useRef, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./assets/vendor/css/core.css"
import "./assets/vendor/css/theme-default.css"
import "./assets/css/demo.css"
import "./assets/vendor/fonts/boxicons.css"

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
import Opportunities from "./pages/opportunities/opportunities";
import Post from "./pages/opportunities/post";
import Shoot from "./pages/shootshot/shoot";
import Pitchdm from "./pages/shootshot/pitchchat";


function App() {
  const [showNav, setShowNav] = useState(true)
  const wrapper = useRef(null)
  const [scroll, setScroll] = useState({
    x: 0,
    y: 0,
    lastX: 0,
    lastY: 0
  });

 
  const handleScroll = () => {
    setScroll((last) => {
      return {
        y: wrapper.current.scrollTop,
        lastY: last.y
      };
    });
  };


  const handleTouch = () => {
    if (showNav===true){
      setShowNav(false)
    }else{
      setShowNav(true)
    }
      
  }

    useEffect(()=>{
      if (scroll.y > 150 && scroll.y - scroll.lastY > 0)
         setShowNav(false)
      else
        setShowNav(true)
    },[scroll.y, scroll.lastY])



  
  return (
    <Router>
      <div class="layout-wrapper layout-content-navbar">
       <div class="layout-container">
        <Sidebar />
        <div className="layout-page">
        <nav className="layout-navbar top-menu-fixed container-xxl align-items-center bg-navbar-theme navbar-detached navbar-expand-xl navbar ">
            <Topnav />
          </nav>
          <div class="layout-wrapper layout-content-navbar">
            <div ref={wrapper} className="content-wrapper"  onScroll={handleScroll} onTouchStart={handleTouch}>
              <Routes>
                <Route exact path="/" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<SignUp />} />
                <Route path="/reset-password" element={<ForgotPass />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/opportunities" element={<Opportunities scroll={scroll}/>}/>
                <Route path="/opportunities/:id" element={<Post />} />
                <Route path="/shoot" element={<Shoot/>} />
                <Route path="/pitchdm" element={<Pitchdm/>} />
              </Routes>
            </div>{" "}
          </div>
        </div>
      
      <div className={showNav?"show-nav":" show-nav hide-bnav" }>
          <Bottomnav />
      </div> 
      </div>
      </div>
   
    </Router>
  );
}
export default App;
