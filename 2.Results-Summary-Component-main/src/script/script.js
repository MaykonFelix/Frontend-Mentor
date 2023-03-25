import myJson from "../data.json" assert { type: "json" };
var number_principal = document.getElementById("number_principal");
var numberTag1 = document.getElementById("numberTag1");
var numberTag2 = document.getElementById("numberTag2");
var numberTag3 = document.getElementById("numberTag3");
var numberTag4 = document.getElementById("numberTag4");

var imgTag1 = document.getElementById("imgTag1");
var imgTag2 = document.getElementById("imgTag2");
var imgTag3 = document.getElementById("imgTag3");
var imgTag4 = document.getElementById("imgTag4");

console.log(myJson);

number_principal.innerHTML = "Teste";

numberTag1.innerHTML = myJson[0].score;
numberTag2.innerHTML = myJson[1].score;
numberTag3.innerHTML = myJson[2].score;
numberTag4.innerHTML = myJson[3].score;

var imagem1 = myJson[0].icon;
imgTag1.setAttribute("src", imagem1);

var imagem2 = myJson[1].icon;
imgTag2.setAttribute("src", imagem2);

var imagem3 = myJson[2].icon;
imgTag3.setAttribute("src", imagem3);

var imagem4 = myJson[3].icon;
imgTag4.setAttribute("src", imagem4);
