const express = require('express');
const usersController = require('../controllers/usersController');
// TODO - const upload = require('../middlewares/multerMiddleware')
const router = express.Router();

router.get('/login', usersController.login);

router.get('/register', usersController.register);

// Crear
//TODO Agregar en la linea 13 -  upload.single('image')
router.get ('/userCreate', usersController.usersCreate);
router.post('/userSave', usersController.usersStore);

// // Editar
router.get ('/userEdit/:id', usersController.usersEdit);
router.put ('/userModify/:id', usersController.usersUpdate);

// // Eliminar
router.get ('/userDelete/:id', usersController.usersDelete);
router.delete ('/userEliminate/:id', usersController.usersDestroy);


module.exports = router;