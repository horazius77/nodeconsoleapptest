// const prompt = require("prompt-sync")();

// let zaehler = 0;

// console.log(`Zähler steht auf ${zaehler}`);

// var eingabe = "";
// while (eingabe != "q") {
//   eingabe = prompt("Bitte geben Sie eine Zahl ein: ");
//   if (eingabe == "q") {
//     console.log("Programm wird beendet");
//   } else {
//     zaehler = zaehler + parseInt(eingabe);
//     console.log(`Zähler steht auf ${zaehler}`);
//   }
// }

var dreierMultiplikator = function(zahl) {
    return function() {
        return zahl * 3;
    }
}

var gibName = function() {
    return "Marlon"
}

var eingabewert = 5;
var zwischenergebnis = dreierMultiplikator(eingabewert)
var ergebnis = zwischenergebnis();

console.log(ergebnis)
