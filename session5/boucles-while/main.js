/* LES BOUCLES WHILE */
console.log('Bienvenue dans la console JavaScript');
console.log('Vous êtes dans les exercices sur les boucles while');

// TODO: ÉTAPE 1
// À l'aide d'une boucle while, afficher dans la console les nombres
// de 1 à 10 compris.

var i = 1
while (i <= 10) {
    console.log("Etape 1 :" + i);
    i++;
}

// TODO: ÉTAPE 2
// Avec une autre boucle while, afficher les mêmes nombres dans la
// console, mais dans l'ordre inverse.

var i = 10;
while (i > 0) {
    console.log("Etape 2 :" + i);
    i--;
}

var nombres = [45, 2, 89, 12, 44, 29, 11, 3];



// TODO: ÉTAPE 3
// À l'aide d'une boucle while, afficher les valeurs du tableau `nombres`
// dans la console jusqu'à la valeur égale à 29.

var i = 0;
while (i < nombres.length) {
    console.log("Etape 3 :" + nombres[i])
    if (nombres[i] === 29) {
        break
    }
    i++
}
// TODO: ÉTAPE 4
// Avec une autre boucle while, afficher les valeurs du tableau `nombres`
// tant qu'elles sont inférieures à 50.

i = 0;
while (i < nombres.length) {
    if (nombres[i] < 50) {
        console.log("Etape 4 : " + nombres[i])
    }
    i++
}

var prenoms = ['Ali', 'Nora', 'Jean', 'Carole', 'Ibrahim', 'Joseph'];

// TODO: ÉTAPE 5
// À l'aide d'une boucle while, afficher les valeurs du tableau `prenoms`
// tant que leur longueur ne dépasse pas 5 caractères.
var i = 0
while (i < prenoms.length) {
    if (prenoms[i].length <= 5) {
        console.log("Etape 5 : " + prenoms[i])
    }
    i++
}

// TODO: ÉTAPE 6
// Avec une autre boucle while, afficher les valeurs du tableau `prenoms`
// tant qu'elles contiennent la lettre "a" ou "A".

var i = 0;
while (i < prenoms.length) {
    if (prenoms[i].includes("a") || prenoms[i].includes("A")) {
        console.log("Etape 6 " + prenoms[i])
    }
    i++
}
// Autre solution : 

i = 0;
while (i < prenoms.length) {
    if (prenoms[i].toLowerCase().includes("a")) {
        console.log("Etape 6 " + prenoms[i])
    }
    i++
}

// TODO: ÉTAPE 7
// Avec une autre boucle while, utiliser la méthode pop() sur le tableau
// `prenoms` pour retirer une valeur du tableau et l'afficher dans la
// console tant que le tableau n'est pas vide.
// Documentation de la méthode Array.prototype.pop() : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/pop


// Solution 1

i = prenoms.length - 1;
while (i >= 0) {
    console.log("Etape 7 Solution 1 : " + prenoms[i])
    prenoms.pop()
    i--
}

prenoms = ['Ali', 'Nora', 'Jean', 'Carole', 'Ibrahim', 'Joseph'];

// Solution 2
while (prenoms.length !== 0) {
    console.log("Etape 7 Solution 2 : " + prenoms.pop())
}

// TODO: ÉTAPE 8
// À l'aide d'une boucle while, afficher le résultat de la fonction
// Date.now() dans la console tant qu'une variable aléatoire est inférieure
// à 50. Utiliser la fonction Math.random() pour définir cette variable
// aléatoire à chaque itération de la boucle.
// Documentation de la fonction Date.now() : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date/now
// Documentation de la fonction Math.random() : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/random

var random = Math.random() * 60;

while (random < 50) {
    console.log("Etape 8 : " + Date.now())
    random = Math.random() * 60

}