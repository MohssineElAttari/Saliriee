let nom = document.getElementById("nom");
let prenom = document.getElementById("prenom");
let salire = document.querySelector("#salire");
let marieRadio = document.querySelector("#marie");
let celibataireRadio = document.querySelector("#celibataire");
let enfant = document.querySelector(".enfant");
let nombreInput = enfant.childNodes[1].childNodes[3];
let nombre = 0;
let enfantChild = document.querySelector(".enfantChild");
let prixTotal = 0;
let totalGlobale = 0;
let totalDiv = document.querySelector(".total");
let submitCalcul = document.querySelector(".submitCalcul");

function createElemants(nombreEnf) {
    enfantChild.innerHTML = "";
    let idN = 0;
    for (let i = 0; i < nombreEnf; i++) {
        let divElm = document.createElement("div");
        let labelElm = document.createElement("label");
        let element = document.createElement("input");
        let infoEnf = document.createElement("label");
        idN++;
        element.id = "id " + idN;
        element.classList.add('age');
        element.placeholder = "entre l'age de l'enfant " + idN;
        labelElm.innerHTML = "l'age de l'enfant :";
        infoEnf.style.display = "none";
        divElm.appendChild(labelElm);
        divElm.appendChild(element);
        divElm.appendChild(infoEnf);
        divElm.style.display = "inlineBlock";
        console.log(element.id);
        enfantChild.appendChild(divElm);
        console.log(element);
    }


    // ageInput.addEventListener("change", function() {
    //     console.log('wow');
    // })


}

function calcul(valueAge) {
    console.log(nom.value);
    console.log(prenom.value);
    console.log(salire.value);

    let AgeEnf = valueAge.parentElement;
    let childLabel = AgeEnf.childNodes[2];
    let childInput = AgeEnf.childNodes[1];
    prixTotal = parseInt(salire.value);
    totalGlobale = prixTotal;
    // console.log(AgeEnf);
    // console.log(childLabel);
    // console.log(childInput.value);
    // console.log("prix ", prixTotal);
    let prix = 0;
    childLabel.innerHTML = "age et : " + childInput.value + " et le percent : 3% total : " + prix.toFixed(2) + " DH";
    childLabel.style.display = "inline";

    switch (true) {
        case valueAge.value > 0 && valueAge.value < 5:
            prix = 0.03 * prixTotal;
            totalGlobale += prix;
            childLabel.innerHTML = "age et : " + childInput.value + " et le percent : 3% total : " + prix.toFixed(2) + " DH";
            childLabel.style.display = "inline";
            break;
        case valueAge.value >= 5 && valueAge.value < 12:
            prix = 0.05 * prixTotal;
            totalGlobale += prix;
            childLabel.innerHTML = "age et : " + childInput.value + " et le percent : 5% total : " + prix.toFixed(2) + " DH";
            childLabel.style.display = "inline";
            break;
        case valueAge.value >= 12 && valueAge.value < 24:
            prix = 0.07 * prixTotal;
            totalGlobale += prix;
            childLabel.innerHTML = "age et : " + childInput.value + " et le percent : 7% total : " + prix.toFixed(2) + " DH";
            childLabel.style.display = "inline";
            break;
        default:
            prix = 0;
            childLabel.innerHTML = "age et : " + childInput.value + " et le percent : 0% total : " + prix + " DH";
            childLabel.style.display = "inline";
    }
    console.log(totalGlobale);
    totalGlobale = totalGlobale - (totalGlobale * 0.15);
    console.log(totalGlobale * 0.15);
    console.log(totalGlobale);
    grtTotal();
}

function grtTotal() {
    totalDiv.innerHTML = totalGlobale;
}

function testE() {
    let ageE = document.querySelectorAll('.age');
    ageE.forEach(el =>
        el.addEventListener('change', function() {
            console.log("wawawa", el.value);
            calcul(el);
        }))
}



marieRadio.addEventListener("click", function() {
    // console.log(marieRadio.checked);

    if (marieRadio.checked) {
        enfant.hidden = false;
        // submitCalcul.hidden = true;
        // console.log(enfant.childNodes[1].childNodes[3])
    }

    enfant.childNodes[1].childNodes[3].addEventListener("change", function() {
        if (nombreInput.value > 0 && nombreInput.value <= 10) {
            nombre = nombreInput.value;
            createElemants(nombre);
            testE();
        } else
            nombre = 0;
        console.log(nombre);
    });
})


celibataireRadio.addEventListener("click", function() {
    prixTotal = parseInt(salire.value);
    console.log(prixTotal);
    console.log(celibataireRadio.checked);
    console.log(totalDiv);
    enfant.hidden = true;
    totalDiv.innerHTML = "le prix total : " + prixTotal;
    // submitCalcul.hidden = false;
})


// console.log(celibataireRadio.checked);