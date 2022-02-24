/* LES TABLEAUX (ARRAYS) */
console.log('Bienvenue dans la console javascript');
console.log('Vous êtes dans les exercices sur les tableaux (arrays)');

// ------ TODO 1 ------ 
var prices = [12, 3, 25, 4, 987, 22, 15];

// 1. En accédant aux éléments du tableau, faire en sorte que le chiffre 4 s'affiche dans la console.

console.log(prices[3])

// 2. Afficher dans la console la longueur du tableau "prices".

console.log(prices.length)

// 3. Ajouter un prix au tableau et afficher le tableau dans la console.
// la methode push ajoute un élément à la fin d'un tableaux
prices.push(1337)
console.log(prices)

// ------ TODO 2 ------ 
var random = ["A", null, 123, "hello", true];

// 1. En accédant aux éléments du tableau, remplacer un élément du tableau.

random[4] = false

// 2. Afficher le tableau dans la console.

console.log(random)



// ------ TODO 3 ------ 
var array = [1, 2, 3, 5, 6, 7, 9, 10];

// 1. Ajouter dans le tableau les éléments 4 et 8 manquants grâce à la méthode splice afin d'obtenir le tableau suivant :
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Documentation de la méthode splice : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/splice

// SPLICE
// 1er nombre = indice à partir d'ou on remplace
// 2e nombre = nombre d'élément à supprimer
// 3e nombre = élément à insérer
// voir la doc si c'est pas clair

array.splice(3, 0, 4)

// 2. Afficher le tableau dans la console.

console.log(array)

// 3. Ajouter la valeur 11prices à la fin du tableau.

array.push(11)

// 4. Ajouter la valeur 0 au début du tableau.

array.unshift(0)

// 5. Afficher le tableau dans la console.

console.log(array)


// ------ TODO 4 ------ 
var array = ["B", "A", "C", "E", "D"];

// 1. Trier le tableau dans l'ordre alphabétique croissant grâce à la méthode sort.

array.sort()

console.log(array)

// 2. Utiliser la méthode join pour regrouper les éléments du tableau en une string.

var string = array.join("")

// 3. Afficher le tableau dans la console et vérifier qu'on obtient la string "ABCDE".

console.log(string)


// ------ TODO 5 ------ 
var array = ["Michael", "Jordan", "Laeticia", "Julie"];

// 1. Ecrire une fonction qui renvoie le dernier élément du tableau passé en paramètre.

function getLastElement(array) {
    console.log(array[array.length - 1])
}

// 2. Appeller la fonction avec le tableau array et vérifier que l'élément "Julie" est bien renvoyé en l'affichant dans la console.

getLastElement(array)