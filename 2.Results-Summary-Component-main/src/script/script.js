import myJson from "../data.json" assert { type: "json" };
var number_principal = document.getElementById("number_principal");
var numberTag1 = document.getElementById("numberTag1");
var numberTag2 = document.getElementById("numberTag2");
var numberTag3 = document.getElementById("numberTag3");
var numberTag4 = document.getElementById("numberTag4");

console.log(myJson);
number_principal.innerHTML = "Teste";

numberTag1.innerHTML = myJson[0].score;
numberTag2.innerHTML = myJson[1].score;
numberTag3.innerHTML = myJson[2].score;
numberTag4.innerHTML = myJson[3].score;

