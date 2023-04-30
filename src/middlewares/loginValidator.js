const { body } = require("express-validator");
const loginValidator = [
    body("email")
    .notEmpty().withMessage("El campo no puede estar vacio") 
    .bail()
    .isEmail().withMessage("El email es invalido")
]
module.exports = loginValidator