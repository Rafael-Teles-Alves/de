var imgAtual ="baner2.png";
var imgAnterior ="baner3.png";
var imginicio = "baner1.png";

function prox(){
    document.getElementById('img-troca').src=imgAtual;
    let aux = imgAtual;
    imgAtual = imgAnterior;
    imgAnterior = imginicio;
    imginicio = aux;
}
function vol(){
    document.getElementById('img-troca').src=imgAnterior;
    let aux = imgAnterior;
    imgAnterior = imgAtual;
    imgAtual = imginicio;
    imginicio = aux;
}
