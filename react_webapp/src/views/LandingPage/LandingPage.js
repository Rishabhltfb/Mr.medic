import React, { Component } from "react";
import LandingCards from "../LandingCards/LandingCards";
import "./Landing.css";
import video from "../../assets/front.mp4";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="overlay"></div>
          <video
            playsinline="playsinline"
            autoplay="autoplay"
            muted="muted"
            loop="loop"
          >
            <source
              src={video}
              type="video/mp4"
            />
          </video>
          <div className="container h-100">
            <div className="d-flex h-100 text-center align-items-center">
              <div className="w-100 text-white">
                <h1 className="display-3">Patient Data Management System</h1>
                <p className="lead mb-0">
                  The Computer-Based Patient Record System
                </p>
              </div>
            </div>
          </div>
        </header>
        <LandingCards />
      </div>
    );
  }
}

export default LandingPage;
