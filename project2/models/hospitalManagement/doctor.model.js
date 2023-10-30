import mongoose from 'mongoose';

const hospitalHoursSchema = new mongoose.Schema({
    worksInHospitals: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hospital'
        }
    ],
    hrsWorking: {
        type: Number,
        required: true
    }
})

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    experience: {
        type: Number,
        required: true,
        default: 0
    },
    worksInHospitals: {
        type: [hospitalHoursSchema]
    }
}, { timestamps: true })

export const Doctor = mongoose.model('Doctor', doctorSchema)