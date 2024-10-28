//# Mail
// Chiedi all'utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull'esito del controllo.

//! RACCOLTA DATI
// chiedere una email

//! ELABORAZIONE
// verificare che la email inserita sia valida
// SE email inserita è valida
//      PER OGNI (for) email dentro la lista (array)
//          verificare se si trova corrispondenza con la email utente
//          SE trova corrispondenza
//          messaggio riscontro positivo
//          ALTRIMENTI
//          messaggio riscontro negativo
//

//! OUTPUT
// stampare un messaggio a seconda del risultato

// *****************************************************************************

const emails = [
  "marco@gmail.com",
  "giulia@gmail.com",
  "luca@gmail.com",
  "giorgia@gmail.com",
  "federico@gmail.com",
  "chiara@gmail.com",
];

//! RACCOLTA DATI

// chiedere una email all'utente
const userEmail = prompt("Inserisci qui la tua email per accedere");

//! ELABORAZIONE
let outputMsg = "Email non trovata";

// verificare che la email inserita sia valida
const isUserEmailValid = userEmail.includes("@") && userEmail.includes(".");

// SE email inserita è valida
if (isUserEmailValid) {
  for (let i = 0; i <= emails.length - 1; i++) {
    const currentEmail = emails[i];

    if (currentEmail === userEmail) {
      outputMsg = "Bentornato!";
      break; // Uscita dal ciclo, non c'è bisogno di continuare a cercare
    }
  }
  alert(outputMsg);
} else {
  alert("Email non valida");
}
