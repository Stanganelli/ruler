var ruler = localStorage.getItem("emperador")



var man = Number(localStorage.getItem("manp"))

var art = Number(localStorage.getItem("arti"))

var cavalary = Number(localStorage.getItem("cav"))

var csh = Number(localStorage.getItem("cash"))

var morale = Number(localStorage.getItem("moral"))

var forcaart = Number(localStorage.getItem("forcaart"))

var forcacav = Number(localStorage.getItem("forcacav"))

var forcaman = Number(localStorage.getItem("forcaman"))

var forcabal = Number(localStorage.getItem("forcabal"))


if (ruler == "roman") {
    moneytim = "denarius"
    var img = `<img src="media/augusuts.jpg" alt="">`

}
if (ruler == "greek") {
    moneytim = "drachmas"
    var img = `<img src="media/alexander.jpg" alt="">`
    var som = `<audio src="media/greek.mp3" autoplay loop></audio>`
}
if (ruler == "franc") {
    moneytim = "centimes"
    var img = `<img src="media/napoleao.jpg" alt="">`
    var som = `<audio src="media/french.mp3" autoplay loop></audio>`
}
if (ruler == "otoman") {
    moneytim = "liras"
    var img = `<img src="media/mehemed.jpg" alt="">`
    var som = `<audio src="media/turk.mp3" autoplay loop></audio>`
}
if (ruler == "perisan") {
    moneytim = "dìngs"
    var img = `<img src="media/qin.jpg" alt="">`
    var som = `<audio src="media/china.mp3" autoplay loop></audio>`
}   
localStorage.setItem("img", img);
localStorage.setItem("som", som );

