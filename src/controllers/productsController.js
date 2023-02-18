const path = require('path');

const productsController = {
    productDetail: function (req, res) {
        res.render('./products/productDetail')
    } 
}

module.exports = productsController;