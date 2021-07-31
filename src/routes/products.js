var express = require('express');
var router = express.Router();

const productsController = require('../controllers/productsController')

/* GET products listing. */
router.get('/', productsController.products);

/* GET products details listing. */
router.get('/productDetail', productsController.productDetail);


router.get('/ProductsCart', productsController.ProductsCart);

module.exports = router;