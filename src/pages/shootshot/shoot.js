import { red } from "@mui/material/colors";
import React, { useEffect, useRef, useState } from "react";
import avatar from "../../components/7.png";
import avatar2 from "../../components/6.png";
import Typing from "../../components/Typing";

const Shoot = () => {
  const [message, setMessage] = useState("hello");
  const companies = [
    { id: 1, link: "#list-home", name: "Google" },
    { id: 2, link: "#list-profile", name: "Facebook" },
    { id: 3, link: "#list-messages", name: "Amazon" },
  ];

  const handleTextareaChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <body>
      <small class="text-light fw-semibold">Vertical</small>
      <div class="mt-3">
        <div class="navbar-nav ">
          <div class="nav-item d-flex align-items-center">
            <i class="bx bx-search fs-4 lh-0"></i>
            <input
              type="text"
              class="form-control border-0 shadow-none"
              placeholder="Search..."
              aria-label="Search..."
            />
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-12 mb-3 mb-md-0">
            <div class="list-group">
              {companies.map((company, index) => (
                <a
                  class={
                    index == 0
                      ? "list-group-item list-group-item-action active"
                      : "list-group-item list-group-item-action"
                  }
                  id="list-home-list"
                  data-bs-toggle="list"
                  href={company.link}
                >
                  {company.name}
                </a>
              ))}
            </div>
          </div>
          <div class="col-md-8 col-12">
            <div class="tab-content p-0">
              <div class="tab-pane fade show active" id="list-home">
                <div className="container-xxl flex-grow-1 container-p-y">
                  <div class="card-body chatB">
                    <div className="chatInside" style={{ height: "100%" }}>
                      <div className="chatLeft">
                        <div className="image">
                          <img src={avatar2} alt="" className="img-avatar" />
                        </div>
                        <div className="aBody">
                          <div className="aContent">
                            <div> Hello World </div>
                          </div>
                          <small className="chat-date">
                            <i className="tf-icons bx bx-calendar"></i>{" "}
                            22-07-2023 at 09:00
                          </small>
                        </div>
                      </div>

                      <div className="chatRight">
                        <div className="uBody">
                          <div className="uContent">
                            <div> How are you</div>
                          </div>
                          <small className="uchat-date">
                            <i className=" bx bx-calendar"></i> 22-07-2023 at
                            09:00
                          </small>
                        </div>

                        <div className="image">
                          <img src={avatar} alt="" className="img-avatar" />
                        </div>
                      </div>
                      <div className="chatRight">
                        <div className="uBody">
                          <div className="uContent">
                            <div> How are you</div>
                          </div>
                          <small className="uchat-date">
                            <i className=" bx bx-calendar"></i> 22-07-2023 at
                            09:00
                          </small>
                        </div>

                        <div className="image">
                          <img src={avatar} alt="" className="img-avatar" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="list-profile">
                Muffin lemon drops chocolate chupa chups jelly beans dessert
                jelly-o. Soufflé gummies gummies. Ice cream powder marshmallow
                cotton candy oat cake wafer. Marshmallow gingerbread tootsie
                roll. Chocolate cake bonbon jelly beans lollipop jelly beans
                halvah marzipan danish pie. Oat cake chocolate cake pudding bear
                claw liquorice gingerbread icing sugar plum brownie. Toffee
                cookie apple pie cheesecake bear claw sugar plum wafer gummi
                bears fruitcake.
              </div>
              <div class="tab-pane fade" id="list-messages">
                Ice cream dessert candy sugar plum croissant cupcake tart pie
                apple pie. Pastry chocolate chupa chups tiramisu. Tiramisu
                cookie oat cake. Pudding brownie bonbon. Pie carrot cake
                chocolate macaroon. Halvah jelly jelly beans cake macaroon
                jelly-o. Danish pastry dessert gingerbread powder halvah. Muffin
                bonbon fruitcake dragée sweet sesame snaps oat cake marshmallow
                cheesecake. Cupcake donut sweet bonbon cheesecake soufflé
                chocolate bar.
              </div>
              <div class="tab-pane fade" id="list-settings">
                Marzipan cake oat cake. Marshmallow pie chocolate. Liquorice oat
                cake donut halvah jelly-o. Jelly-o muffin macaroon cake
                gingerbread candy cupcake. Cake lollipop lollipop jelly brownie
                cake topping chocolate. Pie oat cake jelly. Lemon drops halvah
                jelly cookie bonbon cake cupcake ice cream. Donut tart bonbon
                sweet roll soufflé gummies biscuit. Wafer toffee topping jelly
                beans icing pie apple pie toffee pudding. Tiramisu powder
                macaroon tiramisu cake halvah.
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Shoot;
