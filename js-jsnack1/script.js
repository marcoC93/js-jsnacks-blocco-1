//Il software deve chiedere per 5 volte all'utente di inserire un numero. Il programma stampa la somma di tutti i numeri

var array = [];
var somma = parseInt(0);



// Inizio ciclo for che si ripeterá per 5 volte

for (i=0 ; i < 5 ; i++) {

    //faccio scrivere un numero all'utente che verrá poi sommato
    numero= parseInt(prompt("scrivi un numero"));
     //man mano i vari numeri scritti dall'utente verranno aggiunti all'array
    array.push(numero);
    // sommiamo i vari numeri e li stampiamo in console...la stessa cosa si puó fare anche nell'HTML
    somma= somma + numero ;
    console.log(somma);

}

// risultato finale
console.log(array);


console.log("La somma degli elementi é:" + somma);
