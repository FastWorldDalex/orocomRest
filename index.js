const express = require('express');
const cors = require('cors');
const { DDBBconnecion } = require('./db/config');

const path = require('path');

require('dotenv').config();
console.log(process.env)
//Create server/aplication of express
const app = express();

//base de datos
DDBBconnecion;
// DIRECTORIO PUBLIC
app.use(express.static('public'));

//tamaño de img
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));
//CORS
app.use(cors());


//Lectura y parseo de body
app.use(express.json());


//RUTAS -mideware
//app.use('/api/auth', require('./routes/auth'));
app.use('/api/paginas', require('./routes/pagina'));
app.use('/api/Detalles', require('./routes/Detpagina'));

//Manejar rutas
app.get('*', (req, res) => {
    // const url = ['public/index.html', '/nosotros', 'public/nosotros']
    // if (!(url.includes(req.path.toString()))) {
    //     res.status(404);
    // }
   // res.render('index', { req, res });
    res.sendFile(path.resolve(__dirname,'public/index.html'))
});

app.listen(process.env.PORT || 4300, () => {
    console.log(`Server init port ${process.env.PORT || 4300}`);
});