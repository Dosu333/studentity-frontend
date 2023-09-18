import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./css/opportunity.css";
import placeholder_image_left from "../../assets/img/elements/12.jpg";
import placeholder_image_right from "../../assets/img/elements/17.jpg";

const Opportunities = ({ scroll }) => {
  const wrapper = useRef(null);
  const [opportunitiesData, setOpportunitiesData] = useState({});
  const [results, setResults] = useState([]);
  const [onlineStatus, setOnlineStatus] = useState(false);
  const [nextUrl, setNextUrl] = useState("");
  const [noConnection, setNoConnection] = useState(false);
  const [endResults, setEndResults] = useState(false);

  const timeoutDuration = 5000;
  const initial_url =
    "https://api.joinstudentity.com/api/v1/opportunity/posts/?page=1&page_size=5";

  const timer = setTimeout(() => {
    setNoConnection(true);
  }, timeoutDuration);

  const opportunities = (url) => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const newResults = data.results;
        clearTimeout(timer);
        setOpportunitiesData(data);
        setNextUrl(data.next);
        setResults([...results, ...newResults]);
        setOnlineStatus(true);
      })
      .catch((err) => {
        console.log(err);
        setOnlineStatus(false);
      });
  };

  const handleClick = () => {
    window.location.reload();
  };

  useEffect(() => {
    opportunities(initial_url);
  }, []);

  useEffect(() => {
    const height = wrapper.current.clientHeight;
    if (height - scroll.y < 800) {
      try {
        if (opportunitiesData.links.next != null) {
          opportunities(opportunitiesData.links.next);
        } else {
          setEndResults(true);
        }
      } catch (error) {}
    }
  }, [scroll]);

  return (
    <>
      {/* Main Content */}
      {noConnection && !onlineStatus && (
        <div className="container my-5 d-flex justify-content-center">
          {/* Error message JSX */}
          <div className="row  justify-content-center ">
            <div className="col">
              <div className="card ">
                <div className="card-body px-sm-4 mb-3">
                  <ul className="list-unstyled text-muted">
                    <li>
                      To continue using Studentity, please ensure that your
                      internet connection is active.
                    </li>
                    <li>
                      If you encounter any issues, consider the following steps:
                    </li>
                    <ul className="mt-2 inner">
                      <li>Restart your device's wireless connection.</li>
                      <li>
                        Ensure you are in proximity to your wireless access
                        point.
                      </li>
                      <li>
                        If you continue to face connectivity problems, please
                        reach out to our support team for assistance. We're here
                        to help you get back online.
                      </li>
                    </ul>
                  </ul>

                  <div className="row justify-content-end mt-4 ">
                    <div className="col-auto">
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={handleClick}
                      >
                        <span>Try Again</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div ref={wrapper} className="container-xxl flex-grow-1 container-p-y">
        {onlineStatus ? (
          <div className="">
            {/* Post previews */}
            <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
              {results.map((opportunity, index) => (
                <Link
                  to={`/opportunities/${opportunity.id}`}
                  className="col-md-4 col-xl-4"
                  key={opportunity.id}
                >
                  <div className="col">
                    <div className="card h-100">
                      <img
                        className="card-img-top"
                        src={placeholder_image_left}
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{opportunity.title}</h5>
                        <p className="card-text">
                          {opportunity.body.slice(0, 200) + "..."}
                        </p>
                        <p className="card-text">
                          <small className="text-muted">
                            Posted by{" "}
                            <a
                              style={{ padding: "10px", fontWeight: "bold" }}
                              href={opportunity["company-link"]}
                            >
                              {opportunity.author}
                            </a>{" "}
                            on {opportunity.created_at}
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            {!endResults && (
              <div
                className="demo-inline-spacing centered-spinner"
                style={{ marginLeft: "50%" }}
              >
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
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
      </div>
    </>
  );
};

export default Opportunities;
