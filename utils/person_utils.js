const PersonModel = require('../models/people')

const getPersonById = function(req) {
    const id = req.params.id
    return PersonModel.findById(id)
}

const getAllPeople = function(req) {
    return PersonModel.find()
}

const deletePerson = function(req) {
    const personId = req.params.id
    return PersonModel.deleteOne({ "_id": personId })
}

const editPerson = function(req) {
    
}

module.exports = {
    getPersonById,
    getAllPeople,
    deletePerson
}