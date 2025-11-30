var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})
router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});


router.get("/classeVocal/:usuario_id", function (req, res) {
    usuarioController.classeVocal(req, res);
});

// router.post("/cadastrarPref/:usuario_id", function(req,res){
//     usuarioController.cadastrarPref(req,res);
// });
// router.post("/trazerUser", function (req,res){
//     usuarioController.trazerUser(req,res);
// });
module.exports = router;