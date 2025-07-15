const express = require('express')
const router = express.Router()

const signupController = require('../Controllers/signup')


router.post('/signup', signupController.postSignup)
router.post('/login', signupController.postLogin)


module.exports = router