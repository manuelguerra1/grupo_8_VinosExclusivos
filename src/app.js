const express = require('express');
const app = express();

//Agregamos express-session con (npm i express-session -S)
const cookieParser = require('cookie-parser')
const session = require('express-session');
const methodOverride = require('method-override');

const userSessionMiddleware = require('./middlewares/userSessionMiddleware')

const PORT = process.env.PORT || 3008;

const mainRouter = require("./routers/main");
const usersRouter = require("./routers/users");
const carritoRouter = require("./routers/carrito");
const productsRouter = require("./routers/products");

const apiProductsRoutes = require("./routers/api/apiProductsRoutes")

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());
app.use(session({
    secret: 'secret',
    resave: false,
    //se coloca false para que se guarde una vez la sesion, en el caso que pongas true no es lo correcto se guardaria dos veces.
    saveUninitialized: true,
    // cookie: {maxAge: 60000}
    // cookie: 'destroy'
}))

app.use(methodOverride('_method'));
app.use(userSessionMiddleware);
app.use(express.static('public'));



app.use(mainRouter);
app.use(usersRouter);
app.use(carritoRouter);
app.use(productsRouter);

app.use(apiProductsRoutes);
app.use((req,res) =>{
    res.status(404).render('404', {
        title: '404'
    })
})

app.listen(PORT, () => {
    console.log("El servidor esta corriendo en http://localhost:" + PORT);
})