const distancia = 860;
const carroConsumo = 13;
const precoGasolina = 6.19;
const pedagio1 = 12;
const pedagio2 = 18;
const pedagio3 = 9;

const litrosNecessarios = distancia / carroConsumo;
const valorPagoCombustivel = litrosNecessarios * precoGasolina;
const totalPedagio = pedagio1 + pedagio2 + pedagio3;
const custoTotalViagem = valorPagoCombustivel + totalPedagio;
console.log('===== VIAGEM =====')
console.log('Litros necessários:', litrosNecessarios.toFixed(1), 'litros');
console.log('Valor do combustível: R$', valorPagoCombustivel.toFixed(2));
console.log('Total dos pedágios: R$', totalPedagio);
console.log('Custo total da viagem: R$', custoTotalViagem.toFixed(2))