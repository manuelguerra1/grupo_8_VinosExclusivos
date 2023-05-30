const express = require('express');
const productsController = require('../controllers/productsController');
const upload = require('../middlewares/multerMiddleware')
const router = express.Router();
const productCreateValidator = require('../middlewares/productCreateValidator')
const productEditValidator = require('../middlewares/productEditValidator')


//Listar
router.get('/allProduct', productsController.allProduct);

// Crear
router.get ('/create', productCreateValidator, productsController.create);
router.get ('/productCreateForm', productsController.productCreateForm);

router.post('/save', upload.single('image'), productCreateValidator, productsController.store);
// Editar
router.get ('/edit/:id', productsController.productEdit);
router.put ('/modify/:id', productEditValidator, productsController.update);
// Eliminar
router.delete ('/delete/:id', productsController.destroy);
//Listar por id
router.get('/productDetail/:id', productsController.productDetail);


module.exports = router;