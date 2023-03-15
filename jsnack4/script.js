// (sia con for che con while):
// In un array sono contenuti i nomi degli invitati alla
// festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può
// partecipare o no alla festa.

let invitati = ["nome1", "nome2", "nome3", "nome4", "nome5"];
let listaInvitati = prompt("inserisci il nome dell'invitato");
let invitato = false;

for (let i = 0; i < invitati.length; i++) {
  if (invitati[i] === nomeUtente) {
    invitatoTrovato = true;
    break;
    console.log(invitati[i]);
  }
}
