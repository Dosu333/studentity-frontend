import { red } from "@mui/material/colors";
import React, { useEffect, useRef, useState } from "react";
import avatar from "../../components/7.png";
import pdficon from "../../components/pdf-icon.png"



const Profile = () => {
    

  
  return (
    <div className="container">
        <div className="main-body">
        

        
            <div className="row gutters-sm">
                <div className="col-md-4 mb-3">
                <div className="card">
                    <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                        <img src={avatar} alt="Admin" className="rounded-circle" width="150"/>
                        <div className="mt-3">
                        <h4>John Doe</h4>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="card mt-3">
                    <h5>Pitch</h5>
                    <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum veniam deleniti debitis facilis neque praesentium doloremque deserunt, vel quisquam delectus harum quidem, repudiandae inventore? Ut doloribus aliquid incidunt totam atque.
                    </p>

                </div>
                <div className="card mt-3">
                    <h1>Qualifications</h1>
                    <h4>Resume</h4>
                    <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <a className="d-flex align-items-center" href="sample.pdf" target="_blank" style={{padding: "4px"}}><img src={pdficon} style={{maxWidth: "10%", marginRight: "12px"}} />
                        <p className="text-left" style={{marginBottom: "0px"}}><em className>View resume</em><br /></p>
                        </a>
                    </li>
                    </ul>
                    <h4>links</h4>
                    <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <span className="text-secondary">https://website.com</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <span className="text-secondary">https://website.com</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <span className="text-secondary">https://website.com</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <span className="text-secondary">https://website.com</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <span className="text-secondary">https://website.com</span>
                    </li>
                    </ul>
                </div>
                </div>
                <div className="col-md-8">
                <div className="card mb-3">
                    <div className="card-body">
                    
                    
                    <div className="row">
                        <h2>Change Password</h2>
                        <form>
                        <div className="form-group"><label className="text-secondary">Old Password</label><input className="form-control" type="password" required /></div>
                        <div className="form-group"><label className="text-secondary">New Password</label><input className="form-control" type="password" required /></div>
                        <div className="form-group"><label className="text-secondary">Confirm New Password</label><input className="form-control" type="password" required /></div>
                        <button className="btn btn-info mt-2" type="submit">Change Password</button>
                    </form>
                    </div>

                


                </div>
            </div>

            </div>
        </div>
        </div>
    </div>
        
      );
};

export default Profile;
