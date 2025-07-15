const { getUser } = require('../service/auth')

async function restrictToLoggedinUserOnly(req, res, next) {
    const userUid = req.cookies.uid;

    if (!userUid) return res.redirect('/login')

    const user = getUser(userUid)
    console.log('Middleware UID', userUid);
    console.log('User from memory', user);


    if (!user) return res.redirect('/login')

    req.user = user
    next()
}

module.exports = { restrictToLoggedinUserOnly }