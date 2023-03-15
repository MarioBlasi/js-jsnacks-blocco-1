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

/*ciclo while*/
let i = 0;

while (i < 10) {
  const thisnumeri = numeri[i];
  console.log(thisnumeri);
  i++;
}
console.log("I numeri inseriti sono while :", numeri);

/* ciclo do */
let k = 1;

do {
  const thisnumeri = numeri[k];
  console.log(thisnumeri);
  k++;
} while (k < 10);
console.log("I numeri inseriti sono do :", numeri);
