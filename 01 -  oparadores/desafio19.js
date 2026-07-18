const camiseta = 49.90;
const calca = 129.90;
const tenis = 299.90;
const desconto = 15;
const frete = 25;

const subTotal = camiseta + calca + tenis;
const valorDesconto = subTotal * desconto / 100;
const totalCompra = (subTotal - valorDesconto) + frete;
console.log ('===== COMPRA =====')
console.log ('Subtotal:', subTotal.toFixed(2))
console.log ('Valor do desconto:', valorDesconto.toFixed(2))
console.log ('Frete:', frete)
console.log ('Total da compra:', totalCompra.toFixed(2))
