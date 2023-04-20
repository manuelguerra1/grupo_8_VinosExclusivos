const guestMiddleware = (req, res, next) => {
    if (!req.session.userLogged && !req.cookies.userLogged) {
        return res.redirect('/login');
    }
    
    next();
}

module.exports = guestMiddleware;
//Este middleware es para verificar si el usuario esta loggueado, en caso de que no lo dirige al login. 