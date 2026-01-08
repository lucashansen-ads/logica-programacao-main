// Meu primeiro programa em JavaScript
// Autor: Lucas Hansen

let numero = 6;

// Verificar se é par ou ímpar
if (numero % 2 === 0) {
    console.log("O número é par");
} else {
    console.log("O número é ímpar");
}

if (numero > 0) {
    console.log("O numero é positivo")
} else if (numero < 0) 
    console.log("O numero é negativo");
else {
    console.log("O numero é zero")
}

// Mostrar tabuada do numero
console.log("Tabuada do " + numero + ":");


for(let i = 0; i <= 10; i++) {
    console.log(numero + "x" + i + "=" + (numero * i))
}