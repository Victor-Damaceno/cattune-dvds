var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        res.json({
                            id: resultadoAutenticar[0].id,
                            email: resultadoAutenticar[0].email,
                            nome: resultadoAutenticar[0].nome,
                            estilo_id: resultadoAutenticar[0].estilo_id
                            
                        });
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var estilo = req.body.estiloServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (estilo == undefined) {
        res.status(400).send("Seu estilo está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha, estilo)
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

function cadastrarPref(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
       var nomeMusico = req.body.nomeMusicoServer;
       var instrumento = req.body.instrumentoServer;
       var tecnica = req.body.tecnicaServer;
       var nivel = req.body.nivelServer;
       var voz = req.body.vozServer;


    // Faça as validações dos valores
    if (nomeMusico == undefined) {
        res.status(400).send("O nomeMusico está undefined!");
    } else if (instrumento == undefined) {
        res.status(400).send("O instrumento está undefined!");
    } else if (tecnica == undefined) {
        res.status(400).send("Sua tecnica está undefined!");
    } else if (voz == undefined) {
        res.status(400).send("Sua voz está undefined!");
    } else if (nivel == undefined) {
        res.status(400).send("Seu nivel está undefined!"); 
    }
     else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nomeMusico, instrumento, tecnica, nivel, voz)
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

module.exports = {
    autenticar,
    cadastrar,
    cadastrarPref
}