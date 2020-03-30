const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DoctorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    avatar: {
        type: String,
        default: 'default avatar path here'
    },
    city: {
        type: String,
        required: true
    },
    clinickAddress: {
        type: String,
        required: true
    },
    gender: {
        type: String,
    },
    specialization: {
        type: String,
        required: true
    },
    canTreatFor: [
        {
            disease: {
                type: String
            }
        }
    ],
    openingTime: {        //type is taken string because there is no shema type avialable for time
        type: String
    },
    closingTime: {
        type: String
    }
});

module.exports = Doctor = mongoose.model('doctors', DoctorSchema);

