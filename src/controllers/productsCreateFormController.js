const fs = require('fs');
const path = require ('path');

const productsPath = path.join(__dirname, '/../data/products.json');

const productsCreateFormController = {
    getProducts: ()=>{
        return JSON.parse(fs.readFileSync(productsPath, 'utf-8'));
    },
index: (req, res)=>{
    res.render('/products/index', {
        title: 'Listado de Productos',
        productsList: productsCreateFormController.getProducts()
    });
},

}

module.exports = productsCreateFormController;