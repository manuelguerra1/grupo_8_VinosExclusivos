const express = require('express');
const productsController = require('../controllers/productsController');
const upload = require('../middlewares/multerMiddleware')
const router = express.Router();
const productValidator = require('../middlewares/productValidator')

//Listar
// router.get('/allProduct', productsController.allProduct);
router.get('/allProducts', productsController.allProduct);
router.get('/productDetail2', productsController.productDetail2);

// Crear
router.get ('/create', productsController.create);
router.post('/save', upload.single('image'), productValidator, productsController.store);
// Editar
router.get ('/edit/:id', productsController.productEdit);
router.put ('/modify/:id', productValidator, productsController.update);
// Eliminar
router.delete ('/delete/:id', productsController.destroy);
//Listar por id
router.get('/productDetail/:id', productsController.productDetail);


module.exports = router;