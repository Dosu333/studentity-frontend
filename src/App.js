import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/login'
import SignUp from './components/signup'
import FixedBottomNavigation from './components/navigation'

function App() {
  return (
    <Router>
      {/* <h1 className='float-left container'>Studentity</h1> */}
      {/* <h1 className='float-right'>Login</h1> */}
      <div className="App">
        
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'}>
              Studentity
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
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
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/home" element={<FixedBottomNavigation />}/>
            </Routes>
          {/* </div> */}
        {/* </div> */}
       </div>
    </Router>
  )
}
export default App