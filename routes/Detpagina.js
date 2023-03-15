const { Router } = require('express');
const { check } = require('express-validator');
const { loginuser, renewUser } = require('../controllers/auth.controller');
const { getDetPaginas,POSTDetPaginas } = require('../controllers/Detpagina.controller');


const router = Router();

//crear usuario

//login de usuario
router.post('/', getDetPaginas);
router.post('/actualizar', POSTDetPaginas);


//Listar Paginas



module.exports = router;
