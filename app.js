const express = require('express');
const app = express();
app.use(express.static('public'));
const path = require('path')


app.listen(3008, ()=>{
    console.log('Servidor funcionando en el 3008!');
});

app.get('/', (req,res)=>{
    res.sendFile(path.resolve(__dirname + '/views/index.html'));
});
