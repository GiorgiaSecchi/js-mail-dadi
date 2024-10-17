//# Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

//! RACCOLTA DATI
// genera numero random giocatore
// genera numero random computer

//! ELABORAZIONE
//

//! OUTPUT

// **************************************************************

const playerNumb = Math.floor(Math.random() * 7);
console.log("Player:" + playerNumb);

const computerNumb = Math.floor(Math.random() * 7);
console.log("Computer:" + computerNumb);
