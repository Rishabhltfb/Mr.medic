import React, { Component } from "react";

export default class DoctorSignup extends Component {
  render() {
    return (
      <div class="col-md-9 col-lg-8 mx-auto">
        <h3 class="login-heading mb-4 mt-5" style={{ color: "white" }}>
          Welcome Doctor's!
        </h3>
        <form class="form-signin">
          <div class="form-label-group">
            <input
              type="text"
              id="inputUserame"
              class="form-control"
              placeholder="Name"
              required
              autofocus
            />
            <label for="inputUserame">Name</label>
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

          <div class="form-label-group">
            <input
              type="text"
              id="inputClinicAddress"
              class="form-control"
              placeholder="Clinic/Hospital Address"
              required
            />
            <label for="inputClinicAddress">Clinic/Hospital Address</label>
          </div>

          <div class="form-label-group">
            <input
              type="text"
              id="inputCity"
              class="form-control"
              placeholder="City"
              required
            />
            <label for="inputCity">City</label>
          </div>

          <div class="form-label-group">
            <input
              type="text"
              id="inputOpeningTime"
              class="form-control"
              placeholder="Opening Time"
              required
            />
            <label for="inputOpeningTime">Opening Time</label>
          </div>

          <div class="form-label-group">
            <input
              type="text"
              id="inputClosingTime"
              class="form-control"
              placeholder="Closing Time"
              required
            />
            <label for="inputClosingTime">Closing Time</label>
          </div>
          <div class="form-label-group">
            <input
              type="text"
              id="specialization"
              class="form-control"
              placeholder="Specialization"
              required
            />
            <label for="specialization">Specialization</label>
          </div>

          <div class="form-label-group">
            <input
              type="text"
              id="inputCanTreatFor"
              class="form-control"
              placeholder="Can Treat For"
              required
            />
            <label for="inputCanTreatFor">Can Treat For</label>
          </div>
          <div class="form-label-group">
            <input
              type="number"
              id="inputPhoneNumber"
              class="form-control"
              placeholder="Phone Number"
              required
            />
            <label for="inputPhoneNumber">Phone Number</label>
          </div>

          <fieldset class="form-group" style={{ color: "whitesmoke" }}>
            <div class="row">
              <legend class="col-form-label col-sm-2 pt-0">Gender</legend>
              <div class="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  id="inputMale"
                  name="customRadioInline1"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="inputMale">
                  Male
                </label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  id="inputFemale"
                  name="customRadioInline1"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="inputFemale">
                  Female
                </label>
              </div>
            </div>
          </fieldset>

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
    );
  }
}
