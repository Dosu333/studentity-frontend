import { red } from "@mui/material/colors";
import React, { useEffect, useRef, useState } from "react";
import avatar from "../../components/7.png";
import pdficon from "../../components/pdf-icon.png"



const Profile = () => {
    const [links, setLinks] = useState([])
    const [name, setName] = useState("John Doe")
    const [link, setLink] = useState("")
    const [pitch, setPitch] = useState("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum veniam deleniti debitis facilis neque praesentium doloremque deserunt, vel quisquam delectus harum quidem, repudiandae inventore? Ut doloribus aliquid incidunt totam atque.")
    const [editPitch, setEditPitch] = useState(false)
    const [editName, setEditName] = useState(false)
    const [editLink, setEditLink] = useState()
    const [editIndex, setEditIndex] = useState()
    
    function handleAddLink(){
        links.push(link)
        setLinks(links)
        setLink("")
    }

    function handleEditPitch(){
        if(editPitch===false){
        setEditPitch(true)
        } else {
            setEditPitch(false)
        }
    }
    function handleEditName(){
        if(editName===false){
        setEditName(true)
        } else {
            setEditName(false)
        }
    }

   

    function handleEditLinks(index){
        setEditIndex(index)
    }
    

    function handleUpdateLink(value, index){
        setEditIndex(index)
        const updatedList = [...links]
        if (value){
            updatedList[index] = value;
        }
        
        setLinks(updatedList)
        if (!value){
            setEditIndex("")
        }
        

    }

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
                                        <h4> 
                                            {editName===false?name:null} {editName===false ?<i class="bx bx-pen" onClick={handleEditName} style={{marginLeft: "20px"}}></i>:null}
                                        </h4>
                                        <div className="input-group">
                                            {editName===true?<input type="text" className="form-control" placeholder="" value={name} onChange={(e) => setName(e.target.value)}/>:null}
                                            {editName===true?<div className="input-group-prepend">
                                                                <button onClick={handleEditName} className="btn btn-info" type="button"><i class="bx bx-check"></i></button>
                                                            </div>:null}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mt-3">
                            <div className="card-body">
                                <h5>Pitch</h5>
                                <p>
                                    {editPitch=== false? pitch: null}
                                    {editPitch===false ?<i class="bx bx-pen" onClick={handleEditPitch} style={{marginLeft: "20px"}}></i>:null}
                                </p>
                                { editPitch===true ?<textarea
                                                        placeholder="Pitch yourself"
                                                        value={pitch}
                                                        rows={5}
                                                        cols={30}
                                                        onChange={(e)=>setPitch(e.target.value)}>
                                    
                                                    </textarea> : null}
                                {editPitch===true ? <button onClick={handleEditPitch} className="btn btn-info" type="button">done</button>: null}
                            </div>               
                        </div>
                        <div className="card mt-3">
                            <div className="card-body">
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
                                {links.map((link, index) => (
                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap" key={index}>
                                    {editIndex !== index ? (
                                    <span className="text-secondary">{link}</span>
                                    ) : (
                                    <div className="input-group">
                                        <input
                                        type="text"
                                        className="form-control"
                                        placeholder="input link"
                                        value={links[index]}
                                        onChange={(e) => handleUpdateLink(e.target.value, index)}
                                        />
                                        <button
                                        onClick={() => handleUpdateLink(null, index)}
                                        className="btn btn-info"
                                        type="button"
                                        >
                                        <i className="bx bx-check"></i>
                                        </button>
                                    </div>
                                    )}
                                    {editIndex !== index ? (
                                    <i
                                        className="bx bx-pen"
                                        onClick={() => handleEditLinks(index)}
                                        style={{ marginLeft: "20px" }}
                                    ></i>
                                    ) : null}
                                </li>
                                ))}

                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="input link" value={link} onChange={(e) => setLink(e.target.value)}/>    
                                        <div className="input-group-prepend">
                                            <button onClick={handleAddLink} className="btn btn-info" type="button"><i class="bx bx-plus"></i></button>
                                        </div>
                                    </div>
                                </ul>
                            </div>                  
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
