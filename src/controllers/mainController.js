const path = require('path');
const fs = require('fs');
const productsPath = path.join(__dirname, '/../data/products.json');

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
    }
}

module.exports = mainController;