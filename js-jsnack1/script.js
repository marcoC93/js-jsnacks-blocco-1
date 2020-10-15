//Il software deve chiedere per 5 volte all'utente di inserire un numero. Il programma stampa la somma di tutti i numeri

var array = [];
var somma = parseInt(0);
// Inizio ciclo for


for (i=0 ; i < 5 ; i++) {
    numero= parseInt(prompt("scrivi un numero"));
    array.push(numero);
    somma= somma + numero ;
    console.log(somma);

}
console.log(array);
console.log("La somma degli elementi é:" + somma);
