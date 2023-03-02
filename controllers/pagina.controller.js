const { response } = require('express');
const { DDBBconnecion } = require('../db/config');
const { Pagina,updatepagina, getPaginas } = require('../models/Pagina');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');


const actualizarPagina = (req, res = response) => {
    const {id:_Id, pagina: _Pagina, UsuarioModificacion: _Usuario_modificacion, fecha_modificacion: _Fecha_modificacion } = req.body;

    try {
        let pagina = new Pagina(_Id, _Pagina, _Usuario_modificacion, _Fecha_modificacion);
            updatepagina(DDBBconnecion, pagina,async (PUT) => {
                console.log("PAGINA REGISTRADO", PUT);

                return res.status(200).json({
                    ok: true,
                    msg: 'Nombre de página actualizada.'
                });
            });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Error interno. comunicarse con el area de TI'
        });
    }




    // const rpta = await DDBBconnecion.query('insert into usuario set ?', req.body, function(error,results,fields){
    //     if(error){
    //         throw new Error(error);
    //     }
    //     console.log('results', results);
    // });



};

const obtenerPaginas = (req, res = response) => {
    

    try {
            getPaginas(DDBBconnecion,async (PUT) => {
                console.log("PAGINA REGISTRADO", PUT);

                return res.status(200).json({
                    ok: true,
                    msg: PUT
                });
            });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Error interno. comunicarse con el area de TI'
        });
    }




    // const rpta = await DDBBconnecion.query('insert into usuario set ?', req.body, function(error,results,fields){
    //     if(error){
    //         throw new Error(error);
    //     }
    //     console.log('results', results);
    // });



};
module.exports = {
    updatePagina: actualizarPagina,
    getPaginas: obtenerPaginas,
}