const router = require('express-promise-router')();

const {
    index,
    nuevoDato,
    getDato,
    getMax,
    getMin,
    hola,
    getestado,
    setEstado,
    getMAXNO,
    getMINNO,
    getMAXNO_Ar,
    getMINNO_Ar
}= require('../controllers/Datos');

router.get('/',index);
router.post('/',nuevoDato);
router.get('/busqueda/:Correlativo',getDato);
router.get('/max',getMax);
router.get('/min',getMin);
router.get('/hola',hola);
router.get('/leidoM',getMAXNO);
router.get('/leidoMin',getMINNO);
router.get('/leidoMA',getMAXNO_Ar);
router.get('/leidoMinA',getMINNO_Ar);
router.get('/estado',getestado);
router.post('/estado',setEstado);


module.exports = router;