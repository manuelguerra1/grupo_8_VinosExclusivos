const multer = require('multer')
const path = require('path');

const storage = multer.diskStorage({
    // DEFINE EL LUGAR DONDE SE VAN A GUARDAR LAS IMAGENES
    destination: (req, file, callback) => {
        let filePath = path.resolve(__dirname, '../../public/img/imgs/')
        callback(null, filePath)
    },
    // DEFINE EL NOMBRE DE LA IMAGEN, DANDO UN NOMBRE DISTINTO A CADA IMAGEN
    filename: (req, file, callback) => {
        let nameFile = 'product-' + Date.now() + path.extname(file.originalname)
        console.log(file);
        callback(null, nameFile)
    }
})

const upload = multer({ storage })

module.exports = upload