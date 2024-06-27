// 1. import
const mongoose = require('mongoose');

// 2.creating schema
const schema = mongoose.Schema({
    Name : String,
    Age : Number,
    Place : String,
    Phone : Number
})

const userModel = mongoose.model("user", schema);  //user is name of collection and need to create using schema
module.exports = userModel;