const express = require('express');
const adminController = require('../controllers/adminController');
const router = express.Router();

router.get('/productEditForm', adminController.productEditForm);

router.get('/productCreateForm', adminController.productCreateForm);

module.exports = router;