const validator = require("validator");
var _ = require("lodash");

module.exports = function validateLoginInput(data) {
  let errors = {};

  if (_.isEmpty(data.email)) {
    errors.email = "email feild can not be empty";
  }

  if (!_.isEmpty(data.email)) {
    if (!validator.isEmail(data.email)) {
      errors.email = "invalid email";
    }
  }

  if (_.isEmpty(data.password)) {
    errors.password = "password feild can not be empty";
  }

  return {
    errors,
    isValid: _.isEmpty(errors)
  };
};
