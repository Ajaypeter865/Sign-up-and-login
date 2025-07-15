const express = require('express')
const router = express.Router()

const { restrictToLoggedinUserOnly } = require('../middleware/auth')
const { getDashboard } = require('../controllers/dashboard')

router.get('/dashboard', restrictToLoggedinUserOnly, getDashboard)

module.exports = router;