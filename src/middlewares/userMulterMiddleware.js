const multer = require('multer')
const path = require('path');

const storage = multer.diskStorage({
    // DEFINE EL LUGAR DONDE SE VAN A GUARDAR LAS IMAGENES
    destination: (req, file, callback) => {
        let filePath = path.resolve(__dirname, '../../public/img/user/')
        callback(null, filePath)
    },
    // DEFINE EL NOMBRE DE LA IMAGEN, DANDO UN NOMBRE DISTINTO A CADA IMAGEN
    filename: (req, file, callback) => {
        let nameFile = 'user-' + Date.now() + path.extname(file.originalname)
        console.log('multerProcces',file);
        callback(null, nameFile)
    }
})

const userUpload = multer({ storage })

module.exports = userUpload