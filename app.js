const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(3008, () => {
    console.log('Servidor corriendo en el puerto 3008');
})

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

