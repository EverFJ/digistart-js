/* LES COMPARATEURS */
console.log('Bienvenue dans la console javascript');
console.log('Vous êtes dans les exercices sur les comparateurs');

// ------ TODO 1 ------ 
// 1. Créer une variable neighbourAge qui contient l'âge de votre voisin

var neighbourAge = 25;


// 2. Créer une variable myAge qui contient votre âge

var myAge = 35;


// 3. Comparez les variables neighbourAge et monAge en utilisant des comparateurs (<, <=, >, >=, ===, !== ...)
// puis affichez le résultat des comparaisons dans la console avec la méthode "console.log".

comp = neighbourAge <= myAge;

console.log(comp);

// ------ TODO 2 ------ 
// 1. Créer une fonction showGreaterNumber qui prend en paramètre deux nombres et
// qui affiche le plus grand des deux dans la console.

function showGreaterNumber(a, b) {
    if (a > b){console.log(a)}
    if (b > a){console.log(b)}
    else {console.log("égalité")}
    
};


// 2. L'exécuter avec les paramètres de votre choix.

showGreaterNumber(5, 1337);


// ------ TODO 3 ------ 
// 1. Créer une fonction isBetween1000And3000 qui prend en paramètre une variable et
// qui renvoie un booléen indiquant si la variable est un nombre compris entre 1000 et 3000.

function isBetween1000And3000(number) {
    if (number >= 1000 && number <= 3000){return true}
    else{return false}
};


// 2. L'exécuter avec le paramètre de votre choix.

console.log(isBetween1000And3000(1337));