const validator = require("validator");
var _ = require("lodash");

module.exports = function validateReportLogin(data) {
  let errors = {};

  if (_.isEmpty(data.disease)) {
    errors.disease = "please fill the disease";
  }

  if (_.isEmpty(data.reportImage)) {
    errors.reportImage = "please upload scanned copy of your medical report";
  }

  return {
    errors,
    isValid: _.isEmpty(errors)
  };
};