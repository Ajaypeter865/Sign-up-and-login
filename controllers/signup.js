const signUp = require('../model/signup')
const { v4: uuidV4 } = require('uuid')
const { setUser } = require('../service/auth')

async function postSignup(req, res) {
    const { txt, email, pswd } = req.body
    console.log('Received', txt, email, pswd);

    try {
        await signUp.create({
            user_name: txt,
            email: email,
            password: pswd,
        })
        res.redirect('/')

    } catch (error) {
        console.error('Error during signup', error);
        res.status(500).send('Signup failed')
    }

}

async function postLogin(req, res) {
    const { email, pswd } = req.body
    try {
        const singupUser = await signUp.findOne({ email })
        if (!singupUser || singupUser.password !== pswd) {
            return res.render('signup', { error: 'Invalid username or password' })
        }
        const sessionId = uuidV4()

        setUser(sessionId, singupUser)

        res.cookie('uid', sessionId)

        res.redirect('/dashboard')
    } catch (error) {
        console.error('Login error', error);
        res.status(500).send('Server error')
    }
}


module.exports = {
    postSignup,
    postLogin,
}