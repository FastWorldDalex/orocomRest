const {Router}=require('express');
const { check } = require('express-validator');
const { loginuser, renewUser } = require('../controllers/auth.controller');
const { getPaginas,updatePagina } = require('../controllers/pagina.controller');

const router = Router();

//crear usuario

//login de usuario
router.post('/',getPaginas);
router.post('/actualizar',updatePagina);




//Listar Paginas



module.exports = router;
