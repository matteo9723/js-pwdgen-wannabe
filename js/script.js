const name = prompt('inserisci il tuo nome');
const lastname = prompt('inserisci il tuo cognome');
const color = prompt("qual'è il tuo colore preferito?");
const password = name+lastname+color+21;
const lunghezza = password.length ;


document.getElementById('utente').innerHTML=password;
document.getElementById('lunghezza').innerHTML=lunghezza;


