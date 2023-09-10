var database = require("../database/config");

function buscarUltimasMedidas() {
    instrucaoSql = `select lider.nome, count(fkEmperador) as 'qtd_pessoas' from usuario join lider on fkEmperador = idLider group by fkEmperador;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarUltimasMedidasa() {
    //aqui ultilizo a view criada em script-tabelas.sql
    instrucaoSql1 = `SELECT * FROM VW_RESULTADO`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql1 );

    return database.executar(instrucaoSql1);
    

}




module.exports = {
    buscarUltimasMedidas,
    buscarUltimasMedidasa,
}
