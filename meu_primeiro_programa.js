// Meu primeiro programa em JavaScript
// Autor: Lucas Hansen

function verificarNumeroImparouPar(numero) {
    if (numero % 2 === 0) {
        console.log("O numero é par");
    } else {
        console.log("O numero é impar");
    }
}












const prompt = require("prompt-sync")();
//Solicitar ao usuário que insira um número
const numero = parseInt(prompt("Digite um número inteiro: "));

// Verificar se é par ou ímpar
function verificarNumeroImparouPar(numero) {
    if (numero % 2 === 0) {
        console.log("O número é par");
    } else {
        console.log("O número é ímpar");
    }
}
// Verificar se é positivo, negativo ou zero
function verificarsinaldoNumero(numero) {}
    if(numero > 0) {
        console.log("O numero é positivo");
    } else if(numero < 0) {
        console.log("O numero é negativo");
    } else {
        console.log("O numero é zero");
    }


// Mostrar tabuada do numero
console.log("Tabuada do " + numero + ":");


for(let i = 0; i <= 10; i++) {
    console.log(numero + "x" + i + "=" + (numero * i))
}