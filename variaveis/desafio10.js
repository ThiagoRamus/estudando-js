/* 
    Exercício - Desconto
*/

const produto = 180;
const desconto = 15;

const valorDesconto = produto * desconto / 100;
console.log('O valor do desconto é de: R$', valorDesconto);
const valorFinal = valorDesconto - produto;
console.log('O valor do produto com desconto é de: R$', valorFinal);