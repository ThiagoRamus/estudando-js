/* 
Exercício - Salário
*/

const funcionarioRecebe = 2500;
const aumentoEmPorcentagem = 12;

const valorAumento = funcionarioRecebe * aumentoEmPorcentagem / 100;
const salarioAtual = valorAumento + funcionarioRecebe;
console.log('O seu novo salario é de: R$', salarioAtual);