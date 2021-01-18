const express = require('express')
const { getReverseText } = require('../controllers/iecho.controller')
const router = express.Router()

/* GET users listing. */
router.get('/iecho', getReverseText)

module.exports = router
