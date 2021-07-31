const productsController = {
    products: (req, res) => {
        res.render('products');
    },
    productDetail: (req, res) => {
        res.render('productDetail');
    },
    ProductsCart: (req, res) => {
        res.render('ProductsCart');
    }
}

module.exports = productsController