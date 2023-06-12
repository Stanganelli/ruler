

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
divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`


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
divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas<br>`


img1.innerHTML = img
som1.innerHTML = som

