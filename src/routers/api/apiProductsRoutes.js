const { Router } = require("express");

const apiProductsController = require('../../controllers/api/apiProductsController')

const apiProductsRouter = Router();

apiProductsRouter.get('/api/products', apiProductsController.getProducts)
apiProductsRouter.get('/api/products/last', apiProductsController.last)
apiProductsRouter.get('/api/category', apiProductsController.category)
apiProductsRouter.get('/api/products/:id', apiProductsController.detail)




module.exports = apiProductsRouter;