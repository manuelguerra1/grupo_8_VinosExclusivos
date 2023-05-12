const db = require("../../database/models")
const Op = db.Sequelize.Op;

const apiUserController = {

    allUsers(req, res){
        db.User.findAll()
        .then(data => {
            res.status(200).json({
                count: data.length,
                data: data.map(user=>({id: user.id, name: user.name, last_name: user.last_name, email: user.email, detail: `localhost:3008/api/users/${user.id}`}))
                
    })})
        .catch(error => res.status(500).json('ERROR: DB_ERROR' + error))

    },

    userDetail(){
        
    },
};

module.exports = apiUserController
