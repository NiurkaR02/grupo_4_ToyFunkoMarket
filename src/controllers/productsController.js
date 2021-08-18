const productsController = {
    products: (req, res) => {
        res.render('products');
    },
    productDetail: (req, res) => {
        res.render('productDetail');
    },
    productsCart: (req, res) => {
        res.render('productsCart');
    },
    productEditDetails: (req, res) => {
        res.render('productEditDetails');
    },
    preview: (req, res) => {
        res.render('preview');
    }
}

module.exports = productsController