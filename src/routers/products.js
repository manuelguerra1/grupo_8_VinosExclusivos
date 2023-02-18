const express = require('express');
const productsController = require('../controllers/productsController');
const router = express.Router();

router.get('/productDetail', productsController.productDetail);

router.get('/allProduct', productsController.allProduct)

module.exports = router;