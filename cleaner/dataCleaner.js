const _ = require('lodash');
const User = require("../models/User");

const cleanData = async (data) =>{
    // 1. Handle Missing Values
    data = await User.find();
    const cleanedData = _.map(data, row => {
        // Replace missing values with appropriate strategy (e.g., imputation)
        row.age = _.defaultTo(row.age, 0); // Replace missing age with 0
        return row;
    });

    
    return cleanedData;
}

module.exports = cleanData;