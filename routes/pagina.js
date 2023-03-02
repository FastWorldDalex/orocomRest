const {Router}=require('express');
const { check } = require('express-validator');
const { loginuser, renewUser } = require('../controllers/auth.controller');
const { getPaginas } = require('../controllers/pagina.controller');

const router = Router();

//crear usuario

//login de usuario
router.post('/',getPaginas);


//Listar Paginas



module.exports = router;
