const mongoose = require('mongoose');

const {Schema } = mongoose;

const userSchema = new Schema({
    company:{
        type: String,
        isRequired:true
    },
    department:{
        type: String,
        isRequired:true
    },
    employee_id:{
        type: Number,
        isRequired:true
    },
    age:{
        type: Number,
        isRequired:true
    },
    age_when_joined:{
        type: Number,
        isRequired:true
    },
    years_in_the_company:{
        type: Number,
        isRequired:true
    },
    salary:{
        type: Number,
        isRequired:true
    },
    annual_bonus:{
        type: Number,
        isRequired:true
    },
    prior_years_experience:{
        type: Number,
        isRequired:true
    },
    full_time:{
        type: Number,
        isRequired:true
    },
    part_time:{
        type: Number,
        isRequired:true
    },
    contractor:{
        type: Number,
        isRequired:true
    },
})

module.exports = mongoose.model('user', userSchema)