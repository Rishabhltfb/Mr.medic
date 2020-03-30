import React, { Component } from "react";

export default class PatientLogin extends Component {
  render() {
    return (
      <div>
        <div className="col-md-9 col-lg-8 mx-auto">
          <h3 className="login-heading mb-4" style={{ color: "white" }}>
            Welcome back!
          </h3>
          <form>
            <div className="form-label-group">
              <input
                type="email"
                id="inputEmail"
                className="form-control"
                placeholder="Email address"
                required
                autofocus
              />
              <label for="inputEmail">Email address</label>
            </div>

            <div className="form-label-group">
              <input
                type="password"
                id="inputPassword"
                className="form-control"
                placeholder="Password"
                required
              />
              <label for="inputPassword">Password</label>
            </div>

            <button
              className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
              type="submit"
            >
              Sign in
            </button>
            <div className="text-center">
              <a className="small" href="#">
                Forgot password?
              </a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
