const router = require('express-promise-router')();

const {
    index,
    nuevoDato,
    getDato,
    getMax,
    hola,
    getestado,
    setEstado
}= require('../controllers/Datos');

router.get('/',index);
router.post('/',nuevoDato);
router.get('/busqueda/:Correlativo',getDato);
router.get('/max',getMax);
router.get('/hola',hola);
router.get('/estado',getestado);
router.post('/estado',setEstado);


module.exports = router;