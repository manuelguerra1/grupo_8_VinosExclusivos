const path = require('path');

const productsController = {
    productDetail: function (req, res) {
        res.render('./products/productDetail')
    },
    
    allProduct: function (req, res) {
        res.render('./products/allProduct')
    }
}

module.exports = productsController;