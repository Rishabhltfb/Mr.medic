import React, { Component } from "react";
import classnames from "classnames";
import axios from "axios";

export default class PatientSignup extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      phone: "",
      city: "",
      age: "",
      gender: "",
      address: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.setGender = this.setGender.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const newPatientUser = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      city: this.state.city,
      gender: this.state.gender,
      address: this.state.address,
      password: this.state.password,
      age: this.state.age
    };

    console.log(newPatientUser);
    console.log(newPatientUser);
    const url = "https://evening-dusk-90900.herokuapp.com/api/patient/register";
    axios
      .post(url, { newPatientUser })
      .then(response => {
        console.log(response.data);
        window.location = "/discoverPatient";
      })
      .catch(err => console.log(err));
      
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    console.log({ [event.target.name]: event.target.value });
  }

  setGender(event) {
    this.setState({ [event.target.name]: event.target.value });
    console.log({ [event.target.name]: event.target.value });
  }
  render() {
    const { errors } = this.state;
    return (
      <div className="col-md-9 col-lg-8 mx-auto">
        <h3 className="login-heading mb-4" style={{ color: "white" }}>
          Welcome Patients!
        </h3>
        <form className="form-signin" onSubmit={this.onSubmit}>
          <div className="form-label-group">
            <input
              type="text"
              id="inputUserame"
              name="name"
              className={classnames("form-control", {
                "is-invalid": errors.name
              })}
              value={this.state.name}
              onChange={this.onChange}
              placeholder="Name"
              required
              autofocus
            />
            <label for="inputUserame">Name</label>
            {errors.name && (
              <div className="is-invalid-feedback">{errors.name}</div>
            )}
          </div>

          <div className="form-label-group">
            <input
              type="email"
              id="inputEmail"
              name="email"
              className={classnames("form-control", {
                "is-invalid": errors.email
              })}
              value={this.state.email}
              onChange={this.onChange}
              placeholder="Email address"
              required
            />
            <label for="inputEmail">Email address</label>
            {errors.email && (
              <div className="is-invalid-feedback">{errors.email}</div>
            )}
          </div>

          <div className="form-label-group">
            <input
              type="number"
              id="inputPhoneNumber"
              className="form-control"
              name="phone"
              value={this.state.phone}
              onChange={this.onChange}
              placeholder="Phone Number"
              required
            />
            <label for="inputPhoneNumber">Phone Number</label>
          </div>

          <div className="form-label-group">
            <input
              type="text"
              id="inputAddress"
              className="form-control"
              name="address"
              value={this.state.address}
              onChange={this.onChange}
              placeholder="Address"
              required
            />
            <label for="inputAddress">Address</label>
          </div>

          <div className="form-label-group">
            <input
              type="text"
              id="inputCity"
              name="city"
              className={classnames("form-control", {
                "is-invalid": errors.city
              })}
              value={this.state.city}
              onChange={this.onChange}
              placeholder="City"
              required
            />
            <label for="inputCity">City</label>
            {errors.city && (
              <div className="is-invalid-feedback">{errors.city}</div>
            )}
          </div>

          <div className="form-label-group">
            <input
              type="text"
              id="inputAge"
              name="age"
              className={classnames("form-control", {
                "is-invalid": errors.age
              })}
              value={this.state.age}
              onChange={this.onChange}
              placeholder="Age"
              required
            />
            <label for="inputAge">Age</label>
            {errors.age && (
              <div className="is-invalid-feedback">{errors.age}</div>
            )}
          </div>

          <fieldset className="form-group" style={{ color: "whitesmoke" }}>
            <div className="row">
              <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  id="inputMale"
                  name="gender"
                  value="male"
                  className={classnames("custom-control-input", {
                    "is-invalid": errors.password
                  })}
                  onClick={this.setGender}
                />
                <label className="custom-control-label" for="inputMale">
                  Male
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  id="inputFemale"
                  name="gender"
                  value="female"
                  className={classnames("custom-control-input", {
                    "is-invalid": errors.password
                  })}
                  onClick={this.setGender}
                />
                <label className="custom-control-label" for="inputFemale">
                  Female
                </label>
                {errors.gender && (
                  <div className="is-invalid-feedback">{errors.gender}</div>
                )}
              </div>
            </div>
          </fieldset>

          <div className="form-label-group">
            <input
              type="password"
              id="inputPassword"
              name="password"
              className={classnames("form-control", {
                "is-invalid": errors.password
              })}
              value={this.state.password}
              onChange={this.onChange}
              placeholder="Password"
              required
            />
            <label for="inputPassword">Password</label>
            {errors.password && (
              <div className="is-invalid-feedback">{errors.password}</div>
            )}
          </div>
          <button
            className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
            type="submit"
          >
            Sign Up
          </button>
          {/* <Link
                          className="d-block text-center mt-2 small"
                          to="/login"
                        >
                          Login In
                        </Link> */}
        </form>
      </div>
    );
  }
}
