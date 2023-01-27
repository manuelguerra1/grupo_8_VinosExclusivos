const express = require('express');
const app = express();
const PORT = process.env.PORT || 3008; 

const mainRouter = require("./routers/main");
const usersRouter = require("./routers/users");
const carritoRouter = require("./routers/carrito");
const productsRouter = require("./routers/products");

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
/*
app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/register', (req, res) =>{
    res.sendFile(__dirname + '/views/register.html')
})

app.get('/carrito', (req, res) =>{
    res.sendFile(__dirname + '/views/carrito.html')
})

app.get('/login', (req, res) =>{
    res.sendFile(__dirname + '/views/login.html')
})

app.get('/productDetail', (req, res) =>{
    res.sendFile(__dirname + '/views/productDetail.html')
})
*/
