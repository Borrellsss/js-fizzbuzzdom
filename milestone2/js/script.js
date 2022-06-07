// Consegna:
// MILESTONE 2
// Per ogni numero, data una ul nel DOM, aggiungete un elemento html
// li con il numero
// o la stringa corretta (seguendo le regole della Milestone 1).

// *DICHIARAZIONE VARIABILI PROGRAMMA*
const mainList = document.querySelector(".list-number");

// ?METODO 1?
let newLi;
let aText;
let bText;
let cText;
let dText;

// ?METODO 2?
let a;
let b;
let c;
let d;


// *LOGICA PROGRAMMA*
// ?METODO 1?
for (let i = 1; i <= 100; i++) {

    // ?VARIABILI CICLO FOR?
    newLi = document.createElement("li");
    aText = document.createTextNode("FizzBuzz");
    bText = document.createTextNode("Fizz");
    cText = document.createTextNode("Buzz");
    dText = document.createTextNode(i);

    // ?CONDIZIONE CICLO FOR?
    if (i % 3 === 0 && i % 5 === 0) {
        newLi.appendChild(aText);
        mainList.appendChild(newLi);
    } else if (i % 3 === 0) {
        newLi.appendChild(bText);
        mainList.appendChild(newLi);
    } else if (i % 5 === 0) {
        newLi.appendChild(cText);
        mainList.appendChild(newLi);
    } else {
        newLi.appendChild(dText);
        mainList.appendChild(newLi);
    }
};

// // ?METODO 2?
// for (let i = 1; i <= 100; i++) {

//     // ?VARIABILI CICLO FOR?
//     a = `<li>FizzBuzz</li>`;
//     b = `<li>Fizz</li>`;
//     c = `<li>Buzz</li>`;
//     d = `<li>${i}</li>`;

//     // ?CONDIZIONE CICLO FOR?
//     if (i % 3 === 0 && i % 5 === 0) {
//         mainList.innerHTML += a;
//     } else if (i % 3 === 0) {
//         mainList.innerHTML += b;
//     } else if (i % 5 === 0) {
//         mainList.innerHTML += c;
//     } else {
//         mainList.innerHTML += d;
//     }
// };