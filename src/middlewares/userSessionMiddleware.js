const userSessionMiddleware = (req, res, next) => {
    if (req.session && req.session.userLogged) {
        
        res.locals.userLogged = req.session.userLogged;
    }
    
    next();
}

module.exports = userSessionMiddleware;

//Este middleware es para verificar si el usuario esta loggueado, en caso de que no lo dirige al login. 