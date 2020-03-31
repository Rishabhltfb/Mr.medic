import React, { Component } from "react";

export default class DoctorSignup extends Component {
  render() {
    return (
      <div className="col-md-9 col-lg-8 mx-auto">
        <h3 className="login-heading mb-4 mt-5" style={{ color: "white" }}>
          Welcome Doctor's!
        </h3>
        <form className="form-signin">
          <div className="form-label-group">
            <input
              type="text"
              id="inputUserame"
              className="form-control"
              placeholder="Name"
              required
              autofocus
            />
            <label for="inputUserame">Name</label>
          </div>

          <div className="form-label-group">
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Email address"
              required
            />
            <label for="inputEmail">Email address</label>
          </div>

          <div className="form-label-group">
            <input
              type="text"
              id="inputClinicAddress"
              className="form-control"
              placeholder="Clinic/Hospital Address"
              required
            />
            <label for="inputClinicAddress">Clinic/Hospital Address</label>
          </div>

          <div className="form-label-group">
            <input
              type="text"
              id="inputCity"
              className="form-control"
              placeholder="City"
              required
            />
            <label for="inputCity">City</label>
          </div>

          <div className="form-label-group">
            <input
              type="text"
              id="inputOpeningTime"
              className="form-control"
              placeholder="Opening Time"
              required
            />
            <label for="inputOpeningTime">Opening Time</label>
          </div>

          <div className="form-label-group">
            <input
              type="text"
              id="inputClosingTime"
              className="form-control"
              placeholder="Closing Time"
              required
            />
            <label for="inputClosingTime">Closing Time</label>
          </div>
          <div className="form-label-group">
            <input
              type="text"
              id="specialization"
              className="form-control"
              placeholder="Specialization"
              required
            />
            <label for="specialization">Specialization</label>
          </div>

          <div className="form-label-group">
            <input
              type="text"
              id="inputCanTreatFor"
              className="form-control"
              placeholder="Can Treat For"
              required
            />
            <label for="inputCanTreatFor">Can Treat For</label>
          </div>
          <div className="form-label-group">
            <input
              type="number"
              id="inputPhoneNumber"
              className="form-control"
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
                  name="customRadioInline1"
                  className="custom-control-input"
                />
                <label className="custom-control-label" for="inputMale">
                  Male
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  id="inputFemale"
                  name="customRadioInline1"
                  className="custom-control-input"
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
