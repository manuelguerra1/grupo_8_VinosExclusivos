const path = require('path');

const productsController = {
    productDetail: function (req, res) {
        res.render('productDetail')
    } 
}

module.exports = productsController;