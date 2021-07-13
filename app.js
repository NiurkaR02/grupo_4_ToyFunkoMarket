const express = require('express')
const path = require('path')

const app = express();

//Definir rutas

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'views/home.html'));
});

app.get('/productDetail', (req, res) =>{
    res.sendFile(path.join(__dirname, 'views/productDetail.html'));
});

app.get('/productCart', (req, res) =>{
    res.sendFile(path.join(__dirname, 'views/productCart.html'));
});

app.get('/register', (req, res) =>{
    res.sendFile(path.join(__dirname, 'views/register.html'));
});

app.get('/login', (req, res) =>{
    res.sendFile(path.join(__dirname, 'views/login.html'));
});



//Para levantar servidor
app.listen(3000, () =>{
    console.log('Servidor iniciado')
})