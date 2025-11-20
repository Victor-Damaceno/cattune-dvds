var express = require("express");
var router = express.Router();

var estiloController = require("../controllers/estiloController");

router.get("/listar", function (req, res) {
    estiloController.listar(req, res);
})

module.exports = router;