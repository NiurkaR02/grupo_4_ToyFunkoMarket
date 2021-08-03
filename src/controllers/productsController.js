const productsController = {
    products: (req, res) => {
        res.render('products');
    },
    productDetail: (req, res) => {
        res.render('productDetail');
    },
    productsCart: (req, res) => {
        res.render('productsCart');
    }
}

module.exports = productsController