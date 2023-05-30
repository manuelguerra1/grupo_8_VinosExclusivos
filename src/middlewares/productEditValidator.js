const { body } = require("express-validator");
const path = require('path')
const productEditValidator = [
  // aca van los campos
  body("name")
    .notEmpty().withMessage("El campo requiere un nombre").bail()
    .isLength({ min: 5 })
    .withMessage("El campo debe tener minimo 5 caracteres"),
  body("description")
    .isLength({ min: 20 })
    .withMessage("El campo debe tener minimo 20 caracteres"),

];

module.exports = productEditValidator;
