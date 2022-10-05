
alert("Poetry");

var authorL = document.elementById("author-leandro");
var authorV = document.elementById("author-vinicius");
var photoPerfil = document.elementById("photo-perfil");





authorL.onclick = function (){
    console.log("leandro pereira "); 
    alert("click leandro pereira ok");
    authorL.style.background="#000000";
    authorL.textContent="";
    

    
}

authorV.onclick = function (){
     alert("Click Vinius de moraes ok");
     /*photoPerfil.style="background-image: url(../static/imagem/.jpg)";
     */
}