const authMiddleware = (req, res, next) => {
    if (req.session.userLogged) {
        
        return res.redirect('/profile');
    }
    
    next();
}

module.exports = authMiddleware;

//controla si esta logueado y te redirige a profile
