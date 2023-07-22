import { red } from "@mui/material/colors";
import React from "react";
import avatar from "../components/7.png";
import avatar2 from "../components/6.png";

const Chat = () => {
  return (
    <div
      className="container-xxl flex-grow-1 container-p-y"
      style={{ overflow: "hidden" }}
    >
      <div class="card-body chatB">
        <div className="chatInside">
          {/* chats Start  */}
          <div className="chatLeft">
            <div className="image">
              <img src={avatar2} alt="" className="img-avatar" />
            </div>
            <div className="aBody">
              <div className="aContent">
                Quisque consequat arcu eget odio cursus, ut tempor arcu
                vestibulum. Etiam ex arcu, porta a urna non, lacinia
                pellentesque orci. Proin semper sagittis erat, eget condimentum
                sapien viverra et. Mauris volutpat magna nibh, et condimentum
                est rutrum a. Nunc sed turpis mi. In eu massa a sem pulvinar
                lobortis.
              </div>
              <small className="chat-date">
                <i className="tf-icons bx bx-calendar"></i> 22-07-2023 at 09:00
              </small>
            </div>
          </div>

          <div className="chatRight">
            <div className="uBody">
              <div className="uContent">
                Quisque consequat arcu eget odio cursus, ut tempor arcu
                vestibulum. Etiam ex arcu, porta a urna non, lacinia
                pellentesque orci. Proin semper sagittis erat, eget condimentum
                sapien viverra et. Mauris volutpat magna nibh, et condimentum
                est rutrum a. Nunc sed turpis mi. In eu massa a sem pulvinar
                lobortis. Quisque consequat arcu eget odio cursus, ut tempor
                arcu vestibulum. Etiam ex arcu, porta a urna non, lacinia
                pellentesque orci. Proin semper sagittis erat, eget condimentum
                sapien viverra et. Mauris volutpat magna nibh, et condimentum
                est rutrum a. Nunc sed turpis mi. In eu massa a sem pulvinar
                lobortis.
                <br />
                <br />
                Quisque consequat arcu eget odio cursus, ut tempor arcu
                vestibulum. Etiam ex arcu, porta a urna non, lacinia
                pellentesque orci. Proin semper sagittis erat, eget condimentum
                sapien viverra et. Mauris volutpat magna nibh, et condimentum
                est rutrum a. Nunc sed turpis mi. In eu massa a sem pulvinar
                lobortis.
              </div>
              <small className="uchat-date">
                <i className=" bx bx-calendar"></i> 22-07-2023 at 09:00
              </small>
            </div>
            <div className="image">
              <img src={avatar} alt="" className="img-avatar" />
            </div>
          </div>

          <div className="chatLeft">
            <div className="image">
              <img src={avatar2} alt="" className="img-avatar" />
            </div>
            <div className="aBody">
              <div className="aContent">
                Quisque consequat arcu eget odio cursus, ut tempor arcu
                vestibulum. Etiam ex arcu, porta a urna non, lacinia
                pellentesque orci. Proin semper sagittis erat, eget condimentum
                sapien viverra et. Mauris volutpat magna nibh, et condimentum
                est rutrum a. Nunc sed turpis mi. In eu massa a sem pulvinar
                lobortis.
              </div>
              <small className="chat-date">
                <i className="tf-icons bx bx-calendar"></i> 22-07-2023 at 09:00
              </small>
            </div>
          </div>

          <div className="chatRight">
            <div className="uBody">
              <div className="uContent">
                Quisque consequat arcu eget odio cursus, ut tempor arcu
                vestibulum. Etiam ex arcu, porta a urna non, lacinia
                pellentesque orci. Proin semper sagittis erat, eget condimentum
                sapien viverra et. Mauris volutpat magna nibh, et condimentum
                est rutrum a. Nunc sed turpis mi. In eu massa a sem pulvinar
                lobortis. Quisque consequat arcu eget odio cursus, ut tempor
                arcu vestibulum. Etiam ex arcu, porta a urna non, lacinia
                pellentesque orci. Proin semper sagittis erat, eget condimentum
                sapien viverra et. Mauris volutpat magna nibh, et condimentum
                est rutrum a. Nunc sed turpis mi. In eu massa a sem pulvinar
                lobortis.
                <br />
                <br />
                Quisque consequat arcu eget odio cursus, ut tempor arcu
                vestibulum. Etiam ex arcu, porta a urna non, lacinia
                pellentesque orci. Proin semper sagittis erat, eget condimentum
                sapien viverra et. Mauris volutpat magna nibh, et condimentum
                est rutrum a. Nunc sed turpis mi. In eu massa a sem pulvinar
                lobortis.
              </div>
              <small className="uchat-date">
                <i className=" bx bx-calendar"></i> 22-07-2023 at 09:00
              </small>
            </div>
            <div className="image">
              <img src={avatar} alt="" className="img-avatar" />
            </div>
          </div>

          {/* chats End */}
        </div>

        {/* SendArea  */}
        <div class=" byr">
          <div className="add">
            <button
              type="button"
              className="btn btn-icon btn-outline-secondary"
              style={{ padding: "30px 0" }}
            >
              <span class="tf-icons bx bx-dots-vertical-rounded"></span>
            </button>
          </div>
          <div class="input-group input-group-merge ">
            <textarea
              placeholder="Send a Message"
              className="form-control txtArea"
            ></textarea>
          </div>
          <div className="add">
            <button
              type="button"
              class="btn btn-icon btn-primary"
              style={{ padding: "30px 0" }}
            >
              <span class="tf-icons bx bx-send"></span>
            </button>
          </div>
        </div>
        {/* sendArea  */}
      </div>
    </div>
  );
};

export default Chat;
