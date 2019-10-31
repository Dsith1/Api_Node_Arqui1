const modeloD = require('../models/Datos');

module.exports = {

    index: async (req,res,next) =>{

        const datos = await modeloD.find({});
        res.status(200).json(datos);
              
    },

    nuevoDato: async(req,res,next)=>{
        const nuevoDato = new modeloD(req.body);
        const dato=await nuevoDato.save();
        res.status(200).json(dato);
    },

    getDato: async(req,res,next)=>{
        const{Correlativo}= req.params;
        const dato=await modeloD.find({'Correlativo':Correlativo});
        res.status(200).json(dato);
    }

};