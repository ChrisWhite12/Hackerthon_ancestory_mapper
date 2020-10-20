const express = require('express')
const router = express.Router()
const { authorise } = require("../middleware/auth_mw");
const {
    get_people,
    get_persons,
    get_person,
    create_person,
    remove_person,
    change_person
} = require('../controllers/person_controller')

// Returns create person form
router.get('/', authorise, get_persons)

// Creates a new _person
router.post('/', authorise, create_person)

// Returns all people
router.get('/all', authorise, get_people)

// Returns one _person with given id
router.get('/:id', authorise, get_person)

// Deletes a _person with given id
router.delete('/:id', authorise, remove_person)

// // Returns the update person form
// router.get('/:id/update', change_person)

// Updates a _person with given id
router.patch('/:id/update', authorise, change_person)

module.exports = router