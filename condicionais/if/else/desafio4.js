const precoProduto = 100;

const formaPagamento = 5;
// const debito = false;
// const dinheiroEhPix = false;
// const em2x = false;
// const acima2x = false;

console.log('O valor do seu produto é de: R$', precoProduto);

if (formaPagamento === 1) {
    const desconto = precoProduto * 0.10;
    const valorFinal = precoProduto - desconto;
    console.log('No debito sua compra ficou de: R$', valorFinal);
} else if (formaPagamento === 2) {
    const desconto = precoProduto * 0.15;
    const valorFinal = precoProduto - desconto;
    console.log('No dinheiro ou pix sua compra ficou de: R$', valorFinal);
} else if (formaPagamento === 3) {
    console.log('Em 2x sua compra ficou de: R$', precoProduto);
} else if (formaPagamento === 4) {
    const juros = precoProduto * 0.10;
    const valorFinal = precoProduto + juros;
    console.log('Em 3x ou mais sua compra fica de: R$', valorFinal);
} else {
    console.log('Voce ainda nao efetuou o pagamento do produto.');
}