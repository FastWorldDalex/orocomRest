const { response } = require('express');
const { DDBBconnecion } = require('../db/config');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');
const { getDetPagina, DetPagina,actualizarDetPagina } = require('../models/DetPagina');


const actualizarPagina = (req, res = response) => {
    const {

        Descripcion_Uno: _Descripcion_Uno,
        Descripcion_Dos: _Descripcion_Dos,
        Descripcion_tres: _Descripcion_tres,
        Descripcion_Cuatro: _Descripcion_Cuatro,
        Imagen_Name: _Imagen_Name,
        Imagen_Type: _Imagen_Type,
        Imagen_Size: _Imagen_Size,
        Imagen_Base: _Imagen_Base,
        usuario_Modificacion: _usuario_Modificacion,
        Fecha_Modificacion: _Fecha_Modificacion,
        IdPadre: _IdPadre,
        IdDetpagina: _IdDetpagina,
        Idpagina: _Idpagina
    } = req.body;

    try {
        let detPagina = new DetPagina(
            _IdDetpagina,
            _Idpagina,
            'null',
            0,
            _Descripcion_Uno,
            _Descripcion_Dos,
            _Descripcion_tres,
            _Descripcion_Cuatro,
            _Imagen_Name,
            _Imagen_Type,
            _Imagen_Size,
            _Imagen_Base,
            _usuario_Modificacion,
            _Fecha_Modificacion,
            _IdPadre
        );
        actualizarDetPagina(DDBBconnecion, detPagina, async (POST) => {
            console.log("DETALLE DE PAGINA ACTUALIZADO", POST);
            if(POST == undefined){
                return res.status(405).json({
                    ok: false,
                    msg: 'Actualización fallida'
                });
            }
            return res.status(200).json({
                ok: true,
                msg: 'Actualización Exitosa'
            });
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Error interno. comunicarse con el area de TI'
        });
    }
};

const obtenerDetPaginas = (req, res = response) => {

    const {

        Descripcion_Uno: _Descripcion_Uno,
        Descripcion_Dos: _Descripcion_Dos,
        Descripcion_tres: _Descripcion_tres,
        Descripcion_Cuatro: _Descripcion_Cuatro,
        Imagen_Name: _Imagen_Name,
        Imagen_Type: _Imagen_Type,
        Imagen_Size: _Imagen_Size,
        Imagen_Base: _Imagen_Base,
        usuario_Modificacion: _usuario_Modificacion,
        Fecha_Modificacion: _Fecha_Modificacion,
        IdPadre: _IdPadre,
        IdDetpagina: _IdDetpagina,
        Idpagina: _Idpagina
    } = req.body;

    try {
        let detPagina = new DetPagina(
            _IdDetpagina,
            _Idpagina,
            'null',
            0,
            _Descripcion_Uno,
            _Descripcion_Dos,
            _Descripcion_tres,
            _Descripcion_Cuatro,
            _Imagen_Name,
            _Imagen_Type,
            _Imagen_Size,
            _Imagen_Base,
            _usuario_Modificacion,
            _Fecha_Modificacion,
            _IdPadre
        );

        getDetPagina(DDBBconnecion,detPagina, async (POST) => {
            console.log("PAGINA REGISTRADO traer", POST);

            return res.status(200).json({
                ok: true,
                msg: POST
            });
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Error interno. comunicarse con el area de TI'
        });
    }
};
module.exports = {
    getDetPaginas: obtenerDetPaginas,
    POSTDetPaginas: actualizarPagina,
}