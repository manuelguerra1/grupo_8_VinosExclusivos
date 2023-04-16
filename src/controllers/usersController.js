const {validationResult} = require('express-validator');
const db = require("../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const bcrypt = require('bcrypt');


const usersController = {
  user: (req, res) => {
    db.User.findAll().then((users) => {
      res.json({ users });
    });
  },
  register: async (req, res) => {
    try {
      let rol = await db.Rol.findAll();

      return res.render("./users/register", {
        rol,
      });
    } catch (error) {
      res.send(error);
    }
  },

  usersStore: async (req, res) => {
    try {
      let newUsers = {
        avatar: req.file.filename,
        name: req.body.name,
        last_name: req.body.lastname,
        email: req.body.email,
        user_name: req.body.username,
        password: bcrypt.hashSync(req.body.password, 10),
        confirm_password: bcrypt.hashSync(req.body.confirmpassword, 10),
        rol_id: req.body.rol,
      };

      await db.User.create(newUsers);

      res.redirect("/users/login");
    } catch (error) {
      res.send(error);
    }
  },

  login: (req, res) => {
    
    res.render("./users/login",{
    });
  },

  processLogin: async function (req, res) {
    const error = validationResult(req);

    if (!error.isEmpty()) {
      return res.render("/login", {
        error: error.mapped(),
      });
    };

    try {
      let userToLogin = await db.User.findOne({
        where: {
          username: req.body.username,
        },
        attributes: [
          "id",
          "avatar",
          "name",
          "last_name",
          "email",
          "user_name",
          "password",
          "confirm_password",
          "rol_id",
        ]
      });

      if (!userToLogin) {
        return res.render("/login", {
          error: {
            username: {
              msg: "Usuario no registrado",
            }
          },
        });
      }

      const confirmPassword = bcrypt.compareSync(
        req.body.password,
        userToLogin.password
      );

      if (!confirmPassword) {
        return res.render("/login", {
          error: {
            password: {
              msg: "Contraseña incorrecta",
            }
          },
        });
      };

      if (userToLogin.rol_id === 2) {
        delete userToLogin.dataValues.password;

        req.session.admin = userToLogin.dataValues;
        return res.redirect("/admin");
      };

      if (userToLogin.rol_id === 1) {
        delete userToLogin.dataValues.password;

        req.session.userLogged = userToLogin.dataValues;

        if (req.body.rememberme) {
          res.cookie("userCookie", userToLogin.dataValues, {
            maxage: 1000 * 60 * 60,
          });
        };
        res.redirect("/profile");
      };
    } catch (error) {
      res.render("../src/views/users/404.ejs");
    }
  },

  logout: (req, res) => {
    res.clearCookie("userLogged");
    req.session.destroy();
    return res.redirect("/");
  },

  profile: function (req, res) {
    res.render("./users/profile", {
      user: req.session.userLogged,
    });
  },

  usersEdit: function (req, res) {
    let userId = req.params.id;
    console.log("userId", userId);
    let usuario = usersController
      .getUsers()
      .find((usuario) => usuario.id == userId);

    return res.render("./users/userEditForm", {
      user: usuario,
      id: req.params.id,
    });
  },

  usersUpdate: (req, res) => {
    let userId = req.params.id;
    let usuarios = usersController.getUsers();

    usuarios.forEach((usuario, index) => {
      if (usuario.id == userId) {
        (usuario.name = req.body.name),
          (usuario.lastname = req.body.lastname),
          (usuario.email = req.body.email),
          (usuario.username = req.body.username),
          (usuario.password = req.body.password),
          (usuario.confirmpassword = req.body.confirmpassword),
          // usuario.image = req.body.image,

          //ponemos un ternario para que si me trae una imagen cambie el valor o foto y sino queda la misma imagen
          (usuario.image = req.file ? req.file.filename : usuario.image);

        usuarios[index] = usuario;
      }
    });
    fs.writeFileSync(usersPath, JSON.stringify(usuarios, null, " "));

    res.redirect("/");
  },

  usersDelete: (req, res) => {
    let userId = req.params.id;
    let user = usersController.getUsers().find((user) => user.id == userId);

    res.render("./users/userEditForm", {
      title: "Eliminar usuario",
      user: user,
    });
  },

  usersDestroy: (req, res) => {
    let userId = req.params.id;
    let users = usersController.getUsers();

    // ENCUENTRA EL USUARIO
    let user = users.find((user) => user.id == userId);

    //ENCUENTRA EL INDICE DEL USUARIO
    let userIndex = users.indexOf(user);

    // ELIMINA EL USUARIO QUE COINCIDE CON EL INDICE DEL USUARIO
    users.splice(userIndex, 1);

    // PREGUNTA SI TIENE IMAGEN CUANDO ELIMINA UN USUARIO
    // SI TIENE UNA IMAGEN, LA BORRA DE LA CARPETA IMGS
    // fs.unlinkSync(__dirname, `../../public/img/users/${user.image}`);

    fs.writeFileSync(usersPath, JSON.stringify(users, null, " "));

    res.redirect("/");
  },
  admin: (req, res) =>{
    const products = db.Product.findAll()
            res.render('./admin', {products})

  },

};


module.exports = usersController;
