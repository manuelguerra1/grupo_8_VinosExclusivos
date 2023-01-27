const path = require('path');

const mainController = {
    index: function (req, res) {
        res.render('pages/index')
    } 
}

module.exports = mainController;