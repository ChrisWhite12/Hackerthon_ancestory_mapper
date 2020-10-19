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
    }
});

module.exports = mongoose.model('Person', Person);
