const authMiddleware = (req, res, next) => {
    if (req.session.userLogged) {
        
        return res.redirect('/profile');
    }
    
    next();
}

module.exports = authMiddleware;

//Este middleware es para verificar si el usuario esta loggueado, en caso de que no lo dirige al login. 