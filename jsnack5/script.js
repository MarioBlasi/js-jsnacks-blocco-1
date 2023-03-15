// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

let sommaPari = 0,
  sommaDispari = 0;

let a;

for (let i = 0; i < 6; i++) {
  a = parseInt(prompt("Inserisci un numero:"));
  if (a % 2 == 0) {
    sommaPari += a;
  } else {
    sommaDispari += a;
  }
}
console.log(sommaPari);
console.log(sommaDispari);
