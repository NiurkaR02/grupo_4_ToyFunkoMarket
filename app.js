const express = require('express')
const path = require('path')

const app = express();

app.use(express.static(__dirname + '/public'));

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

app.get('/termsAndConditions', (req, res) =>{
    res.sendFile(path.join(__dirname, 'views/termsAndConditions.html'));
});
app.get('/products', (req, res) =>{
    res.sendFile(path.join(__dirname, 'views/products.html'));
});
app.get('/perfil', (req, res) =>{
    res.sendFile(path.join(__dirname, 'views/perfil.html'));
});


//Para levantar servidor
app.listen(3000, () =>{
    console.log('Servidor iniciado')
})