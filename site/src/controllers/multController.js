var multModel = require("../models/multModel");


function ganhadorBd(req, res) {
    var ganhador = req.body.ganhadorServer;   
    console.log("resultado", ganhador)



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

function graficoMp(req, res) {
    multModel.graficoMp().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os dados do multiplayer", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
    ganhadorBd,
    graficoMp
}