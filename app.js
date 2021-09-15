const express = require('express');
const app = express();

const mainRouter = require('./routes/mainRouter');
const productsRouter = require('./routes/productsRouter');
const registerRouter = require('./routes/registerRouter');
const loginRouter = require('./routes/loginRouter');



app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', mainRouter);
app.use('/products', productsRouter);
app.use('/productDetail', productsRouter);
app.use('/productCart', productsRouter);
app.use('/productCreate', productsRouter);
app.use('/productEdit', productsRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use*('termsAndConditions', mainRouter)


//Para levantar servidor
app.listen(3000, () =>{
    console.log('Servidor iniciado')
})