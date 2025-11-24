var express = require("express");
var router = express.Router();

var musicaController = require("../controllers/musicaController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    musicaController.cadastrar(req, res);
})

router.get("/listar/:usuario_id", function (req, res) {
    musicaController.listar(req, res);
});

router.get("/listarMaior/:usuario_id", function (req,res) {
    musicaController.listarMaior(req, res)
})

router.get("/mostrarMusicas/:usuario_id", function(req,res){
    musicaController.mostrarMusicas(req,res)
})
router.get("/contarPublicacoes/:usuario_id", function(req,res){
    musicaController.contarPublicacoes(req,res)
})

// router.get("/listarRepertorio",)
//     musicaController.listarRepertorio(req, res);
module.exports = router;