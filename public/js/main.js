// ## EXO1
// ### Créer une class Personnage avec comme propriétés : 
// ### age , nom , ville
// ### Faire 2 instances de cette class.
/*
class Personnage {
    constructor(age,nom,ville) {
        this.age = age;
        this.nom = nom;
        this.ville = ville;
        this.sePresenter = (phrase) =>{
            return phrase;
        }
    }
}

let ilias = new Personnage(27, "Ilias", "Bruxelles");
let marco = new Personnage(000,"Marco","Nowhere");
console.log(ilias);
*/



// ## EXO2
// ### Rajouter la methode 'sePresenter' à la class Personnage qui dira "Bonjour, je m'appelle [nom-de-la-personne] !" via un console.log
// ### Lancer cette méthode sur les deux instances de l'exo1

/*
console.log(ilias.sePresenter(`Bonjour, je m'appelle ${ilias.nom}`));
*/

/*
## EXO1
## Traduire le code suivant en class et en instances

### lieux
### let maison = {
###   nom: "maison",
###   contenu: [],
### };
### let epicerie = {
###   nom: "epicerie",
###   contenu: [],
###   ingredients: [],
### };
### let cuisine = {
###   nom: "cuisine",
###   contenu: [],
###   ingredients: [],
### };
*/


/*
//réponse
class Lieux{
    constructor(nom,contenu,ingredients){
        this.nom =  nom;
        this.contenu = contenu;
        this.ingredients = ingredients;
    }
}
let maison = new Lieux("maison",[]);
let epicerie = new Lieux("épicerie",[],[]);
let cuisine = new Lieux("maison",[],[]);
console.log(maison);
console.log(epicerie);
console.log(cuisine);
*/

/*
### ingredients
### let poivron = {
###   nom: 'poivron',
###   etat: 'entier',
###   prix:  1 ,
###  };
###  let oignon = {
###   nom: 'oignon',
###   etat: 'entier',
###   prix:  2 ,
###  };
###  let oeuf = {
###   nom: 'oeuf',
###   etat: 'entier',
###   prix:  4 ,
###  };
###  let epice = {
###   nom: 'epice',
###   etat: 'moulu',
###   prix:  3.25 ,
###  };
###  let paprika = {
###   nom: 'paprika',
###   etat: 'moulu',
###   prix:  1.5 ,
###  };
###  let fromage = {
###   nom: 'fromage',
###   etat: 'coupé',
###   prix:  1.6 ,
###  };
*/

/*
// réponse
class Ingredients{
    constructor(nom, etat, prix){
        this.nom =  nom;
        this.etat = etat;
        this.prix = prix;
    }
}
let poivron = new Ingredients("poivron","entier",1);
let oignon = new Ingredients("oignon","entier",2);
let oeuf = new Ingredients("oeuf","entier",4);
let epice = new Ingredients("epice","moulu",3.25);
let paprika = new Ingredients("paprika","moulu",1.5);
let fromage = new Ingredients("fromage","coupé",1.6);

console.log(poivron);
console.log(oignon);
console.log(oeuf);
console.log(epice);
console.log(paprika);
console.log(fromage);
*/
/*
### Personne
### let personnage = {
###  nom: "Maxime",
###  lieu: "néant",
###  argent: 100,
###  panier: [],
###  se_deplacer(x){
###  },

###  payer(x){
###  },
###  couper(x,y){
###  }
### }
*/

/*
// réponse 
class Personne{
    constructor(nom, lieu, argent, panier){
        this.nom = nom;
        this.lieu = lieu;
        this.argent = argent;
        this.panier = panier;
        this.seDeplacer = (x) => {

        };
        this.payer = (x) => {

        };
        this.couper = (x, y) => {

        };
        }
    }
    let personnage = new Personne(`Maxim`, `néant`, 100, []);
*/

/*
    ## Exo3

    ### Créer une class Objet
    ### _Propriétés : nom, prix
    
    ### Créer deux instances d'objets avec un nom et un prix
    ### Créer une boite (tableau) et mettre les deux objets dedans.
    
    ### Créer une class Personnage
    ### _Propriétés : nom(string), sac(tableau), argent(number)
    ### _Méthode : prendre(objet)
    ### _Méthode : acheter(vendeur, objet)
    
    ### Créer deux instances de Personnage et faites leur chacun [prendre] un objet de la boite avec leur méthode.
    ### Ensuite faites acheter à l'un des deux, l'objet de l'autre.
*/


