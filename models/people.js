const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Person = new Schema({
     firstName: {
        type: String,
        required: true
    },
    middleName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    DOB: {
        type: Date,
        required: true
    },
    birthCity: {
        type: String,
        required: true
    },
    birthState: {
        type: String,
        required: true
    },
    birthCountry: {
        type: String,
        required: true
    },
    children: [{
        type: String,
        required: false,
    }]
});

module.exports = mongoose.model('Person', Person);
