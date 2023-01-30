const express = require('express');
const productFormController = require('../controllers/productFormController');
const router = express.Router();

router.get('/productForm', productFormController.productForm);

module.exports = router;