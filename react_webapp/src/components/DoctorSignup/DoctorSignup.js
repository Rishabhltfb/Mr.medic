import React, { Component } from 'react'

export default class DoctorSignup extends Component {
    render() {
        return (
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
                          class="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
                          type="submit"
                        >
                          Sign Up
                        </button>
                        {/* <Link
                          class="d-block text-center mt-2 small"
                          to="/login"
                        >
                          Login In
                        </Link> */}
                      </form>
                    </div>
        )
    }
}
