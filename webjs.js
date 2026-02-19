
const incrementer = document.getElementById("inc"); 
const rest = document.getElementById("aucun");
const desincrmenter = document.getElementById("des");
const mytext = document.getElementById("h1");
let conteur = 0;

incrementer.onclick = function(){
    conteur++;
    mytext.textContent = conteur;
}
rest.onclick = function(){
    conteur = 0;
    mytext.textContent = conteur;
}
desincrmenter.onclick = function(){
    conteur--;
    mytext.textContent = conteur;
}

const check1 = document.getElementById("ckecradio1");
const check2 = document.getElementById("ckecradio2");
const resultat = document.getElementById("result");


function updateResult() {
    if (check1.checked) {
        resultat.textContent = "Tu as un homme";
    } else if (check2.checked) {
        resultat.textContent = "Tu as une femme";
    } else {
        resultat.textContent = "";
    }
}

// Écouter le changement de sélection
check1.addEventListener("change", updateResult);
check2.addEventListener("change", updateResult);


const nombre = document.getElementById("number");
const element = document.getElementById("labelnumber");
const afficherResult = document.getElementById("mysubmit");
 


afficherResult.onclick = function(){
    
    const n = parseInt(nombre.value);
    if(isNaN(n) || n <= 0){
        element.textContent = "Veuillez entrer un nombre positif";
        return;
    }

    for(let i=0; i< n; i++){
        element.innerHTML += "bonjour FSSM<br>";
    }

}


//autre methode de déclarer les fonctions
const add = (a,b) => {
    return a+b;
}
res = add(3,6);
console.log(res);

function person(nom, prenom, age, adresse){
    this.nom = nom,
    this.prenom = prenom,
    this.age = age,
    this.adresse = adresse
}

const person1 = new person("ali", "ahmed", 23, "rabat");
const person2 = new person("hicham", "rachid", 27, "tanger");
console.log(person1.prenom);

class produit{
    constructor(nom, code, prix, dataLivraison){
        this.nom = nom;
        this.code = code;
        this.prix = prix;
        this.dataLivraison = dataLivraison;
    }
    connaitreProduit(){
        console.log(`le produit: ${this.nom}`);
        console.log(`le prix: ${this.prix}`);

    }
}

const produit1 = new produit("chaise",35);
produit1.connaitreProduit();

//static
class user{
    static conteur = 0;

    constructor(nom){
        this.nom = nom;
        user.conteur++;
    }
}

const user1 = new user("hassan");
const user2 = new user("rachid");
console.log(user1.nom);
console.log(user2.nom);
console.log(user.conteur);

//héritage
class mobil{
    marcher(){
        console.log(`${this.mark} peut marcher`);
    }
    accelerer(){
        console.log(`${this.mark} fait une acceleration`);
    }
    frainer(){
        console.log(`${this.mark} peut frainer`);
    }
}

class voiture extends mobil {
    constructor(mark, version, moteur){
        super(mark);
        this.mark = mark;
        this.version = version;
        this.moteur = moteur;
    }

}

const voiture1 = new voiture("firrari", 3.2, 14);
const voiture2 = new voiture("merceides", 5.4, 12);
console.log(voiture1);
voiture1.marcher();
voiture2.accelerer();
voiture1.frainer();


// get et set 

class rectangle{
    constructor(longeur, largeur){
        this.longeur = longeur;
        this.largeur = largeur;
    }

    set longeur(newLongeur){
        if(newLongeur > 0){
            this._longeur = newLongeur;
        }
        else{
            console.error("donner un nombre positive");
        }
    }
    set largeur(newLargeur){
        if(newLargeur > 0){
            this._largeur = newLargeur;
        }
        else{
            console.error("donner un nombre positive");
        }
    }

    get longeur(){
        return this._longeur;
    }
    get largeur(){
        return this._largeur;
    }
    get surface(){
        return this._longeur * this._largeur;
    }
}

const Rectangle = new rectangle(3,4);

console.log(Rectangle);
console.log(Rectangle.surface);

