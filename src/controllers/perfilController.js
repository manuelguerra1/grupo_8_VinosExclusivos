//TODO en contruucion hasta aca solo muestra el perfil 1-marzo

const { Console } = require('console');
const fs = require('fs');
const path = require('path');

const usersPath = path.join(__dirname, '/../data/users.json');

const perfilController = {
    getProducts: () => {
        return JSON.parse(fs.readFileSync(usersPath, 'utf-8'));
    },


    perfil: function (req, res) {
        res.render('./users/miPerfil', {
            productList: perfilController.getProducts()
        });
    },

 }

 module.exports = perfilController;