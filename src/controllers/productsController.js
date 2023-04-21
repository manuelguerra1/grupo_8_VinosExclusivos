const db = require("../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const productsController = {
    allProduct: async (req, res) => {
        try {
            const products = await db.Product.findAll()
            res.render('./products/allProduct', {products})
            
        } catch (error) {
            res.send(error)
        }
    },

    productDetail: async (req, res) => {
        try {
            // let varietal = await db.Varietal.findAll()
            // // let varietalById = db.Varietal.findByPk(id)
            // let brand = await db.Brand.findAll()
            // let category = await db.Category.findAll()
            // let region = await db.Region.findAll()
            // let origin = await db.Origin.findAll()

            const productId = await db.Product.findByPk(req.params.id, {
                include: [
                    // trae las asociaciones del modelo
                    { association: 'Varietal'},
                    { association: 'Origin'},
                    { association: 'Region'},
                    // { association: 'Varietal'},
                    // { association: 'Varietal'},
                ]
            })
            console.log(productId);
            res.render('./products/productDetail', {productId})

        } catch (error) {
            res.send(error)
        }
    },

    create: async (req, res) => {
        
        try {
            let varietal = await db.Varietal.findAll()
            let brand = await db.Brand.findAll()
            let category = await db.Category.findAll()
            let region = await db.Region.findAll()
            let origin = await db.Origin.findAll()

            return res.render('./products/productCreateForm', {
                varietal, brand, category, region, origin
            })
            
        } catch (error) {
            res.send(error)
        }
        // Promise

        // .all([varietal, brand, category, region, origin])

        // .then(([varietal, brand, category, region, origin]) => {
        //     return res.render('./products/productCreateForm', {
        //         varietal, brand, category, region, origin
        //     })
        // })
        // .catch(error => res.send(error))

    },

    store: async (req, res) => {
        try {
            let newProduct = {
                "name": req.body.name,
                "description": req.body.description,
                "price": req.body.price,
                "varietal_id": req.body.varietal,
                "brand_id": req.body.brand,
                "year": req.body.year,
                "origen_id": req.body.origen,
                "region_id": req.body.region,
                "category_id": req.body.category,
                "available": true,
                "image": req.file.filename
            }
            
            await db.Product.create(newProduct)

            res.redirect('/allProduct')

        } catch (error) {

            res.send(error)
        }
    },

    productEdit: async (req, res) => {
        const id = req.params.id
        try {
            let product = await db.Product.findByPk(id)
            // include: [
            //     {association:'Varietal'  },
            //     {association:'Origin'  },
            //     {association:'Region'  },
            //     {association:'Brand'  },
            //     {association:'Category'  }
            // ]
            console.log(product);
            let varietal = await db.Varietal.findAll()
            let varietalById = await db.Varietal.findByPk(id)
            let brand = await db.Brand.findAll()
            let brandById = await db.Brand.findByPk(id)
            let category = await db.Category.findAll()
            let categoryById = await db.Category.findByPk(id)
            let region = await db.Region.findAll()
            let regionById = await db.Region.findByPk(id)
            let origin = await db.Origin.findAll()
            let originById = await db.Origin.findByPk(id)
            
            return res.render('./products/productEditForm', {
                product, varietal, varietalById, brand, brandById, category, categoryById, region, regionById, origin, originById
            })
            
        } catch (error) {
            res.send(error)
        }    
    },

    update: async (req, res) => {
        const id = req.params.id
        try {
            await db.Product.update(
                {
                    "name": req.body.name,
                    "description": req.body.description,
                    "price": req.body.price,
                    "varietal_id": req.body.varietal,
                    "brand_id": req.body.brand,
                    "year": req.body.year,
                    "origen_id": req.body.origen,
                    "region_id": req.body.region,
                    "category_id": req.body.category,
                    "available": true,
                },
                {
                    where: {id: id}
            })
            // const res = { success: true, data: data, message:"Actualización exitosa!" }

            return res.redirect('/productDetail/' + id);

        } catch (error) {
            res.send(error)
        }
    },

    destroy: async (req, res) => {

        try {
            const id = req.params.id;
            // borre el force: true porque ya tiene borrado logico en el modelo de productos
            await db.Product.destroy({where: {id: id}})
            
            res.redirect('/allProduct');

        } catch (error) {
            res.send(error)
        }
    }

}

module.exports = productsController;