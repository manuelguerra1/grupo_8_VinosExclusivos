const express = require('express');
const carritoController = require('../controllers/carritoController');
const router = express.Router();
const guestMiddleware = require('../middlewares/guestMiddleware')
//Este middleware limita la visita al usuario logueado

router.get('/carrito', guestMiddleware, carritoController.carrito);

module.exports = router;