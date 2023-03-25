import myJson from "../data.json" assert { type: "json" };
var number_principal = document.getElementById("number_principal");

document.getElementById("numberTag1").innerHTML = myJson[0].score;
document.getElementById("numberTag2").innerHTML = myJson[1].score;
document.getElementById("numberTag3").innerHTML = myJson[2].score;
document.getElementById("numberTag4").innerHTML = myJson[3].score;

document.getElementById("Title1").innerHTML = myJson[0].category;
document.getElementById("Title2").innerHTML = myJson[1].category;
document.getElementById("Title3").innerHTML = myJson[2].category;
document.getElementById("Title4").innerHTML = myJson[3].category;

document.getElementById("imgTag1").setAttribute("src", myJson[0].icon);
document.getElementById("imgTag2").setAttribute("src", myJson[1].icon);
document.getElementById("imgTag3").setAttribute("src", myJson[2].icon);
document.getElementById("imgTag4").setAttribute("src", myJson[3].icon);

console.log(myJson);

var total = 0;

for (var i = 0; i < myJson.length; i++) {
  total += myJson[i].score;
}
var media = Math.round(total / myJson.length);
console.log(media);

number_principal.innerHTML = media;
