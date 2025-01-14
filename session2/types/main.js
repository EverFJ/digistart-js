/* LES TYPES */
console.log('Bienvenue dans la console javascript');
console.log('Vous êtes dans les exercices sur les types');

// ------ TODO 1 ------ 
// TODO: ÉTAPE 1
// Écrire 4 variables, 1 en dessous de chaque ligne avec leurs valeurs :
// - une variable qui s'appelle firstName de type string qui contient votre prénom

var firstName = "Francois";


// TODO: ÉTAPE 2
// - une variable qui s'appelle age de type number qui contient votre age

var number = 35;

// TODO: ÉTAPE 3
// - une variable qui s'appelle likeFootball de type boolean qui indique si vous aimez le football ou non

var likeFootball = false;

// TODO: ÉTAPE 4
// - une variable qui s'appelle otherStuff de valeur null

var otherStuff = null;


// ------ TODO 2 ------ 
// TODO: ÉTAPE 1
// Afficher dans la console la valeur et le type de chaque variable.
// Pour chaque variable, suivre cet exemple de pseudo code :
// "mon prénom, {name}, est de type {type de name}"

console.log("Mon prénom, " + firstName + ", est de type " + typeof firstName);
console.log("Mon age, " + number + ", est de type " + typeof number);
console.log("Ma variable, " + likeFootball + ", est de type " + typeof likeFootball);
console.log("Ma variable, " + otherStuff + ", est de type " + typeof otherStuff);






// ------ TODO 3 ------ 
// TODO: ÉTAPE 1
// Créer une variable appellée myNumber et lui attribuer une valeur numérique (un nombre)

var myNumber = 10;


// TODO: ÉTAPE 2
// Afficher dans la console le type de myNumber.

console.log(typeof myNumber);


// TODO: ÉTAPE 3
// Changer la valeur de myNumber à une string (une chaîne de caractères)

myNumber = "texte";


// TODO: ÉTAPE 4
// Afficher dans la console le type de myNumber.



console.log(typeof myNumber);


// ------ TODO 4 ------ 
// TODO: ÉTAPE 1
// Ecrire une 1ère variable qui contient la chaîne de caractères "10".

var dix = "10";


// TODO: ÉTAPE 2
// Ecrire une 2ème variable qui contient la chaîne de caractères "5".

var cinq = "5";


// TODO: ÉTAPE 3
// Ecrire une 3ème variable qui contient la somme (c = a + b) de la 1ère et la 2ème variable.

var somme = dix + cinq;


// TODO: ÉTAPE 4
// Afficher dans la console la valeur et le type de la 3ème variable.

console.log(somme + " " + typeof somme);


// TODO: ÉTAPE 5
// Que remarque-t-on ? Est-ce le type et le résultat attendu ? Pourquoi ?

cinq = 5;
dix = 10;

somme = dix + cinq;
console.log(somme + " " + typeof somme);
