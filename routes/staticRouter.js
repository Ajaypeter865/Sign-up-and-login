const express = require('express')
const router = express.Router()
const { getUser } = require('../service/auth')
router.get('/', async (req, res) => {
    return res.render('signup', { success: null, error: null })
})

router.get('/', async (req, res) => {
    return res.render('signup', { success: null, error: null })
})
// router.get('/', (req, res) => {
//     const userUid = req.cookies.uid;
//     const user = getUser(userUid)

//     if (user) {
//         return res.redirect('/dashboard')
//     }
//     res.render('signup', { error: null, success: null })
// })


module.exports = router;