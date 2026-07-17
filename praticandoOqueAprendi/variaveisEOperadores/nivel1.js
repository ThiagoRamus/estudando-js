/* 
1.1 Crie três variáveis: preco, quantidade e desconto (em porcentagem, ex: 10 para 10%). 
Calcule o valor total da compra já com o desconto aplicado e mostre no console.log.
*/

const preco = 300;
const quantidade = 2;
const desconto = 10;

if (quantidade >= 2) {
    const valorFinal = preco - (preco * 0.1);
    console.log('Valor: R$', valorFinal);
    console.log('Desconto: ', desconto, '%');
} else {
    console.log('Valor: R$', preco);
    console.log('Desconto: 0',);
}
