const userName = prompt("Qual è il tuo nome?");

const userLastName = prompt("Qual è il tuo cognome?");

const userFavouriteColor = prompt("Qual è il tuo colore preferito?");

document.getElementById("generated-password").innerHTML = userName + userLastName + userFavouriteColor + "21";