/*
let boite = [];
class Objet {
    constructor(nom, prix){
        this.nom = nom;
        this.prix = prix;   
    }
}
let tv = new Objet("sony", 800);
let iphone = new Objet("bestphone", 1500);
let tab = [];
tab.push(tv, iphone);

class Personnage {
    constructor(nom, sac, argent){
        this.nom = nom;
        this.sac = sac;
        this.argent = argent;
        this.prendre = (objet, boite) =>{
            this.sac.push(objet);
            boite.splice(boite.indexOf(objet),1);
            console.log(`${this.nom} amis un ${objet.nom} dans son sac`);
        };
        this.acheter = (vendeur, objet) =>{
            if(this.argent >= objet.prix){
                this.argent -= objet.prix
                vendeur.argent += objet.prix
                this.sac.push(objet);
                vendeur.sac.splice(vendeur.sac.indexOf(objet),1);
            }else{
                console.log("Va acheter des trucs moins chers !")
            }
            
        };
    }
}

let marco = new Personnage("Marco", [], 1234);
let marc = new Personnage("Marc", [], 123);

marco.prendre()
*/







// ## EXO4

// ### Créez une class [Lieu] avec une propriété nom(string) et personnes(array vide).
class Lieu {
    constructor(nom, personnes){
        this.nom = nom;
        this.personnes = personnes;
    }
}
// ### Puis créez des instances de [Lieu]: MolenGeek, Snack et Maison
let molengeek = new Lieu("Molengeek",[]);
let snack = new Lieu("Snack",[]);
let maison = new Lieu("Maison",[]);
// ### Puis créez une class [Personne] avec une propriété nom(string), prenom(string), argent(number) et une methode seDeplacer(), 
// cette methode permet de vous déplacer dans les differents lieux en faisant appel à la méthode embarquer() du bus.
class Personne{
    constructor(nom, prenom, argent){
        this.nom = nom;
        this.prenom = prenom;
        this.argent = argent;
        this.seDeplacer = (depart, arrivee, transport) =>{
            if(transport == "pied" ){
                console.log(` ${this.prenom} a voulu y aller à pieds. `);
            }else if(transport.embarquer(this) == true){
                console.log(` ${this.prenom} est richer grâce à son salaire de Molengeek, donc elle a pris le bus. `);
            }else{
                console.log(` ${this.prenom} est forcé d'aller à pied. `);
            }
            depart.personnes.splice(depart.personnes.indexOf(this), 1);
            arrivee.personnes.push(this);
            console.log(`${this.prenom} est arrivée à ${arrivee.nom}`);
        };
        
    }
}
// ### Puis créez une instance de votre personnage.
let ilias = new Personne("Derraz", "Ilias", 30);
console.log(ilias);
// ### Créez une class [Bus] avec une propriéte personnes(array vide), une propriéte caisse(number) et une methode embarquer() (qui sera appelée 
//dans la méthode seDeplacer() de la personne) qui va vérifier si vous possedez l'argent, si oui, il le déduit de votre argent, 
//et le rajoute à sa caisse, et le personnage rentre dans le bus. Le bus cout 2.80.
class Bus{
    constructor(personnes,caisse){
        this.personnes = personnes;
        this.caisse = caisse;
        this.embarquer = (usager) =>{
            if(2.80 >= usager.argent){
                usager.argent -= 2.80;
                this.caisse += 2.80;
                this.personnes.push(usager);
                console.log(`${usager.nom}`);
                this.personnes.splice(this.personnes.indexOf(usager), 1);
                console.log(`${usager.prenom} est sorti.e du bus.`);
                return true;
            }else
            console.log(`${usager.prenom} marche à pied`);
            return false;
        };
    }
}

// ### Créez une instance de Bus. 
let laStib = new Bus([],2.80);
// ### 8h00 Vous êtes à la maison.
maison.personnes.push(ilias);
console.log(`08h00, ${ilias.prenom} est à la ${maison.nom}`);
// ### 8h30 Vous prennez le bus vers MolenGeek.
ilias.seDeplacer(maison, molengeek, laStib);

// ### 8h45 Vous êtes à MolenGeek.
console.log(`08h45, ${ilias.prenom} est à molengeek`);
// ### 12h45 Vous sortez de MolenGeek, vous prenez le bus pour aller au snack.
ilias.seDeplacer(molengeek, snack, laStib);
// ### 13h30 Vous sortez du snack, et vous rentrer pied à MolenGeek pour digérer.
ilias.seDeplacer(snack, molengeek, "pied");
// ### 17h10 Vous sortez de MolenGeek, vous prenez le bus pour rentrer chez vous.
ilias.seDeplacer(molengeek, maison, laStib);
// ### Faites un console.log() de votre argent, ainsi que l'argent du Bus
console.log(ilias.argent + " " +laStib.caisse);



