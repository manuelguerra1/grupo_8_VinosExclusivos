const path = require('path');
const fs = require('fs');
const productsPath = path.join(__dirname, '/../data/products.json');
const db = require('../database/models')

const mainController = {
    getProducts: ()=>{
        return JSON.parse(fs.readFileSync(productsPath, 'utf-8'));
    },

    index: function (req, res) {
        // res.render('pages/index')
        // ENVIA TODOS LOS PRODUCTOS DEL JSON AL ARCHIVO INDEX
        res.render('index', { 
        productList: mainController.getProducts()
        });
    },
    prueba: async function (req,res) {
        try {
            // let producto = await db.Product.findAll();
            let usuario = await db.User.findAll();
    
            res.json({
                // producto,
                usuario
            })
        } catch (error) {
            res.json({error})
        }
       
    }
}

module.exports = mainController;