import React, { Component } from 'react'
export default class SignUp extends Component {
  handleSubmit = (event) => {
    event.preventDefault();

    const emailInput = event.target.elements.email;
    const emailValue = emailInput.value;

    const passwordInput = event.target.elements.password;
    const passwordValue = passwordInput.value;


    if (!emailValue.endsWith('edu.ng')) {
      alert('Please enter an email address ending with "edu.ng"');
      return;
    }
    
    if (passwordValue.length < 8) {
      alert('Password should have at least 8 characters');
      return;
    }
    // Proceed with the signup logic
    // ...
  };
  render() {
    return (
      <div className='App'>
        <div className='auth-wrapper'>
          <div className='auth-inner'>
          <form onSubmit={this.handleSubmit}>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            required
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" required/>
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter email"
            required
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter password"
            required
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
          </div>
        </div>
      </div>

      
    )
  }
}