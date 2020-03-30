import React, { Component } from "react";

export default class DoctorLogin extends Component {
  render() {
    return (
      <div class="col-md-9 col-lg-8 mx-auto">
        <h3 class="login-heading mb-4" style={{ color: "white" }}>
          Welcome back!
        </h3>
        <form>
          <div class="form-label-group">
            <input
              type="email"
              id="inputEmail"
              class="form-control"
              placeholder="Email address"
              required
              autofocus
            />
            <label for="inputEmail">Email address</label>
          </div>

          <div class="form-label-group">
            <input
              type="password"
              id="inputPassword"
              class="form-control"
              placeholder="Password"
              required
            />
            <label for="inputPassword">Password</label>
          </div>

          <button
            class="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
            type="submit"
          >
            Sign in
          </button>
          <div class="text-center">
            <a class="small" href="#">
              Forgot password?
            </a>
          </div>
        </form>
      </div>
    );
  }
}
