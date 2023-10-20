

function a(){ 

    var ruler = localStorage.getItem("emperador")
    var man = Number(localStorage.getItem("manp"))

    var art = Number(localStorage.getItem("arti"))

    var cavalary = Number(localStorage.getItem("cav"))

    var csh = Number(localStorage.getItem("cash"))

    var moral = Number(localStorage.getItem("moral"))

    var forcaart = Number(localStorage.getItem("forcaart"))

    var forcacav = Number(localStorage.getItem("forcacav"))

    var forcaman = Number(localStorage.getItem("forcaman"))

    var forcabal = Number(localStorage.getItem("forcabal"))
divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de Infantaria  ,<br> ${cavalary}de cavalaria.<br>${art} linhas especializadas`



    if (ruler == "roman") {
        moneytim = "denarius"

    }
    if (ruler == "greek") {
        moneytim = "drachmas"
    }
    if (ruler == "franc") {

        moneytim = "centimes"
    }
    if (ruler == "otoman") {
        moneytim = "liras"

    }
    if (ruler == "perisan") {
        moneytim = "dìngs"
    }

    divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de Infantaria  ,<br> ${cavalary}de cavalaria.<br>${art} linhas especializadas`


    if (ruler == "roman") {
        moneytim = "denarius"

        spanart.innerHTML = "linha de arqueiros"
    }
    if (ruler == "greek") {
        moneytim = "drachmas"
        spanart.innerHTML = "linha de arqueiros"
    }
    if (ruler == "franc") {

        spanart.innerHTML = "canhão"
        moneytim = "centimes"

        spanart.innerHTML = "armadas de canhões"
    }
    if (ruler == "otoman") {
        moneytim = "liras"

        spanart.innerHTML = "armadas de canhões"
    }
    if (ruler == "perisan") {
        moneytim = "dìngs"

        spanart.innerHTML = "linha de arqueiros"
    }
    
var img = localStorage.getItem("img")
var som = localStorage.getItem("som")

img1.innerHTML = img
som1.innerHTML = som
}