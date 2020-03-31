import React, { Component } from "react";

import patient from "../../assets/img/patient.png";
import doctor from "../../assets/img/doctor.webp";

import PatientSignup from "../../components/PatientSignup/PatientSignup";
import DoctorSignup from "../../components/DoctorSignup/DoctorSignup";
// import { BrowserRouter as Router, Link } from "react-router-dom";

import "./Signup.css";

export default class Signup extends Component {
  constructor() {
    super();
    this.state = {
      user: ""
    };

    this.userSignup = this.userSignup.bind(this);
  }

  userSignup(event) {
    // console.log(event.target.name);
    this.setState({ [event.target.name]: event.currentTarget.value });
    console.log({ [event.target.name]: event.currentTarget.value });
  }

  render() {
    const user = this.state.user;
    let comp;

    if (user === "patient") {
      comp = <PatientSignup />;
    } else if (user === "doctor") {
      comp = <DoctorSignup />;
    } else {
      comp = (
        <div className="row">
          <div
            className="card text-white bg-light mb-3 mx-auto rounded-circle border-primary"
            style={{ maxWidth: "18rem" }}
          >
            <button
              className="btn rounded-circle"
              name="user"
              value="doctor"
              onClick={this.userSignup}
            >
              <img
                className="card-img rounded-circle"
                src={doctor}
                alt="logo"
                name="user"
                // value="doctor"
                // onClick={this.userSignup}
              />
            </button>
          </div>
          <div
            className="card bg-light text-white mb-3 mx-auto rounded-circle border-primary"
            style={{ maxWidth: "18rem" }}
          >
            <button
              className="btn rounded-circle"
              name="user"
              value="patient"
              onClick={this.userSignup}
            >
              <img
                className="card-img rounded-circle"
                src={patient}
                alt="logo"
                name="user"
                // value="patient"
                // onClick={this.userSignup}
              />
            </button>
          </div>
        </div>
      );
    }
    return (
      //   <Router>
      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
          <div className="col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-5">
              <div className="container">{comp}</div>
            </div>
          </div>
        </div>
      </div>
      //   </Router>
    );
  }
}
