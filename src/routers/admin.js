const express = require('express');
const adminController = require('../controllers/adminController');
const router = express.Router();

// router.get('/productEditForm', adminController.productEditForm);

// router.get('/productCreateForm', adminController.productCreateForm);

router.get ('/', adminController.index);

router.get ('/create', adminController.create);
router.post('/create', adminController.store);

router.get ('/edit/:id', adminController.edit);
router.put ('/edit/:id', adminController.update);

router.get ('/delete/:id', adminController.delete);
router.delete ('/delete/:id', adminController.destroy);

router.get('/:id', adminController.show)

module.exports = router;