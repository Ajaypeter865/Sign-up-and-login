const express = require('express')
const app = express()

const path = require('path')
const cookieParser = require('cookie-parser')
require('dotenv').config();
const staticRoute = require('./routes/staticRouter')
const signUpRouter = require('./Routes/signup')
const { restrictToLoggedinUserOnly } = require('./middleware/auth')
const { connectMongoDB } = require('./connect')
const dashboardRouter = require('./routes/dashboard')

app.set('view engine', "ejs")
app.set('views', path.join(__dirname, 'views'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'Public')))

app.use('/', staticRoute)
app.use('/', signUpRouter)
app.use('/', dashboardRouter)


connectMongoDB('mongodb://localhost:27017/sign-up')
    .then(() => {
        console.log('MongoDB Connected');
    })


app.listen(process.env.PORT, () => {
    console.log(`server started at:http://localhost:3000/`);

})