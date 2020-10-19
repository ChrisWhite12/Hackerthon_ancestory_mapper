const PersonModel = require('../models/people')

const getPersonById = function(req) {
    const id = req.params.id
    return PersonModel.findById(id)
}

module.exports = {
    getPersonById
}