var multModel = require("../models/multModel");


function ganhadorBd(req, res) {
    var ganhador = req.body.ganhadorServer;   
    console.log("resultado", resultado)



    if (ganhador == undefined) {
        res.status(400).send("não chegou ganhador");
    } else {
        
        multModel.ganhadorBd(ganhador)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        `\n não foi capaz de colocar ${ganhador} `,
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


module.exports = {
    ganhadorBd
}