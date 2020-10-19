const express = require('express')
const router = express.Router()

const {
    get_persons,
    get_person,
    create_person,
    remove_person,
    change_person
} = require('../controllers/person_controller')

// Returns all _persons
router.get('/', get_persons)

// Returns one _person with given id
router.get('/:id', get_person)

// Creates a new _person
router.post('/', create_person)

// Deletes a _person with given id
router.delete('/:id', remove_person)

// Updates a _person with given id
router.patch('/:id', change_person)

module.exports = router