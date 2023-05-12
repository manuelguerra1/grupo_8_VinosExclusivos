const { body } = require("express-validator");
const path = require('path')
const productValidator = [
  // aca van los campos
  body("name")
    .notEmpty().withMessage("El campo requiere un nombre").bail()
    .isLength({ min: 5 })
    .withMessage("El campo debe tener minimo 5 caracteres"),
  body("description")
    .isLength({ min: 20 })
    .withMessage("El campo debe tener minimo 20 caracteres"),
    body("image")
    .custom((value, { req }) => {
        const file = req.file;
        const validExtensions = [".jpg", ".png", ".svg", ".jpeg"];
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
      })

];

module.exports = productValidator;
