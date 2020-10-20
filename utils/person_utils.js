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

const updatePerson = function(req) {
    const personId = req.params.id
    console.log(personId)
    const updatedInfo = req.body
    console.log(updatedInfo)
    return PersonModel.findByIdAndUpdate(personId, updatedInfo, { new: true })
}

const addChild = function(parentId, childId) {
    console.log(`ParentId: ${parentID} + childId: ${childID}`)
    // return PersonModel.findByIdAndUpdate({"_id": parentId}, {"children": [childId]})

}

const addChildToPerson = function(childId) {
    console.log(childId)

}

module.exports = {
    getPersonById,
    getAllPeople,
    deletePerson,
    updatePerson,
    addChild,
    addChildToPerson
}