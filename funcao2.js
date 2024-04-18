/*Exercício 2
Crie uma função que receba 3 números como parâmetro e retorne o MENOR dentre eles.*/
function encontrarMenor(numero1, numero2, numero3) {
    var menor = 0;
    if (numero1 < numero2 && numero1 < numero3) {
        menor = numero1;
    }
    else if (numero2 < numero1 && numero2 < numero3) {
        menor = numero2;
    }
    else if (numero3 < numero1 && numero3 < numero2) {
        menor = numero3;
    }
    else {
        console.log("Algo deu errado");
    }
    return menor;
}
console.clear();
var teclado = require("prompt-sync")();
var n1 = parseFloat(teclado("digite o primeiro numero: "));
var n2 = parseFloat(teclado("digite o segundo numero: "));
var n3 = parseFloat(teclado("digite o terceiro numero: "));
console.log("O menor numero \u00E9 ".concat(encontrarMenor(n1, n2, n3), " "));
