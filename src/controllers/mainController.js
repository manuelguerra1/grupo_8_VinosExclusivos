const db = require("../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const mainController = {
  // getProducts: () => {
  //   return JSON.parse(fs.readFileSync(productsPath, "utf-8"));
  // },

  index: function (req, res) {
    // res.render('pages/index')
    // ENVIA TODOS LOS PRODUCTOS DEL JSON AL ARCHIVO INDEX
    res.render("index");
  },
  'prueba': (req, res) => {
    db.User.findAll()
        .then(users => {
            res.json({users})
        })
}
  // prueba: async function (req, res) {
  //   try {
  //     // let producto = await db.Product.findAll();
  //     let usuario = await db.User.findAll(
  //     {
  //       attributes: ['id', 'name'],
  //     });

  //     res.json({
  //       // producto,
  //       success: true,
  //       data: usuario,
  //     });
  //   } catch (error) {
  //     res.json({ error });
  //   }
  // },
};

module.exports = mainController;
