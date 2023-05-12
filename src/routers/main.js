const express = require('express');
const mainController = require('../controllers/mainController');
const router = express.Router();

router.get('/', mainController.index);
router.get('/prueba', mainController.prueba);
router.get('/home2', mainController.home2);

module.exports = router;