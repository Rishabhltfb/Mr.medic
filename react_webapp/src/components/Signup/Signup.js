import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import "./Signup.css";

export default class Signup extends Component {
  render() {
    return (
      <Router>
        <div class="container-fluid">
          <div class="row no-gutter">
            <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
            <div class="col-md-8 col-lg-6">
              <div class="login d-flex align-items-center py-5">
                <div class="container">
                  <div class="row">
                    <div class="col-md-9 col-lg-8 mx-auto">
                      <h3 class="login-heading mb-4" style={{ color: "white" }}>
                        Welcome back!
                      </h3>
                      <form class="form-signin">
                        <div class="form-label-group">
                          <input
                            type="text"
                            id="inputUserame"
                            class="form-control"
                            placeholder="Username"
                            required
                            autofocus
                          />
                          <label for="inputUserame">Username</label>
                        </div>

                        <div class="form-label-group">
                          <input
                            type="email"
                            id="inputEmail"
                            class="form-control"
                            placeholder="Email address"
                            required
                          />
                          <label for="inputEmail">Email address</label>
                        </div>

                        <hr />

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

                        <div class="form-label-group">
                          <input
                            type="password"
                            id="inputConfirmPassword"
                            class="form-control"
                            placeholder="Password"
                            required
                          />
                          <label for="inputConfirmPassword">
                            Confirm password
                          </label>
                        </div>

                        <button
                          class="btn btn-lg btn-primary btn-block text-uppercase"
                          type="submit"
                        >
                          Register
                        </button>
                        <Link
                          class="d-block text-center mt-2 small"
                          to="/login"
                        >
                          Login In
                        </Link>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
