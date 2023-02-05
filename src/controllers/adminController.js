const path = require('path');

const adminController = {
    productCreateForm: function (req, res) {
        res.render('productCreateForm')
    },

    productEditForm: function (req, res) {
        res.render('productEditForm')
    } 
}

module.exports = adminController;