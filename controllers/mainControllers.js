const controller = {
    index : (req, res) => {
        return res.render('home');
    },
    terms : (req, res) => {
        return res.render('termsAndConditions');
    }
}

module.exports = controller;