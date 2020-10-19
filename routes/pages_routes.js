const express = require('express')
const router = express.Router()
const {
    display_map,
    display_tree
} = require('../controllers/page_controller')

// Returns all s
router.get('/map', display_map)

router.get('/tree', display_tree)

module.exports = router