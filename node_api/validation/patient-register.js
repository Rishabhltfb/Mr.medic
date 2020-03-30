const validator = require('validator');
var _ = require('lodash');

module.exports = function validatePatientRegister(data) {
    
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
    if(_.isEmpty(data.age)) {
        errors.age = 'age field can not be empty';
    }
    if(_.isEmpty(data.city)) {
        errors.city = 'city field can not be empty';
    }
    if(!_.isEmpty(data.address)) {
        if(!validator.isLength(data.address, {min: 5, max: 300})) {
            errors.address = 'address should be between 5 and 300 characters long';
        }
    }
    if(_.isEmpty(data.gender)) {
        errors.gender = 'gender field can not be empty';
    }

    return {
        errors,
        isValid: _.isEmpty(errors)
    };
};