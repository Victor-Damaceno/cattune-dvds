var express = require("express");
var router = express.Router();

var musicaController = require("../controllers/musicaController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    musicaController.cadastrar(req, res);
})

router.get("/listar", function (req, res) {
    musicaController.listar(req, res);
});

// router.get("/listarRepertorio",)
//     musicaController.listarRepertorio(req, res);
module.exports = router;