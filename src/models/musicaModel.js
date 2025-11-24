
var database = require("../database/config")

// const { listarRepertorio } = require("../controllers/musicaController");

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, descricao, estilo, link,id) {
    console.log("ACESSEI O MUSICA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():" ,nome, descricao, estilo, link,id);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO musica (nome, descricao, estilo, link, usuario_id) VALUES ('${nome}', '${descricao}', '${estilo}', '${link}', '${id}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listar(id){
    var instrucaoSql = `SELECT estilo, COUNT(estilo) AS quantidade FROM musica WHERE usuario_id = ${id} GROUP BY estilo`;

    return database.executar(instrucaoSql);
}

function listarMaior(id){
    var instrucaoSql = `SELECT estilo,
     COUNT(estilo) AS quantidadeMaior FROM musica WHERE usuario_id = ${id} 
     GROUP BY estilo ORDER BY quantidadeMaior DESC LIMIT 1;`

     return database.executar(instrucaoSql);
}

function mostrarMusicas(id){
    var instrucaoSql = `SELECT nome, descricao, estilo, link FROM musica WHERE usuario_id = ${id}`

    return database.executar(instrucaoSql);
}

// function listarRepertorio(){
//     var instrucaoSql = `SELECT COUNT(id) AS quantidade FROM musica`
// }
module.exports = {
    cadastrar,
    listar,
    listarMaior,
    mostrarMusicas
    // listarRepertorio
};