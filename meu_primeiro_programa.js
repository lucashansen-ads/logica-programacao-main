// Meu primeiro programa em JavaScript
// Autor: Lucas Hansen

const prompt = require("prompt-sync")();

// Função: par ou ímpar
function verificarNumeroImparOuPar(numero) {
    if (numero % 2 === 0) {
        console.log("O número é par");
    } else {
        console.log("O número é ímpar");
    }
}

// Função: positivo, negativo ou zero
function verificarSinalDoNumero(numero) {
    if (numero > 0) {
        console.log("O número é positivo");
    } else if (numero < 0) {
        console.log("O número é negativo");
    } else {
        console.log("O número é zero");
    }
}

// Função: tabuada
function mostrarTabuada(numero) {
    console.log("Tabuada do " + numero + ":");
    for (let i = 0; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
    }
}

//Função de validação de entrada
function lerNumeroValido() {
    let valor;

    while (true) { 
        valor = prompt("Digite um numero: "); 

        if (valor.trim() === "") { 
            console.log("Entrada vazia, tente novamente.");
            continue;
        }

        const numero = numero = Number(valor);

        if (!isNaN(numero)) {
            console.log("Isso não é um numero valido.");
        } else {
            return numero;
        }
    }
}        














let opcao = "";

while (opcao !== "0") {

    console.log("\nEscolha uma opção:");
    console.log("1 - Verificar se o número é par ou ímpar");
    console.log("2 - Verificar se o número é positivo, negativo ou zero");
    console.log("3 - Mostrar tabuada");
    console.log("0 - Sair");

    opcao = prompt("Digite a opção desejada: ");

    if (opcao === "1") {
        const numero = parseInt(prompt("Digite um número: "));
        verificarNumeroImparOuPar(numero);

    } else if (opcao === "2") {
        const numero = parseInt(prompt("Digite um número: "));
        verificarSinalDoNumero(numero);

    } else if (opcao === "3") {
        const numero = parseInt(prompt("Digite um número: "));
        mostrarTabuada(numero);

    } else if (opcao === "0") {
        console.log("Encerrando o programa...");

    } else {
        console.log("Opção inválida");
    }

    if (opcao !== "0") {
        prompt("\nPressione Enter para continuar...");
    }
}
