/* Exercício - Desafio */

const pessoaRecebe = 3500;
const aluguel = 1200;
const internet = 100;
const energia = 180;
const agua = 80;
const mercado = 900;

const totalGasto = aluguel + internet + energia + agua + mercado;
const sobraTotal = pessoaRecebe - totalGasto;
console.log('O Joao recebe: R$', pessoaRecebe)
console.log('o Joao gasta um total de: R$', totalGasto)
console.log('Sobra um total de: R$', sobraTotal)