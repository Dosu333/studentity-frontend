import React, { useEffect, useState } from "react";
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
import Opportunities from "./pages/opportunities/opportunities";
import Post from "./pages/opportunities/post";
import Shoot from "./pages/shootshot/shoot";
import Pitchdm from "./pages/shootshot/pitchchat";
import Headroom from "react-headroom";

function App() {
  const [showNav, setShowNav] = useState()
  const [scrollData, setScrollData] = useState({
    y: 0,
    lastY: 0
  })
  
  useEffect(()=>{
    const handleScroll = ()=>{
      setScrollData(prevState=>{
        return({
          y: window.scrollY,
          lastY: prevState.y
        }
        )
      })
    }
    
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("touch")
  }, [])

  useEffect(()=>{
    console.log(scrollData)

    if (scrollData.y < 200){
      setShowNav(true)
    }else{
      setShowNav(false)
    }

    if (scrollData.lastY <= scrollData.y){
      setShowNav(false)
    }else{
      setShowNav(true)
    }
  },[scrollData])
  
  return (
    <Router>
      <div className="layout-container layout-menu-fixed">
        <Sidebar />
        <div className="layout-page">
          <nav className="layout-navbar top-menu-fixed container-xxl align-items-center bg-navbar-theme  navbar-expand-xl navbar" style={{position: "fixed"}}>
            <Topnav />
          </nav>
          <div className="" style={{marginTop: "20%"}}>
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<SignUp />} />
              <Route path="/reset-password" element={<ForgotPass />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/opportunities" element={<Opportunities/>}/>
              <Route path="/post/:id" element={<Post />} />
              <Route path="/shoot" element={<Shoot/>} />
              <Route path="/pitchdm" element={<Pitchdm/>} />
            </Routes>
          </div>{" "}
        </div>
      </div>
      <div className={showNav?"bottom-nav hide-bnav":"bottom-nav" }>
          <Bottomnav />
      </div>
        

      
    </Router>
  );
}
export default App;
