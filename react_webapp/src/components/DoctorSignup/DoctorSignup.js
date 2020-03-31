import React, { Component } from "react";
import classnames from "classnames";
import axios from "axios";
export default class DoctorSignup extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      phone: "",
      city: "",
      clinickAddress: "",
      gender: "",
      specialization: "",
      canTreatFor: "",
      openingTime: "",
      closingTime: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.setGender = this.setGender.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const newDoctorUser = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      city: this.state.city,
      clinickAddress: this.state.clinickAddress,
      gender: this.state.gender,
      specialization: this.state.specialization,
      canTreatFor: this.state.canTreatFor,
      openingTime: this.state.openingTime,
      closingTime: this.state.clinickAddress
    };

    console.log(newDoctorUser);
    const url = "https://evening-dusk-90900.herokuapp.com/api/doctors/register";
    axios
      .post(url, { newDoctorUser })
      .then(response => {
        console.log(response.data);
        window.location = "/discoverPatient";
      })
      .catch(err => console.log(err));
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    // console.log({ [event.target.name]: event.target.value });
  }

  setGender(event) {
    this.setState({ [event.target.name]: event.target.value });
    // console.log({ [event.target.name]: event.target.value });
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="col-md-9 col-lg-8 mx-auto">
        <h3 className="login-heading mb-4 mt-5" style={{ color: "white" }}>
          Welcome Doctor's!
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
              value={this.state.email}
              onChange={this.onChange}
              className={classnames("form-control", {
                "is-invalid": errors.email
              })}
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
              type="text"
              id="inputClinicAddress"
              name="clinickAddress"
              className={classnames("form-control", {
                "is-invalid": errors.clinickAddress
              })}
              value={this.state.clinickAddress}
              onChange={this.onChange}
              placeholder="Clinic/Hospital Address"
              required
            />
            <label for="inputClinicAddress">Clinic/Hospital Address</label>
            {errors.clinickAddress && (
              <div className="is-invalid-feedback">{errors.clinickAddress}</div>
            )}
          </div>

          <div className="form-label-group">
            <input
              type="text"
              id="inputCity"
              name="city"
              className={classnames("form-control", {
                "is-invalid": errors.city
              })}
              value={this.state.value}
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
              id="inputOpeningTime"
              name="openingTime"
              className="form-control"
              value={this.state.openingTime}
              onChange={this.onChange}
              placeholder="Opening Time"
              required
            />
            <label for="inputOpeningTime">Opening Time</label>
          </div>

          <div className="form-label-group">
            <input
              type="text"
              id="inputClosingTime"
              name="closingTime"
              className="form-control"
              value={this.state.closingTime}
              onChange={this.onChange}
              placeholder="Closing Time"
              required
            />
            <label for="inputClosingTime">Closing Time</label>
          </div>
          <div className="form-label-group">
            <input
              type="text"
              id="specialization"
              name="specialization"
              className={classnames("form-control", {
                "is-invalid": errors.specialization
              })}
              value={this.state.specialization}
              onChange={this.onChange}
              placeholder="Specialization"
              required
            />
            <label for="specialization">Specialization</label>
            {errors.specialization && (
              <div className="is-invalid-feedback">{errors.specialization}</div>
            )}
          </div>

          <div className="form-label-group">
            <input
              type="text"
              id="inputCanTreatFor"
              name="canTreatFor"
              className="form-control"
              value={this.state.canTreatFor}
              onChange={this.onChange}
              placeholder="Can Treat For"
              required
            />
            <label for="inputCanTreatFor">Can Treat For</label>
          </div>
          <div className="form-label-group">
            <input
              type="text"
              id="inputPhoneNumber"
              name="phone"
              className="form-control"
              value={this.state.phone}
              onChange={this.onChange}
              placeholder="Phone Number"
              required
            />
            <label for="inputPhoneNumber">Phone Number</label>
          </div>

          <fieldset className="form-group" style={{ color: "whitesmoke" }}>
            <div className="row">
              <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  id="inputMale"
                  name="gender"
                  value="Male"
                  className="custom-control-input"
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
                  value="Female"
                  className="custom-control-input"
                  onClick={this.setGender}
                />
                <label className="custom-control-label" for="inputFemale">
                  Female
                </label>
              </div>
            </div>
          </fieldset>

          <div className="form-label-group">
            <input
              type="password"
              id="inputPassword"
              name="password"
              className={classnames("form-control", {
                "is-invalid": errors.openingTime
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
