const {validationResult} = require('express-validator');
const Admin = require('../services/Admin');
const bcrypt = require('bcrypt');
const db = require('../database/models')

const userController = {
    register : (req, res) => {
        res.render('./users/register',{
            css: '/css/register.css'
        });
    },
    
    registerProcess : async (req, res) => {
        const error = validationResult(req);
        
        if ( !error.isEmpty() ) {
            return res.render('users/register', {
                css: '/css/register.css', 
                error: error.mapped(),
                oldBody: req.body
            });
        };

        try {
            const userToRegist = {
                name: req.body.name,
                lastname: req.body.lastname,
                password: bcrypt.hashSync( req.body.password, 10),
                email: req.body.email,
                image: 'usuarioDefault.png',
                userCategory_id: req.body.category ? req.body.category : '1' 
            };
            
            const invalidEmail = await db.User.findOne({
                where: {
                    email : req.body.email
                }
            });

            if (invalidEmail) {
                return res.render('users/register', {
                    css: '/css/register.css', 
                    error: {
                        email: {
                            msg: 'El email ya existe'
                        }
                    },
                    oldBody: req.body
                });
            };

            await db.User.create(userToRegist, {
                include: 'userCategory'
            });

            res.redirect('/user/login');

        } catch (error) {
            res.render('error');
        }
    },
    
    login : (req, res) => {

        res.render('./users/login',{
            css: '/css/register.css'
        });
    },

    loginPocess : async (req, res) => {
        const error = validationResult(req);
        
        if ( !error.isEmpty() ) {
            return res.render('users/login', {
                css: '/css/register.css',
                error: error.mapped(),
            });
        };
        
        try {
            
            let userToLogin = await db.User.findOne({
                where:{
                    email: req.body.email,
                },
                attributes: [
                    'id',
                    'name',
                    'lastname',
                    'password',
                    'email',
                    'image',
                    'userCategory_id',
                ]
            });

            if (!userToLogin) {

                return res.render('users/login', {
                    css: '/css/register.css',
                    error: {
                        email: {
                            msg: 'Email no resgistrado'
                        }
                    },
                });
            };

            const confirmPassword = bcrypt.compareSync(req.body.password, userToLogin.password );

            if (!confirmPassword) {

                return res.render('users/login', {
                    css: '/css/register.css',
                    error: {
                        password: {
                            msg: 'Contaseña incorrecta'
                        }
                    },
                });
            };
            
            if (userToLogin.userCategory_id === 2) {
                delete userToLogin.dataValues.password;

                req.session.admin = userToLogin.dataValues;
            
                return res.redirect('/user/admin');
            };

            if (userToLogin.userCategory_id === 1) {
                delete userToLogin.dataValues.password;
    
                req.session.userLogged = userToLogin.dataValues;

                if(req.body.rememberme){

                    res.cookie('userCookie', userToLogin.dataValues, {maxage: 1000*60*60});
                };

                res.redirect('/user/profile');
            };
        } catch (error) {
            res.render('error');
        }
    },

    logout : (req, res) => {
        req.session.destroy();
        res.clearCookie('userCookie');
        res.redirect('/');
    },

    profile : (req, res) => {
        res.render('./users/profile', {
            css : '/css/profile.css' ,
            user : req.session.userLogged
        });
    },

    admin: (req, res)=> {
        let products = Admin.getAllProduct();
        
        res.render('./users/admin',{
            css: '/css/admin.css',
            products
        });
    },
    
    
};

module.exports = userController