var database = require("../database/config");

function listar(){
    var instrucaoSql = `SELECT * FROM estilo`;

    return database.executar(instrucaoSql);
}

module.exports = {
    listar
};