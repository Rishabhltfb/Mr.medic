import React, { Component } from "react";
import classnames from "classnames";
import axios from 'axios'

export default class DoctorLogin extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const doctorData = {
      email: this.state.email,
      password: this.state.password
    };
    console.log(doctorData);
    const url="https://evening-dusk-90900.herokuapp.com/api/doctors/login"
    axios.post(url, doctorData)
    .then(response => {
      console.log(response.data)
      window.location = "/discoverPatient";
    })
    .catch(err => console.log(err))


  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    // console.log({ [event.target.name]: event.target.value });
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="col-md-9 col-lg-8 mx-auto">
        <h3 className="login-heading mb-4" style={{ color: "white" }}>
          Welcome back!
        </h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-label-group">
            <input
              type="email"
              id="inputEmail"
              className={classnames("form-control", {
                "is-invalid": errors.email
              })}
              placeholder="Email address"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
              required
              autoFocus
            />
            <label htmlFor="inputEmail">Email address</label>
            {errors.email && (
              <div className="is-invalid-feedback">{errors.email}</div>
            )}
          </div>

          <div className="form-label-group">
            <input
              type="password"
              id="inputPassword"
              className={classnames("form-control", {
                "is-invalid": errors.password
              })}
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
              required
            />
            <label htmlFor="inputPassword">Password</label>
            {errors.password && (
              <div className="is-invalid-feedback">{errors.password}</div>
            )}
          </div>

          <button
            className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
            type="submit"
          >
            Sign in
          </button>
        </form>
      </div>
    );
  }
}
