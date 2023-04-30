const { body } = require("express-validator");
const path = require('path')
const userValidator = [
  // aca van los campos
  body("avatar").custom((value, { req }) => {
    const file = req.file;
    const validExtensions = [".jpg", ".jpeg", ".png", ".gif", ".JPG", ".JPEG", ".PNG", ".GIF"];
    if (!file) {
      throw new Error("ingresar una imagen");
    }
    const extension = path.extname(file.originalname);
    if (!validExtensions.includes(extension)) {
      throw new Error(
        `Las extenciones validas son ${validExtensions.join(", ")}`
      );
    }
    return true;
  }),

  body("name")
    .notEmpty()
    .withMessage("El campo requiere un nombre")
    .bail()
    .isLength({ min: 2 })
    .withMessage("El campo debe tener minimo 2 caracteres"),
  body("lastname")
    .notEmpty()
    .withMessage("El campo requiere un nombre")
    .bail()
    .isLength({ min: 2 })
    .withMessage("El campo debe tener minimo 2 caracteres"),
  body("email")
    .notEmpty()
    .withMessage("El campo debe completarse")
    .bail()
    .isEmail()
    .withMessage("El campo debe tener formato de email"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("El campo debe tener minimo 8 caracteres"),

];

module.exports = userValidator;
