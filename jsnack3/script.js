// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// chiediamo 10 volte all 'utente di inserire un numero
// usiamo il ciclo for

let numeri = [];

for (let i = 0; i < 10; i++) {
  let numero = prompt("Inserisci un numero:");
  numeri.push(numero);
}
console.log("I numeri inseriti sono:", numeri);
//SNACK 3

/*Rifare con WHILE LOOP:  Il software deve chiedere per 10 
volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */

let i = 0;

while (k < 10) {
  const thisnumeri = numeri[i];
  console.log(thisnumeri);
  k++;
}
console.log("I numeri inseriti sono while :", numeri);
