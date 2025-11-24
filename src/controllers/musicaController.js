var musicaModel = require("../models/musicaModel");

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    console.log(req.body)
    var nome = req.body.nomeServer;
    var descricao = req.body.descricaoServer;
    var estilo = req.body.estiloServer;
    var link = req.body.linkServer;
    var id = req.body.usuario_idServer;

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
    } else if (id == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        musicaModel.cadastrar(nome, descricao, estilo, link, id)
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



function listar(req, res) {

    var id = req.params.usuario_id;
    
    musicaModel.listar(id).then((resultado) => {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar suas músicas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });

}


function listarMaior(req, res) {
    console.log("PARAMS:", req.params);
    var id = req.params.usuario_id;

    musicaModel.listarMaior(id).then((resultado) => {
        res.status(200).json(resultado);

    }).catch((erro) => {
        console.log("Erro no controller:", erro);
        res.status(500).json(erro);
    }
    )
}

function mostrarMusicas(req, res){
    console.log(req.params)
    var id = req.params.usuario_id;

    musicaModel.mostrarMusicas(id).then((resultado) => {
        res.status(200).json(resultado);
    }).catch((erro) => {
        console.log("ERRO no controler",erro);
        res.status(500).json(erro.sqlMessage);
    })

}

function contarPublicacoes(req, res) {
    console.log("PARAMS:", req.params);
    var id = req.params.usuario_id;

    musicaModel.contarPublicacoes(id).then((resultado) => {
        res.status(200).json(resultado);

    }).catch((erro) => {
        console.log("Erro no controller:", erro);
        res.status(500).json(erro);
    }
    )
}



module.exports = {
    cadastrar,
    listar,
    listarMaior,
    mostrarMusicas,
    contarPublicacoes
    // listarRepertorio
}