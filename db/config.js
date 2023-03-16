const mysql = require('mysql');
require('dotenv').config();

const DDBBconnecion = mysql.createConnection({
    // host: process.env.HOST || 'localhost',
    // user: process.env.USER || 'root',
    // password: process.env.PASSWORD || 'root',
    // database: process.env.DATABASE || 'restangular'
    
    host: process.env.HOST || '167.114.218.76',
    user: process.env.USER || 'cajals4c_FastWorldDalex',
    password: process.env.PASSWORD || 'GaSmC.30.Cpanel',
    database: process.env.DATABASE || 'cajals4c_orocom_web'

});

DDBBconnecion.connect(async (err) => {
    if (err) {
        throw new Error('Algo malo pasó :(',err);
    } else {
        console.log('MAN NO SE DESTRUYO EL MUNDO, ESTAMOS CONECTADOS');
    }
});
// modo prueba



module.exports = {
    DDBBconnecion
}