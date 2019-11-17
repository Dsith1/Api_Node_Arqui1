global.estado=true;
const bodyparser = require('body-parser');
const morgan = require('morgan');
const express = require('express');
const moongose = require('mongoose');


const app = express();

const DatosUrl= require('./routes/Datos');

moongose.Promise = global.Promise;

moongose.connect('mongodb+srv://Dsith:Jangofet.1@dsithmongo-rdoie.mongodb.net/Arqui1?retryWrites=true&w=majority',
    {
        seNewUrlParser: true,
        useNewUrlParser: true,
        useUnifiedTopology: true 
    }).then(db => console.log('conectado a la base'))
    .catch(err => console.log(err));

//settings
app.set('port',process.env.PORT ||3000);

//midlewears
app.use(morgan('dev'));
app.use(bodyparser.json());

//rutas
app.use('/datos',DatosUrl);

app.listen(app.get('port'),() =>{
    console.log('Escuchando al puerto ',app.get('port'))
});