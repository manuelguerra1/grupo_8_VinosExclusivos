const express = require('express');
const productCreateFormController = require('../controllers/productCreateFormController');
const router = express.Router();

router.get('/productCreateForm', productCreateFormController.productCreateForm);

module.exports = router;