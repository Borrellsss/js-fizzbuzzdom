// Consegna:
// MILESTONE 3
// Per ogni numero, dato un container nel DOM,
// appendi un elemento html con il numero o la stringa corretta.
// Applica uno stile differente a seconda del valore dell'indice
// per i multipli di 3, per i multipli di 5 e per i valori che sono
// sia multipli di 3 che di 5 (seguendo le regole della Milestone 1).
 
// *DICHIARAZIONE VARIABILI PROGRAMMA*
const boxWrapper = document.querySelector(".box-wrapper");
let blueBox;
let yellowBox;
let redBox;
let standardBox;

// *LOGICA PROGRAMMA*
for (let i = 1; i <= 100; i++) {

    // ?VARIABILI CICLO FOR?
    blueBox = `<div class="box blue">Fizz</div>`;
    yellowBox = `<div class="box yellow">Buzz</div>`;
    redBox = `<div class="box red">FizzBuzz</div>`;
    standardBox = `<div class="box">${i}</div>`;

    // ?CONDIZIONE CICLO FOR?
    if (i % 3 === 0 && i % 5 === 0) {
        boxWrapper.innerHTML += redBox;
    } else if (i % 3 === 0) {
        boxWrapper.innerHTML += blueBox;
    } else if (i % 5 === 0) {
        boxWrapper.innerHTML += yellowBox;
    } else {
        boxWrapper.innerHTML += standardBox;
    }
};