import { red } from "@mui/material/colors";
import React from "react";

const Chat = () => {
  return (
    <div
      className="container-xxl flex-grow-1 container-p-y"
      style={{ overflow: "hidden" }}
    >
      <div class="card-body chatB">
        <div className="chatInside">
          {" "}
          <div
            style={{
              width: "100%",
              height: "300px",
              background: "pink",
              margin: "2px 0",
            }}
          ></div>
          <div
            style={{
              width: "100%",
              height: "300px",
              background: "black",
              margin: "2px 0",
            }}
          ></div>
          <div
            style={{
              width: "100%",
              height: "300px",
              background: "red",
              margin: "2px 0",
            }}
          ></div>
          <div
            style={{
              width: "100%",
              height: "300px",
              background: "orange",
              margin: "2px 0",
            }}
          ></div>
          <div
            style={{
              width: "100%",
              height: "300px",
              background: "purple",
              margin: "2px 0",
            }}
          ></div>
        </div>
        <div class="input-group input-group-merge byr">
          <textarea
            class="form-control txtArea"
            placeholder="Send a Message"
          ></textarea>
          <button
            type="button"
            class="btn btn-icon btn-primary"
            style={{ padding: "30px 0" }}
          >
            <span class="tf-icons bx bx-send"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
