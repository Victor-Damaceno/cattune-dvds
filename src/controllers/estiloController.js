var estiloModel = require("../models/estiloModel");

 function listar(req,res){
    estiloModel.listar().then((resultado) => {
    res.status(200).json(resultado);
    })
}
module.exports = {listar};
