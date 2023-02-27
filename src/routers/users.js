const express = require('express');
const usersController = require('../controllers/usersController');
const router = express.Router();

router.get('/login', usersController.login);

router.get('/register', usersController.register);

// Crear
router.get ('/userCreate', usersController.usersCreate);
router.post('/userSave', usersController.usersStore);

// // Editar
router.get ('/useredit/:id', usersController.usersEdit);
router.put ('/usermodify/:id', usersController.usersUpdate);

// // Eliminar
router.get ('/userdelete/:id', usersController.usersDelete);
router.delete ('/usereliminate/:id', usersController.usersDestroy);


module.exports = router;