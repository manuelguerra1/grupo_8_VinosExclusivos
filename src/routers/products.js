const express = require('express');
const productsController = require('../controllers/productsController');
const upload = require('../middlewares/multerMiddleware')
const router = express.Router();
const productValidator = require('../middlewares/productValidator')

//Listar
router.get('/allProduct', productsController.allProduct);
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

router.get ('/productCreateForm2', productsController.productCreateForm2);

module.exports = router;