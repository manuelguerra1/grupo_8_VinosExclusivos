const {validationResult} = require('express-validator');
const db = require("../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const bcrypt = require('bcrypt');
const { log, Console } = require('console');


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
  register2: async (req, res) => {
    try {
      let rol = await db.Rol.findAll();

      return res.render("./users/register2", {
        rol,
      });
    } catch (error) {
      res.send(error);
    }
  },

  usersStore: async (req, res) => {
    let errors = validationResult(req);
  
    if (!errors.isEmpty()) {
      let rol = await db.Rol.findAll()
      console.log(errors.mapped(), "estoy en el if")
      return  res.render('./users/register2', {
        rol, 
        errors: errors.mapped(),
        oldBody : req.body
    })
    }
    try {
      
      let newUsers = {
        avatar: req.file.filename,
        name: req.body.name,
        last_name: req.body.lastname,
        email: req.body.email,
        user_name: req.body.username,
        password: bcrypt.hashSync(req.body.password, 10),
        confirm_password: bcrypt.hashSync(req.body.confirmpassword, 10),
        rol_id: 1,
      };
const userRegistered = await db.User.findOne({
  where: {email: req.body.email

  }
})
if (userRegistered) {
  let rol = await db.Rol.findAll()
  return res.render ('./users/register', {
    rol, 
    errors:{
      email:{
        msg: "Correo ya registrado"
      }
    },
    oldBody : req.body
})
}
      await db.User.create(newUsers);

      res.redirect("/");
    } catch (error) {
      res.send(error);
    }
  },

  login: (req, res) => {
    res.render("./users/login", {});
  },

  processLogin: async (req, res) => {
    const error = validationResult(req)
    if (!error.isEmpty()){
      return res.render("./users/login", {
        errors: error.mapped(), 
        oldEmail: req.body.email
      });
    }
    try {
      const user = await db.User.findOne({
        where: {
          email: req.body.email,
        },
        include: "Rol",
      });
      if (!user) {
        return res.render("./users/login", {
          errors:{
            email:{
              msg: "Debe registrarte primero"
            }
          }
        });
      }
  
      const passwordValid = await bcrypt.compare(
        req.body.password, user.password
      )
      if (!passwordValid){
        return res.render("./users/login", {
          errors:{
            password:{
              msg: "Contraseña Invalida"
            }
          }
        });
      }
      if (user) {
        req.session.userLogged = user;
        if (req.body.rememberme) {
          res.cookie("userLogged", user, { maxAge: 1000 * 60 * 60 * 2 });
        }
        res.redirect("/profile");
      }
    } catch (error) {
      res.send(error);
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

  usersEdit: async (req, res) => {
    const id = req.params.id;
    try {
      let user = await db.User.findByPk(id);
      let rol = await db.Rol.findAll();
      let rolById = await db.Rol.findByPk(id);
      
      return res.render("./users/userEditForm", {
       user, rol, rolById
      });
    } catch (error) {
      res.send(error);
    }
  },
  
  usersUpdate: async (req, res) => {
    const id = req.params.id;

  try {
    
    await db.User.update(
    {
    "name":req.body.name,
    "last_name":req.body.last_name,
    "email":req.body.email,
    "user_name":req.body.user_name,
    "password":req.body.password,
    "confirm_password":req.body.confirmpassword,
  },
  {
    where: {id: id}
    });

    const userUpdate = await db.User.findOne({
       where: {id: id}
    });

    if (userUpdate) {
      req.session.userLogged = userUpdate;
      res.redirect("/profile");
    }

    
  } catch (error) {
    res.send(error)
  }
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
};


module.exports = usersController;
