import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import placeholder_image_left from "../../assets/img/elements/12.jpg";
import avatar from "../../assets/img/avatars/1.png";

const Post = () => {
  const [post, setPost] = useState({});
  const [noConnection, setNoConnection] = useState(false);
  const [onlineStatus, setOnlineStatus] = useState(false);

  let id = useParams().id;
  const timeoutDuration = 5000;

  const timer = setTimeout(() => {
    setNoConnection(true);
  }, timeoutDuration);

  const response = () => {
    fetch("https://api.joinstudentity.com/api/v1/opportunity/posts/" + id)
      .then((res) => {
        clearTimeout(timer);
        return res.json();
      })
      .then((data) => {
        clearTimeout(timer);
        setPost(data);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    response();
  }, []);

  return (
    <body>
      {noConnection ? (
        <div class="container-xxl" style={{ marginTop: "5%" }}>
          <div class="col">
            <div class="card h-100">
              <div
                style={{
                  position: "absolute",
                  backgroundColor: "black",
                  width: "100%",
                  height: "150px",
                  opacity: 0.3,
                  borderRadius: "5px 5px 0px 0",
                }}
              ></div>
              <img
                class="card-img-top"
                src={placeholder_image_left}
                style={{
                  height: "150px",
                  objectFit: "cover",
                  objectPosition: "center center",
                }}
                alt="Card image cap"
              />
              <div class="card-body">
                <h2 class="d-flex card-title justify-content-left">
                  {post.title}
                </h2>
                <div class="d-flex">
                  <div class="flex-shrink-0 me-3">
                    <div class="avatar" style={{ marginTop: "5%" }}>
                      <img
                        src={avatar}
                        alt
                        class="w-px-40 h-auto rounded-circle"
                      />
                    </div>
                  </div>
                  <div class="flex-grow-1">
                    <span class="fw-semibold d-block">{post.author}</span>
                    <small class="text-muted">{post.created_at}</small>
                  </div>
                </div>
                <p class="card-text" style={{ marginTop: "2%" }}>
                  {post.body}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="demo-inline-spacing centered-spinner"
          style={{ marginLeft: "50%" }}
        >
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </body>
  );
};

export default Post;
