let nom = document.getElementById("nom");
let prenom = document.getElementById("prenom");
let salire = document.querySelector("#salire");
let marieRadio = document.querySelector("#marie");
let celibataireRadio = document.querySelector("#celibataire");
let enfant = document.querySelector("#enfant");

marieRadio.addEventListener("click", function() {
    console.log(marieRadio.checked);
})
celibataireRadio.addEventListener("click", function() {
    console.log(celibataireRadio.checked);
})
console.log(nom);
console.log(prenom);
console.log(salire);

// console.log(celibataireRadio.checked);