import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import FixedBottomNavigation from "./components/navigation";
import Login from "./pages/Auth/login";
import ForgotPass from "./pages/Auth/forgotpass";
import SignUp from "./pages/Auth/signup";

function App() {
  return (
    <Router>
      {/* <h1 className='float-left container'>Studentity</h1> */}
      {/* <h1 className='float-right'>Login</h1> */}
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/sign-in"}>
              Studentity
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* <div className="auth-wrapper"> */}
        {/* <div className="auth-inner"> */}
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/reset-password" element={<ForgotPass />} />
          <Route path="/home" element={<FixedBottomNavigation />} />
        </Routes>
        {/* </div> */}
        {/* </div> */}
      </div>
    </Router>
  );
}
export default App;
