import React from "react";
import './LandingCards.css'
import { FaCheck } from "react-icons/fa";
import { IconContext } from "react-icons";
export default function LandingCards() {
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
              <div className="card-body ">
                <h5 className="card-title text-muted text-uppercase text-center ">
                  We Prepare
                </h5>
                <hr />
                <ul className="fa-ul">
                  <li>
                    <IconContext.Provider value={{ className: "faCheck" }}>
                      <FaCheck />
                    </IconContext.Provider>
                    <strong> Unique health record for each patient.</strong>
                  </li>
                  <br />
                  <li>
                    <IconContext.Provider value={{ className: "faCheck" }}>
                      <FaCheck />
                    </IconContext.Provider>
                    <strong> Access of data anytime & anywhere. </strong>
                  </li>
                  <br />
                  <li>
                    <IconContext.Provider value={{ className: "faCheck" }}>
                      <FaCheck />
                    </IconContext.Provider>
                    <strong> Data standardization and unification.</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
              <div className="card-body">
                <h5 className="card-title text-muted text-uppercase text-center">
                  Outstanding Features
                </h5>
                <hr />
                <ul className="fa-ul">
                  <li>
                    <IconContext.Provider value={{ className: "faCheck" }}>
                      <FaCheck />
                    </IconContext.Provider>
                    <strong> Register Patient</strong>
                  </li>
                  <br />
                  <li>
                    <IconContext.Provider value={{ className: "faCheck" }}>
                      <FaCheck />
                    </IconContext.Provider>
                    <strong> See Doctor's Profile</strong>
                  </li>
                  <br />
                  <li>
                    <IconContext.Provider value={{ className: "faCheck" }}>
                      <FaCheck />
                    </IconContext.Provider>
                    <strong> Web Portal</strong>
                  </li>
                  <br />
                  <li>
                    <IconContext.Provider value={{ className: "faCheck" }}>
                      <FaCheck />
                    </IconContext.Provider>
                    <strong> Mobile App</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
              <div className="card-body">
                <h5 className="card-title text-muted text-uppercase text-center">
                  Perks
                </h5>
                <hr />
                <ul className="fa-ul">
                  <li>
                    <IconContext.Provider value={{ className: "faCheck" }}>
                      <FaCheck />
                    </IconContext.Provider>
                    <strong> Unique QR Code</strong>
                  </li>
                  <br />
                  <li>
                    <IconContext.Provider value={{ className: "faCheck" }}>
                      <FaCheck />
                    </IconContext.Provider>
                    <strong> Security of Data</strong>
                  </li>
                  <br />
                  <li>
                    <IconContext.Provider value={{ className: "faCheck" }}>
                      <FaCheck />
                    </IconContext.Provider>
                    <strong> Appointment time & management</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
