const express = require('express');
const productsController = require('../controllers/productsController');
const router = express.Router();

router.get('/allProduct', productsController.allProduct);

router.get('/productDetail', productsController.productDetail);

// Crear
router.get ('/create', productsController.create);
router.post('/create', productsController.store);
// Editar
router.get ('/edit/:id', productsController.productEdit);
router.put ('/edit/:id', productsController.update);
// Eliminar
router.get ('/delete/:id', productsController.delete);
router.delete ('/delete/:id', productsController.destroy);

router.get('/:id', productsController.productDetail)

module.exports = router;