/* 
Desafio Extra 
 */

const distanciaEmKm = 580;
const tipoCombustivel = 'gasolina';
const consumoKmL = 12;
const precoCombustivel = 5.89;

const litrosNecessarios = distanciaEmKm / consumoKmL;
const valorGasto = litrosNecessarios * precoCombustivel;
console.log ('A distancia de sua viagem é de: ', distanciaEmKm, 'km')
console.log ('O tipo de combustivel utilizado é:', tipoCombustivel)
console.log ('O consumo medio de km/l do seu carro é de:', consumoKmL, 'km/l')
console.log ('====================================================================')
console.log ('Voce ira precisar de ', litrosNecessarios.toFixed(1), 'litros para essa viagem')
console.log ('E voce ira gastar um total de: R$', valorGasto.toFixed(2), 'nessa viagem')