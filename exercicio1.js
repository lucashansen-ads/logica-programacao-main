// Número par ou ímpar
// Objetivo: Criar um algoritmo que verifique se um número é par ou ímpar

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número: ', (input) => {
  const valor = input.trim();
  const numero = Number(valor);

  if (valor === '') {
    console.log('Entrada vazia. Por favor, digite um número.');
    rl.close();
    return;
  }

  if (!Number.isFinite(numero) || Number.isNaN(numero)) {
    console.log('Entrada inválida. Por favor, digite um número válido.');
    rl.close();
    return;
  }

  if (!Number.isInteger(numero)) {
    console.log('Por favor, insira um número inteiro para verificar paridade.');
    rl.close();
    return;
  }

  if (numero % 2 === 0) {
    console.log('O número é par');
  } else {
    console.log('O número é ímpar');
  }

  rl.close();
});
