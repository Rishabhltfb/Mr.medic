const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReportSchema = new Schema({
    patient: {
        type: Schema.Types.ObjectId,
        ref: "patients"
    },
    doctor: {
        type: Schema.Types.ObjectId,
        ref: "doctors"
    },
    heading: {
        type: String,
        default: "Current Report"
    },
    name: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    dateStr: {
        type: String
    },
    disease: {
        type: String,
    },
    reportImage: {
        type: String,
    },
    extractedText: {
        type: String
    },
    suggestedMedicines: [
        {
            name: {
                type: String,
                required: true
            },
            timesADay: {
                type: Number,
                required: true
            },
            DrRemark: {
                type: String
            },
            description: {
                type: String
            }
        }
    ],
    patientNotes:{
        type: String
    },
    remark: {
        type: String
    }
});

module.exports = Report = mongoose.model('reports', ReportSchema);