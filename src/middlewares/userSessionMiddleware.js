const userSessionMiddleware = (req, res, next) => {
    if (req.cookies && req.cookies.userLogged) {
        // Si el usuario quiso ser recordado lo recordamos
        req.session.userLogged = req.cookies.userLogged;
        res.locals.userLogged = req.cookies.userLogged;
    }
    
    if (req.session && req.session.userLogged) {
        
        res.locals.userLogged = req.session.userLogged;
    }
    
    next();
}

module.exports = userSessionMiddleware;

//Este middleware quiere traer toda la data 