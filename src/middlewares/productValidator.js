const {body} = require ('express-validator');

const productValidator = [
    // aca van los campos
    body('name').notEmpty().withMessage('El campo no puede estar vacio'),
    body('name').isLength({min: 5}).withMessage('El campo debe tener minimo 5 caracteres'),
    body('description').isLength({min: 20}).withMessage('El campo debe tener minimo 20 caracteres'),
    body("image")
    .custom(({req})=>{
        const files = req.files
        const validExtensions = [".jpg" ,".png" ,".svg" , ".jpeg"]
        if(!files){
            throw new Error("ingresar una imagen")
        }
        files.forEach(file => {
            const extension = path.extname(file.originalname)
            if(!validExtensions.includes(extension)){
                throw new Error(`Las extenciones validas son ${validExtensions.join(', ')}`)
            }
        });
        return true
    })
]

module.exports = productValidator;