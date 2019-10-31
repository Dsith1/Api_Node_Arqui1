const router = require('express-promise-router')();

const {
    index,
    nuevoDato,
    getDato
}= require('../controllers/Datos');

router.get('/',index);
router.post('/',nuevoDato);
router.get('/:Correlativo',getDato);


module.exports = router;