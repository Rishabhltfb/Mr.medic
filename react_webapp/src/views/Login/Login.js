import React, { Component } from "react";

import patient from "../../assets/img/patient.png";
import doctor from "../../assets/img/doctor.webp";

import DoctorLogin from "../../components/DoctorLogin/DoctorLogin";
import PatientLogin from "../../components/PatientLogin/PatientLogin";
import "./Login.css";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: ""
    };

    this.userLogin = this.userLogin.bind(this);
  }

  userLogin(event) {
    // console.log(event.target.name);
    this.setState({ [event.target.name]: event.currentTarget.value });
    console.log({ [event.target.name]: event.currentTarget.value });
  }
  render() {
    const user = this.state.user;
    let comp;

    if (user === "patient") {
      comp = <PatientLogin />;
    } else if (user === "doctor") {
      comp = <DoctorLogin />;
    } else {
      comp = (
        <div className="row">
          <div
            className="card bg-light text-white mb-3 mx-auto rounded-circle border-primary"
            style={{ maxWidth: "18rem" }}
          >
            <button
              className="btn rounded-circle"
              name="user"
              value="patient"
              onClick={this.userLogin}
            >
              <img
                className="card-img rounded-circle"
                src={patient}
                alt="logo"
                name="user"
                // value="patient"
                // onClick={this.userLogin}
              />
            </button>
          </div>
          <div
            className="card text-white bg-light mb-3 mx-auto rounded-circle border-primary"
            style={{ maxWidth: "18rem" }}
          >
            <button
              className="btn rounded-circle"
              name="user"
              value="doctor"
              onClick={this.userLogin}
            >
              <img
                className="card-img rounded-circle"
                src={doctor}
                alt="logo"
                name="user"
                // value="doctor"
                // onClick={this.userLogin}
              />
            </button>
          </div>
        </div>
      );
    }
    return (
      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
          <div className="col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                {comp}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
