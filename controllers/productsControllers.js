const productsController = {
    products: (req, res) => {
        return res.render('products');
    },
    productDetail : (req, res) => {
        return res.render('productDetail')
    },
    productCart : (req, res) => {
        return res.render('productCart')
    },
    productEdit : (req, res) => {
        return res.render('productEdit')
    },
    productCreate : (req, res) => {
        return res.render('productCreate')
    }
}

module.exports = productsController;