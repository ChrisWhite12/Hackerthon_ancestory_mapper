const express = require('express')
const router = express.Router()
const { authorise } = require("../middleware/auth_mw");
const {
    get_people,
    get_persons,
    get_person,
    create_person,
    remove_person,
    update_person,
    edit_person,
    add_child,
    add_children,
    add_event_form,
    add_event
} = require('../controllers/person_controller')

// Returns create person form
router.get('/', get_persons)

// Creates a new _person
router.post('/', create_person)

// Returns all people
router.get('/all', get_people)

// Returns one _person with given id
router.get('/:id', get_person)

// Deletes a _person with given id
router.delete('/:id/delete', remove_person)

// // Returns the update person form
router.get('/:id/edit', edit_person)

// Updates a _person with given id
router.put('/:id/edit', update_person)

// Returns create child form
router.get('/:id/add_child', add_child)

// Creates a new child
router.post('/:id/add_child', add_children)

// Returns create event form
router.get('/:id/add_event', add_event_form)

// Creates a new event
router.post('/:id/add_event', add_event)

module.exports = router