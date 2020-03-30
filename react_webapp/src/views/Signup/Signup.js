import React, { Component } from "react";
import PatientSignup from '../../components/PatientSignup/PatientSignup';
import DoctorSignup from '../../components/DoctorSignup/DoctorSignup';
// import { BrowserRouter as Router, Link } from "react-router-dom";

import "./Signup.css";

export default class Signup extends Component {
  render() {
    return (
    //   <Router>
        <div class="container-fluid">
          <div class="row no-gutter">
            <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
            <div class="col-md-8 col-lg-6">
              <div class="login d-flex align-items-center py-5">
                <div class="container">
                  <div class="row">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    //   </Router>
    );
  }
}
