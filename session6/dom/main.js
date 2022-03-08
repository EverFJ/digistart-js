/* LE DOM */
console.log('Bienvenue dans la console javascript');
console.log("Vous êtes dans l'exercice 1 sur le DOM");

// ------ TODO 1 ------
// Créez une variable récupérant l'élément button ayant l'id "myButton" du HTML.
var button = document.getElementById("myButton");

// ------ TODO 2 ------
// Modifier le texte de l'élément button grâce à sa propriété innerHTML.
button.innerHTML = "Hello World !!!";

// ------ TODO 3 ------
// Créez une variable récupérant tous les éléments de type paragraphe.
paragraphs = document.getElementsByTagName("p");

// ------ TODO 4 ------
// Créez une variable récupérant le paragraphe avec la classe "blue".
blueParagraph = document.getElementsByClassName("blue")[0];
blueParagraph.innerHTML = "Ca marche";

// ------ TODO 5 ------
// Créez une variable récupérant le paragraphe avec l'id "hideMe".
hideMe = document.getElementById("hideMe");

// ------ TODO 6 ------
// Modifiez le style du paragraphe avec l'id "hideMe" pour le faire disparaître.
hideMe.style.display = "none";