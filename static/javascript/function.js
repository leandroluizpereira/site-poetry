
alert("Poetry");

var authorLe = document.getElementById("author-leandro");
var authorVi = document.getElementById("author-vinicius");
var photoPerfil = document.getElementById("photo-perfil");
var titulo = document.getElementById("titulo");
var subTitulo = document.getElementById("sub-titulo");
var poetryOne = document.getElementById("poetry-one");
var poetryTwo = document.getElementById("poetry-two");
var poetryThree = document.getElementById("poetry-three");
var poetryFour = document.getElementById("poetry-four");
var poetryFive= document.getElementById("poetry-five");


authorLe.onclick = function(){
    photoPerfil.style.backgroundImage="url('static/imagem/leandro.jpg')";
    alert("clicou leandro ok");
}

authorVi.onclick = function(){
    alert("clicou vinicius ok");
    photoPerfil.style.backgroundImage="url('static/imagem/th.jpg')";
    titulo.textContent="Vinicius de Moraes";
    titulo.style="color:yellow";
    subTitulo.textContent="poesias";
    subTitulo.style="color:yellow";
    poetryOne.textContent="";
    poetryTwo.textContent="";
    poetryThree.textContent="";
    poetryFour.textContent="";
    poetryFive.textContent="";

}


