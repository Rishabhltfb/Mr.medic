import React, { Component } from "react";
import "./Landing.css";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <header>
          <div class="overlay"></div>
          <video
            playsinline="playsinline"
            autoplay="autoplay"
            muted="muted"
            loop="loop"
          >
            <source
              src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"
              type="video/mp4"
            />
          </video>
          <div class="container h-100">
            <div class="d-flex h-100 text-center align-items-center">
              <div class="w-100 text-white">
                <h1 class="display-3">Patient Database</h1>
                <p class="lead mb-0">The Computer-Based Patient Record System</p>
              </div>
            </div>
          </div>
        </header>

        <section class="my-5">
          <div class="container">
            <div class="row">
              <div class="col-md-8 mx-auto">
                <p>
                  lorem ipsum
                </p>
                <p>
                  lorem ipsum
                </p>
                <p>
                  lorem ipsum
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default LandingPage;
