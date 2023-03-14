// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

let primaParola = prompt("Inserisci la prima parola:");
let secondaParola = prompt("Inserisci la seconda parola:");
console.log("Le due parole inserite sono:", primaParola, secondaParola);

//  usiamo length per contare la lunghezza di una parola inserita dall'utente:
if (primaParola.length < secondaParola.length) {
  console.log(primaParola);
  console.log(secondaParola);
} else {
  console.log(secondaParola);
  console.log(primaParola);
}
