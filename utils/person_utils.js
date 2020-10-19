const PersonModel = require('../models/people')

const getPersonById = function(req) {
    const id = req.params.id
    return PersonModel.findById(id)
}

const getAllPeople = function(req) {
    return PersonModel.find()
}

module.exports = {
    getPersonById,
    getAllPeople
}