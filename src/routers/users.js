const express = require('express');
const usersController = require('../controllers/usersController');
// TODO - const upload = require('../middlewares/multerMiddleware')
const router = express.Router();
const userUpload = require ('../middlewares/userMulterMiddleware')
const guestMiddleware = require('../middlewares/guestMiddleware')
const authMiddleware = require ('../middlewares/authMiddleware')
//este middleware es para que el visitante pueda navegar en toda la web.

router.get('/login', authMiddleware, usersController.login);
router.post('/processLogin', usersController.processLogin);

router.get('/register', usersController.register);

router.get('/profile',guestMiddleware, usersController.profile);


// Crear
//TODO Agregar en la linea 13 -  upload.single('image')
router.get ('/userCreate', usersController.usersCreate);
router.post('/userSave', userUpload.single('avatar'), usersController.usersStore);

// // Editar
router.get ('/userEdit/:id', usersController.usersEdit);
router.put ('/userModify/:id', usersController.usersUpdate);

// // Eliminar
router.get ('/userDelete/:id', usersController.usersDelete);
router.delete ('/userEliminate/:id', usersController.usersDestroy);


module.exports = router;