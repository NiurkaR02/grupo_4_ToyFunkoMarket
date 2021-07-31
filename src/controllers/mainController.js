const mainController = {
    home: (req, res, next) => {
        res.render('home');
    },
    termsAndConditions: (req, res, next) => {
        res.render('termsAndConditions');
    }
}
module.exports = mainController