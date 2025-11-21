var musicaModel = require("../models/musicaModel");

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    console.log(req.body)
    var nome = req.body.nomeServer;
    var descricao = req.body.descricaoServer;
    var estilo = req.body.estiloServer;
    var link = req.body.linkServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (descricao == undefined) {
        res.status(400).send("Sua descricao está undefined!");
    } else if (estilo == undefined) {
        res.status(400).send("Seu estilo está undefined!");
    }
    else if (link == undefined) {
        res.status(400).send("Seu link está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        musicaModel.cadastrar(nome, descricao, estilo, link)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

var musicaModel = require("../models/musicaModel");

 function listar(req,res){
    musicaModel.listar().then((resultado) => {
    res.status(200).json(resultado);
    })
}

// function listarRepertorio(req,res){
//     musicaModel.listarRepertorio().then((resultado) => {
//         res.status(200).json(resultado);
//     })
// }

module.exports = {
    cadastrar,
    listar,
    // listarRepertorio
}