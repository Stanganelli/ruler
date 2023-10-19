var database = require("../database/config")

function ganhadorBd(ganhador) {


    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", ganhador);

    var instrucao = `insert into vitoria(${ganhador}) values (1);`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function graficoMp() {
    instrucao2 = `select * from somaVitoria; `;

    console.log("Executando a instrução SQL: \n" + instrucao2);
    return database.executar(instrucao2);
}




module.exports = {
   ganhadorBd,
   graficoMp
}
