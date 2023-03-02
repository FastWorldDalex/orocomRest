const mysql = require('mysql');
class DetPagina {
    constructor(
        _id,
        _Idpagina,
        _Tipo,
        _Secuencia,
        _Descripcion_Uno,
        _Descripcion_Dos,
        _Descripcion_tres,
        _Imagen_Name,
        _Imagen_Type,
        _Imagen_Size,
        _Imagen_Base,
        _usuario_Modificacion,
        _fecha_modificacion,
        _IdPadre
    ) {
        this.id = _id;
        this.Idpagina = _Idpagina;
        this.Tipo = _Tipo;
        this.Secuencia = _Secuencia;
        this.Descripcion_Uno = _Descripcion_Uno;
        this.Descripcion_Dos = _Descripcion_Dos;
        this.Descripcion_tres = _Descripcion_tres;
        this.Imagen_Name = _Imagen_Name;
        this.Imagen_Type = _Imagen_Type;
        this.Imagen_Size = _Imagen_Size;
        this.Imagen_Base = _Imagen_Base;
        this.usuario_Modificacion = _usuario_Modificacion;
        this.fecha_modificacion = _fecha_modificacion;
        this.IdPadre = _IdPadre;
    }
    id;
    Idpagina;
    Tipo;
    Secuencia;
    Descripcion_Uno;
    Descripcion_Dos;
    Descripcion_tres;
    Imagen_Name;
    Imagen_Type;
    Imagen_Size;
    Imagen_Base;
    usuario_Modificacion;
    fecha_modificacion;
    IdPadre;
}

function getDetPagina(connection, callback) {
    let insertQuery = "select * from DetPagina";
    let query = mysql.format(insertQuery);
    connection.query(query, function (error, result,details) {
        try {
            callback(result);
        } catch (error) {
            throw new Error(error);
            
        }
    });
}

function actualizarDetPagina(connection, detPagina, callback) {
    let updateQuery = "UPDATE DetPagina set Descripcion_Uno = ?,Descripcion_Dos = ?,Descripcion_tres = ?,Imagen_Name  = ? ,Imagen_Type= ? ,Imagen_Size  = ?,Imagen_Base  = ?, usuario_Modificacion  = ?,Fecha_Modificacion  = ?,IdPadre  = ? WHERE IdDetpagina  = ? and Idpagina  = ?";
    let query = mysql.format(updateQuery, [detPagina.Descripcion_Uno,detPagina.Descripcion_Dos,detPagina.Descripcion_tres, detPagina.Imagen_Name, detPagina.Imagen_Type, detPagina.Imagen_Size, detPagina.Imagen_Base, detPagina.usuario_Modificacion, detPagina.fecha_modificacion,detPagina.IdPadre, detPagina.id, detPagina.Idpagina]);

    connection.query(query, function (error, results, details) {
        console.log('error',error);
        console.log('results',results);
        try {
            callback(results);
        } catch (error) {
            throw new Error(error);
        }
    });
}

module.exports = {
    DetPagina,
    getDetPagina,
    actualizarDetPagina
}