const path = require('path');
const fs = require('fs');

const productsController = {
    products: (req, res) => {
        res.render('products');
    },
    productDetail: (req,res) =>{
        let products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../JSON/products.json')));
        
        let detailProduct;
        products.forEach(product => {
            if(product.id == req.params.id){
                detailProduct = product;
            }
        });
        res.render(('productDetail'), {detailProduct})
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