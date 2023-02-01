const express = require('express');
const productEditFormController = require('../controllers/productEditFormController');
const router = express.Router();

router.get('/productEditForm', productEditFormController.productEditForm);

module.exports = router;