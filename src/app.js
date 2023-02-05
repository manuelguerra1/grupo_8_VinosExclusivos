const express = require('express');
const app = express();
const PORT = process.env.PORT || 3008; 

const mainRouter = require("./routers/main");
const usersRouter = require("./routers/users");
const carritoRouter = require("./routers/carrito");
const productsRouter = require("./routers/products");
const adminRouter = require('./routers/admin');

app.set('view engine', 'ejs');
app.set('views', './src/views');


app.use(express.static('public'));

app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto 3008');
})

app.use(mainRouter);
app.use(usersRouter);
app.use(carritoRouter);
app.use(productsRouter);
app.use(adminRouter);