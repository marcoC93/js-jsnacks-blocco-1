

var array = [];



for (i=0 ; i < 6; i++ ) {

    numero = parseInt(prompt("Scrivi un numero"));
    if (!isNaN(numero)) {
        if (numero % 2 == 1){
            array.push(numero) ;
        }
    }
}
console.log(array);
