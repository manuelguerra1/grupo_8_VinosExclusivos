const express = require('express');
const usersController = require('../controllers/usersController');
// TODO - const upload = require('../middlewares/multerMiddleware')
const router = express.Router();
const userUpload = require ('../middlewares/userMulterMiddleware')
const guestMiddleware = require('../middlewares/guestMiddleware')
const authMiddleware = require ('../middlewares/authMiddleware')
const loginValidator = require ('../middlewares/loginValidator')
//este middleware es para que el visitante pueda navegar en toda la web.
const userRegisterValidator = require('../middlewares/userRegisterValidator')

router.get('/pruebauser', usersController.user);

router.get('/login', authMiddleware, usersController.login);
router.post('/processLogin', loginValidator, usersController.processLogin);

router.get('/profile',guestMiddleware, usersController.profile);

router.get('/logout', usersController.logout);


// Crear
router.get('/register', usersController.register);
router.get('/register2', usersController.register2);
router.post('/userSave', userUpload.single('avatar'), userRegisterValidator ,usersController.usersStore);

// Editar
router.get ('/userEdit/:id', usersController.usersEdit);
router.put ('/userModify/:id', userRegisterValidator, usersController.usersUpdate);

// // Eliminar
// router.get ('/userDelete/:id', usersController.usersDelete);
// router.delete ('/userEliminate/:id', usersController.usersDestroy);

module.exports = router;