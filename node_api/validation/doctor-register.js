const validator = require('validator');
var _ = require('lodash');

module.exports = function validateDoctorRegister(data) {
    
    let errors = {};
    
    if(_.isEmpty(data.name)) {
        errors.name = 'name feild can not be empty';
    }
    if(!_.isEmpty(data.name)) {
        if(!validator.isLength(data.name, {min: 3, max: 40})) {
            errors.name = 'name must be between 3 and 40 characters long';
        }
    }
    if(!_.isEmpty(data.email)) {
        if(!validator.isEmail(data.email)) {
            errors.email = 'email is not valid';
        }
    }
    if(_.isEmpty(data.email)) {
        errors.email = 'email feild can not be empty';
    }
    if(_.isEmpty(data.password)) {
        errors.password = 'password feild can not be empty';
    }
    if(_.isEmpty(data.city)) {
        errors.city = 'city field can not be empty';
    }
    if(_.isEmpty(data.clinickAddress)) {
        errors.clinickAddress = 'clinick Address is required';
    }
    if(!_.isEmpty(data.clinickAddress)) {
        if(!validator.isLength(data.clinickAddress, {min: 5, max: 300})) {
            errors.address = 'address should be between 5 and 300 characters long';
        }
    }
    if(_.isEmpty(data.specialization)) {
        errors.specialization = 'specialization is required';
    }

    return {
        errors,
        isValid: _.isEmpty(errors)
    };
};