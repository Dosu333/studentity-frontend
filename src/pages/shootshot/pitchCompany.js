import { red } from "@mui/material/colors";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../../components/7.png";
import avatar2 from "../../components/6.png";
import Typing from "../../components/Typing";

const Shoot = () => {
  const [textareaValue, setTextareaValue] = useState();
  const companies = [
    { id: 1, link: "#list-home", name: "Google" },
    { id: 2, link: "#list-profile", name: "Facebook" },
    { id: 3, link: "#list-messages", name: "Amazon" },
  ];

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };

  const handleSubmit = (event) => {};

  return (
    <body>
      <div className="container-xxl flex-grow-1 container-p-y">
        <div class="col-lg-12">
          <div class="demo-inline-spacing mt-3">
            <div class="list-group">
              {companies.map((company) => (
                <Link
                  to={"/pitchdm"}
                  className="list-group-item list-group-item-action flex-column align-items-start"
                >
                  <div class="d-flex justify-content-between w-100">
                    <h6>{company.name}</h6>
                    <small>3 days ago</small>
                  </div>
                  <p class="mb-1">Hello there</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Shoot;
