//# Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

//! RACCOLTA DATI
// genera numero random giocatore
// genera numero random computer

//! ELABORAZIONE
// SE numero giocatore è più grande
//  messaggio vincitore giocatore
//  ALTRIMENTI SE numero pc più grande
//  messaggio vincitore pc

//! OUTPUT
// messaggio di chi avrà vinto

// **************************************************************

const playerNumb = Math.floor(Math.random() * 7);
console.log("Giocatore:" + " " + playerNumb);

const computerNumb = Math.floor(Math.random() * 7);
console.log("Computer:" + " " + computerNumb);

let outputMsg = "";

if (playerNumb > computerNumb) {
  outputMsg = "Giocatore è il vincitore! :)";
} else {
  outputMsg = "Computer è il vincitore! :)";
}

if (playerNumb === computerNumb) {
  outputMsg = "Parità... ritenta ancora!";
}

console.log(outputMsg);
