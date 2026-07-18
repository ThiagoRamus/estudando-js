/* Faça um programa para calcular o valor de uma viagem. 

Voce tera 3 variaveis. Sendo elas: 
1 - Preço do Combsutivel; 
2 - Gasto medio de combsutivel do carro por KM;
3 - Distancia em Km da viagem;

Imprima no console o valor que sera gasto de combustivel para realizar esta viagem.
 */
const precoCombustivel = 7.29; // defino o valor atual do combustivel em manaus
const gastoMedioPorKm = 13.2; // coloco a media de km/l do hb20
const distanciaDaViagemEmKm= 46; // adiciono uma viagem simples da zona oeste para zona leste de manaus, ida e volta

const litrosConsumidos = distanciaDaViagemEmKm / gastoMedioPorKm; // divido a distancia da viagem pelo gasto do carro por km/l, definindo o total de litros consumidos da viagem
const gastoDaViagem = litrosConsumidos * precoCombustivel; // multiplico os litros consumidos na viagem pelo preco atual do combustivel, definindo o gasto real da viagem

console.log('O Preço atual do combustivel é de: R$', precoCombustivel); // imprime o valor atual do combustivel
console.log('Seu gasto médio por km é de:', gastoMedioPorKm, 'km/l'); // imprime o gasto medio do carro (hb20)
console.log('Sua viagem tem o total de:', distanciaDaViagemEmKm, 'km'); // imprime os km total da viagem
console.log('Portanto seu gasto para essa viagem sera de: R$', gastoDaViagem.toFixed(2)); // imprime o valor total gasto da viagem utilizando um method de decimais, definido com 2 casas decimais.