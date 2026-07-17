/* 
1.1 Crie três variáveis: preco, quantidade e desconto (em porcentagem, ex: 10 para 10%). 
Calcule o valor total da compra já com o desconto aplicado e mostre no console.log.
*/

const preco = 100 ;
const quantidade = 2;
const desconto = 10;
const valorTotal = preco * quantidade;
const valorDesconto = desconto / 100;
const precoFinal = valorTotal - (valorTotal * valorDesconto);
console.log('Valor: R$', precoFinal);
console.log('Desconto: ', desconto, '%');
