const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsControllers')

router.get('/', productsController.products)
router.get('/productDetail', productsController.productDetail)
router.get('/productCart', productsController.productCart)
router.get('/productEdit', productsController.productEdit)
router.get('/productCreate', productsController.productCreate)

module.exports = router;