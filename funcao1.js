/*Exercício 1
Faça uma função que recebe um valor inteiro e verifica se o valor é par. A unção deve retornar
1 se o número for par e 0 se for ímpar.*/
var teclado = require("prompt-sync")();
function verificador(numero) {
    if (numero % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
var nUm = parseInt(teclado("Digite o primeiro numero: "));
var nPar = verificador(nUm);
console.log("o numero digitado \u00E9 par? ".concat(nPar));
if (nPar == true) {
    console.log("true então será Par.");
}
else {
    console.log("False então será Ímpar.");
}
