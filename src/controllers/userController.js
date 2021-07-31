const userController ={
    users: (req, res) => {
        res.render('profile');
    },
    login: (req, res) => {
        res.render('login');
    },
    register: (req, res) => {
        res.render('register');
    },
}

module.exports = userController