
const mysql = require('mysql');
class Pagina {
    constructor(_id, _pagina, _usuario_modificacion, _fecha_modificacion) {
        this.id = _id;
        this.pagina = _pagina;
        this.usuario_modificacion = _usuario_modificacion;
        this.fecha_modificacion = _fecha_modificacion;
    }
    id;
    pagina;
    usuario_modificacion;
    fecha_modificacion;
}

function updatepagina(connection, pagina, callback) {
    let updateQuery = "UPDATE pagina set Pagina = ?, Usuario_Modificacion  = ?, Fecha_Modificacion  = ? WHERE Idpagina = ? ";
    let query = mysql.format(updateQuery, [pagina.pagina, pagina.usuario_modificacion, pagina.fecha_modificacion, pagina.id]);
    connection.query(query, function (error, results, details) {
        try {
            callback(results);
        } catch (error) {
            throw new Error(error);
        }
    });
}

function getPaginas(connection, callback) {
    let insertQuery = "select * from Pagina";
    let query = mysql.format(insertQuery);
    connection.query(query, function (error, result,details) {
        try {
            callback(result);
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    });
}

module.exports = {
    Pagina,
    updatepagina,
    getPaginas
}