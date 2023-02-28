const path = require('path');
const fs = require('fs');

const usersPath = path.join(__dirname, '/../data/users.json');

const usersController = {
    getUsers: () => {
        return JSON.parse(fs.readFileSync(usersPath, 'utf-8'));
    },
    login: function (req, res) {
        res.render('./users/login')
    },

    register: function (req, res) {
        res.render('./users/register')
    },

    usersCreate: function (req, res) {
        res.render('./users/register')
    },

    usersStore: function (req, res) {
        let user = usersController.getUsers();

        let newUser = {
            "id": req.body.id,
            "name": req.body.name,
            "lastname": req.body.lastname,
            "email": req.body.email,
            "username": req.body.username,
            "password": req.body.password,
            "confirmpassword": req.body.confirmpassword
        }


        // console.log("nuevo usuario", newUser);

        user.push(newUser);

        fs.writeFileSync(usersPath, JSON.stringify(user, null, ' '));

        res.redirect('register');


    },

    usersEdit: function (req, res) {
        let userId = req.params.id;
        let usuario = usersController.getUsers().find(usuario => usuario.id == userId);

        return res.render('./users/userEditForm', {
            user: usuario,
            id: req.params.id
        });

    },

    update: (req, res) => {
        let userId = req.params.id;
        let usuarios = usersController.getUsers();

        usuarios.forEach((usuario, index) => {
            if (usuario.id == userId) {
                usuario.name = req.body.name,
                    usuario.lastname = req.body.lastname,
                    usuario.email = req.body.email,
                    usuario.username = req.body.username,
                    usuario.password = req.body.password,
                    usuario.confirmpassword = req.body.confirmpassword,
                    usuario.image = req.body.image,

                    //ponemos un ternario para que si me trae una imagen cambie el valor o foto y sino queda la misma imagen
                    usuario.image = req.file ? req.file.filename : usuario.image

                usuarios[index] = usuario;
            }

        });
        fs.writeFileSync(usersPath, JSON.stringify(usuarios, null, ' '));

        res.redirect('/');

    },

    delete: (req, res) => {
        let userId = req.params.id;
        let user = usersController.getUsers().find(user => user.id == userId);

        res.render('./users/userEditForm', {
            title: 'Eliminar usuario',
            user: user
        });

    },

destroy:(req, res) => {
    let userId = req.params.id;
    let users = usersController.getUsers();
 
    // ENCUENTRA EL USUARIO
 let user = users.find(user => user.id == userId)
 
 //ENCUENTRA EL INDICE DEL USUARIO
 let userIndex = users.indexOf(user)

 // ELIMINA EL USUARIO QUE COINCIDE CON EL INDICE DEL USUARIO
 users.splice(userIndex, 1)

 // PREGUNTA SI TIENE IMAGEN CUANDO ELIMINA UN USUARIO
 // SI TIENE UNA IMAGEN, LA BORRA DE LA CARPETA IMGS
 fs.unlinkSync(__dirname, `../../public/img/users/${user.image}`)


 fs.writeFileSync(usersPath, JSON.stringify(users, null, ' '));

 res.redirect('/');
}

}

module.exports = usersController;