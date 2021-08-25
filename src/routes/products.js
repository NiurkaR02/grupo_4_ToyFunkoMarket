var express = require('express');
var router = express.Router();

const productsController = require('../controllers/productsController')

/* GET products listing. */
router.get('/', productsController.products);

/* GET products details listing. */
router.get('/productDetail/:id', productsController.productDetail);

router.get('/productEditDetails', productsController.productEditDetails);

router.get('/preview', productsController.preview);

router.get('/productsCart', productsController.productsCart);

module.exports = router;