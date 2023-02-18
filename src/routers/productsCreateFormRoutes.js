const express = ('express');
const router = express.Router();

const productsCreateFormController = require('../controllers/productsCreateFormController');

router.get ('/', productsCreateFormController.index);

router.get ('/create', productsCreateFormController.create);
router.post('/create', productsCreateFormController.store);

router.get ('/edit/:id', productsCreateFormController.edit);
router.put ('/edit/:id', productsCreateFormController.update);

router.get ('/delete/:id', productsCreateFormController.delete);
router.delete ('/delete/:id', productsCreateFormController.destroy);

router.get('/:id', productsCreateFormController.show)

module.exports = router;
