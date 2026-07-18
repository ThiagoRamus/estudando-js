/* 
Exercício - Viagem
*/

const distancia = 720;
const consumo = 12;
const precoCombustivel = 5.89;

const litrosGastos = distancia / consumo;
console.log('Nessa viagem voce ira gastar o total de:', litrosGastos, 'litros.');

const combustivelGasto = litrosGastos * precoCombustivel;
console.log('Nessa viagem voce ira gastar o total de: R$', combustivelGasto.toFixed(1), ' de combustivel');