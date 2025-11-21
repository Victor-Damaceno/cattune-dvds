var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, descricao, estilo, link) {
    console.log("ACESSEI O MUSICA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():" ,nome, descricao, estilo, link);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO musica (nome, descricao, estilo, link) VALUES ('${nome}', '${descricao}', '${estilo}', '${link}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listar(){
    var instrucaoSql = `SELECT estilo, COUNT(estilo) AS quantidade FROM musica GROUP BY estilo`;

    return database.executar(instrucaoSql);
}
module.exports = {
    cadastrar,
    listar
};