const express = require('express');
const productsController = require('../controllers/productsController');
const upload = require('../middlewares/multerMiddleware')
const router = express.Router();

router.get('/allProduct', productsController.allProduct);
// Crear
router.get ('/create', productsController.create);
router.post('/save', upload.single('image') ,productsController.store);
// Editar
router.get ('/edit/:id', productsController.productEdit);
router.put ('/modify/:id', productsController.update);
// Eliminar
router.get ('/delete/:id', productsController.delete);
router.delete ('/eliminate/:id', productsController.destroy);

router.get('/productDetail/:id', productsController.productDetail);

// router.get('/:id', productsController.productDetail)

module.exports = router;