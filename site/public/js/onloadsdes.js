
var contqt1 = 0





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


if (moral > 50) {
    forcaart = forcaart / 2
}
if (moral > 90) {
    forcaman = forcaman / 1.5
}
if (moral > 75) {
    forcacav = forcacav / 2
}
if (moral > 25) {
    forcabal = forcabal / 2
}
if (ruler == "roman") {
    moneytim = "denarius"
    spanart.innerHTML = "linha de arqueiros"


}
if (ruler == "greek") {
    moneytim = "drachmas"
    spanart.innerHTML = "linha de arqueiros"

}
if (ruler == "franc") {
    spanart.innerHTML = "armadas de canhões"

    moneytim = "centimes"
}
if (ruler == "otoman") {
    moneytim = "liras"
    spanart.innerHTML = "armadas de canhões"

}
if (ruler == "perisan") {
    moneytim = "dìngs"
    spanart.innerHTML = "linha de arqueiros"


}
divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de Infantaria  ,<br> ${cavalary}de cavalaria.<br>${art} linhas especializadas<br>`


var img = localStorage.getItem("img")
    var som = localStorage.getItem
img1.innerHTML = img
som1.innerHTML = som