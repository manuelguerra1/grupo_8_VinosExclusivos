const express = ('express');
const router = express.Router();

const productsCreateFormController = require('../controllers/productsCreateFormController');

router.get ('/', productsCreateForm.index);

router.get ('/create', productsCreateForm.create);
router.post('/create', productsCreateForm.store);

router.get ('/edit/:id', productsCreateForm.edit);
router.put ('/edit/:id', productsCreateForm.updated);

router.get ('/delete/:id', productsCreateForm.delete);
router.delete ('/delete/:id', productsCreateForm.destroy);


module.exports = router
