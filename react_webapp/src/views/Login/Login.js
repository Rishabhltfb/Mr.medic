import React, { Component } from "react";
import DoctorLogin from '../../components/DoctorLogin/DoctorLogin';
import PatientLogin from '../../components/PatientLogin/PatientLogin'
import "./Login.css";
class Login extends Component {
  render() {
    return (
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
    );
  }
}

export default Login;
