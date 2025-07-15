const dashboard = require('../routes/dashboard')



function getDashboard (req, res){
    // console.log('Dashboard controller hit');
    // console.log('User:', req.user);
    
    const user = req.user
   res.render('dashboard', {user})
}

module.exports = {getDashboard}


