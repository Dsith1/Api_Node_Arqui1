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
        const Ag=await modeloD.findOneAndUpdate({'Correlativo':Correlativo},{$set:{Leido:1}},{new:true});
        const dato=await modeloD.find({'Correlativo':Correlativo});
        res.status(200).json("E=="+dato[0].Dato);
    },

    getMax: async(req,res,next)=>{
        const dato=await modeloD.find().sort({'Correlativo':-1}).limit(1)
        res.status(200).json(dato[0].Correlativo);
    },

    getMin: async(req,res,next)=>{
        const dato=await modeloD.find().limit(1)
        res.status(200).json(dato[0].Correlativo);
    },

    hola: async(req,res,next)=>{
       
        res.status(200).send("E==hola");
    },

    getestado: async(req,res,next)=>{
       
        res.status(200).send("E=="+estado);
    },

    setEstado:async(req,res,next)=>{
       
        if(estado){
            estado=false;
        }else{
            estado=true;
        }

        res.status(200).send("E=="+estado);
    },
    getMAXNO: async(req,res,next)=>{
       
        const dato=await modeloD.find({'Leido':0}).sort({'Correlativo':-1}).limit(1)
        res.status(200).json(dato[0].Correlativo);
    },
    getMINNO: async(req,res,next)=>{
       
        const dato=await modeloD.find({'Leido':0}).limit(1)
        res.status(200).json(dato[0].Correlativo);
    },
    getMAXNO_Ar: async(req,res,next)=>{
       
        const dato=await modeloD.find({'Leido':0}).sort({'Correlativo':-1}).limit(1)
        res.status(200).send("E=="+dato[0].Correlativo);
    },
    getMINNO_Ar: async(req,res,next)=>{
       
        const dato=await modeloD.find({'Leido':0}).limit(1)
        res.status(200).send("E=="+dato[0].Correlativo);
    }

};