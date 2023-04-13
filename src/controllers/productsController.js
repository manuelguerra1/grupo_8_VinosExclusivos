const db = require("../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const productsController = {
    allProduct: function (req, res) {
        db.Product.findAll()
        .then(products => {
            res.render('./products/allProduct', {products})
        })
    },

    productDetail: function (req, res) {
        db.Product.findByPk(req.params.id)
        .then(product => {
            res.render('./products/productDetail', {product})
        })
    },

    create: function (req, res) {
        let varietal = db.Varietal.findAll()
        let brand = db.Brand.findAll()
        let category = db.Category.findAll()
        let region = db.Region.findAll()
        let origin = db.Origin.findAll()

        Promise

        .all([varietal, brand, category, region, origin])

        .then(([varietal, brand, category, region, origin]) => {
            return res.render('./products/productCreateForm', {
                varietal, brand, category, region, origin
            })
        })
        .catch(error => res.send(error))

    },

    store: (req, res) => {
        
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

        console.log(newProduct);


        db.Product.create(newProduct)

        .then(() => {
            res.redirect('/allProduct')
        })
        
        .catch(error => res.send(error))
    },

    productEdit: function (req, res) {
        const id = req.params.id

        let product = db.Product.findByPk(id)
        let varietal = db.Varietal.findAll()
        let varietalById = db.Varietal.findByPk(id)
        let brand = db.Brand.findAll()
        let brandById = db.Brand.findByPk(id)
        let category = db.Category.findAll()
        let categoryById = db.Category.findByPk(id)
        let region = db.Region.findAll()
        let regionById = db.Region.findByPk(id)
        let origin = db.Origin.findAll()
        let originById = db.Origin.findByPk(id)

        
        
        Promise

        .all([product, varietal, varietalById, brand, brandById, category, categoryById, region, regionById, origin, originById])

        .then(([product, varietal, varietalById, brand, brandById, category, categoryById, region, regionById, origin, originById]) => {
            return res.render('./products/productEditForm', {
                product, varietal, varietalById, brand, brandById, category, categoryById, region, regionById, origin, originById
            })
        })
        .catch(error => res.send(error))

        
    },

    update: (req, res) => {
        const id = req.params.id

        db.Product.update(
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

        .then(function(data){
            const res = { success: true, data: data, message:"Actualización exitosa!" }
            return res;
          })
          .catch(error=>{
            const res = { success: false, error: error }
            return res;
          })
         

        res.redirect('/allProduct');

    },

    destroy: (req, res) => {
        const id = req.params.id;
        
        db.Product.destroy({where: {id: id}, force: true})

        .then(function(data){
            const res = { success: true, data: data, message:"Borrado con exito!" }
            return res;
          })
          .catch(error=>{
            const res = { success: false, error: error }
            return res;
          })

        res.redirect('/allProduct');
    }

}

module.exports = productsController;