// destructuration 
let a = 1;
let b = 2;
[a,b] =[b,a];

const  colors = ["rouge", "noir", "blue"];
[colors[0], colors[2]] = [colors[2], colors[0]];
console.log(colors);

const [firstcolor, secondcolor, thirdcolor] = colors;
console.log(secondcolor);

const employee1 = {
    nom : "hassan rachid",
    age : 23,
}
const {nom, age} = employee1;

function verifierEmployee({nom, age}){
    console.log(nom);
    console.log(age);
}
verifierEmployee(employee1);

// objets imbriqués 

class citoyen{
    constructor(nom, age, ...adresse){
        this.nom = nom;
        this.age =age;
        this.adresse = new Adresse(...adresse);

    }
}
class Adresse{
    constructor(region, province, village){
        this.region = region;
        this.province = province;
        this.village = village;
    }
}

const citoyen1 = new citoyen("ahmed", 37,"draa-tafilalt", "tinhgir", "kellat mgouna");
console.log(citoyen1.adresse);
//sort()
const tabNum = [18,32, 6, 0, 56, 12, 4];
tabNum.sort((a,b) => b - a);
console.log(tabNum);

// setTimeout
//const resaaac = setTimeout(() => {window.alert("Bonjour")}, 3000);
//clearTimeout(resaaac);   ----pour annuler---
function start(){
    setTimeout(() => window.prompt(), 3000);
}


const nombre1 = document.getElementById("n1");
const nombre2 = document.getElementById("n2");
const n3 = document.getElementById("heading3");

document.getElementById("veriParite").onclick = function(){
    const aff1 = document.getElementById("h41");
    const aff2 = document.getElementById("h42");
    let n1 = Number(nombre1.value);
    let n2 = Number(nombre2.value);
    if(n1 % 2 == 0){
        aff1.textContent = `${n1} est un nombre pair`;
    }
    else{
        aff1.textContent = `${n1} est un nombre impair`;
    }
        
    if(n2 % 2 == 0){
        aff2.textContent = `${n2} est un nombre pair`;
    }
    else{
        aff2.textContent = `${n2} est un nombre impair`;
    }
    
}

function somme(){
    let n1 = Number(nombre1.value);
    let n2 = Number(nombre2.value);
    let c = n1 + n2;
    n3.textContent = c;
}
function soustraction(){
    let n1 = Number(nombre1.value);
    let n2 = Number(nombre2.value);
    let c = n1 - n2;
    n3.textContent = c;
}
function multiplication(){
    let n1 = Number(nombre1.value);
    let n2 = Number(nombre2.value);
    let c = n1 * n2;
    n3.textContent = c;
}
function division(){
    let n1 = Number(nombre1.value);
    let n2 = Number(nombre2.value);
    let c = n1 / n2;
    n3.textContent = c;
}


function infosEtudiant(nom, note){
    if(note >= 10){
        console.log("Admis");
    }
    else{
        console.log("Ajourné");
    }
}
infosEtudiant("hassan", 5);

function fizzBuzz(n){
    for(let i = 0 ; i < n ;i++){
        if(n % 3 == 0){
            console.log("Fizz");

        }
        else if (n % 5 == 0) {
            console.log("Buzz");
        } 
        else if (n % 5 == 0 && n % 3 == 0 ) {
            console.log("FizzBuzz");
        } 
        else{
            console.log(n);
        }
    }

}
fizzBuzz(15);

let notes = [12, 8, 15, 10, 7];
let c = 0;
for(let i = 0; i < notes.length; i++){
    c += notes[i];

}
console.log(c);
let moyenne;
moyenne = c / notes.length;
console.log(moyenne);
let variable = 0;
for(let i = 0; i < notes.length; i++){
    if(notes[i] > variable){
        variable = notes[i];

    }


}
console.log(variable);

let d = 0;
for(let i = 0; i < notes.length; i++){
    if(notes[i] >= 10){
        d += 1;
    }
}
console.log(d);


