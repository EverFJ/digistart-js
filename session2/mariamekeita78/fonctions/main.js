/* LES FONCTIONS */
console.log('Bienvenue dans la console javascript');
console.log('Vous êtes dans les exercices sur les fonctions');

// ------ TODO 1 ------ 
// TODO: ÉTAPE 1
// Créer une fonction sayHello qui imprime "Bonjour" dans la console
function sayHello(name){
    console.log("Bonjour");
}



// TODO: ÉTAPE 2
// L'exécuter

sayHello("Bonjour");


// ------ TODO 2 ------ 
// TODO: ÉTAPE 1
// Créer une fonction sayHelloName qui prend en paramètre le nom d'une personne, et
// qui imprime "Bonjour " suivi du nom de la personne dans la console.

function sayHelloName(personName){
    console.log("Bonjour" + personName);
    
}


// TODO: ÉTAPE 2
// L'exécuter avec le paramètre de votre choix.

sayHelloName("Mariame")


// ------ TODO 3 ------ 
// TODO: ÉTAPE 1
// Créer une fonction addTwo qui prend en paramètre un nombre et qui
// retourne ce nombre + 2

function addTwo(number){
    return number + 2;
}



// TODO: ÉTAPE 2
// L'exécuter avec le paramètre de votre choix.

console.log(addTwo(42));


// ------ TODO 4 ------ 
// TODO: ÉTAPE 1
// Créer une fonction displaySum qui prend en paramètre deux nombres entiers
// et qui affiche la somme de ces deux nombres dans la console.

function displaySum(number1, number2){
    console.log(number1 + number2);
}



// TODO: ÉTAPE 2
// L'exécuter avec le paramètre de votre choix.

displaySum(4,2)

