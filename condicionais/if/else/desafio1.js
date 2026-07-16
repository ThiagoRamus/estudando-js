const precoEtanol = 5.29;
const precoGasolina = 7.29;
const tipoCombustivel = 'Etanol';
const kmPorLitro = 13;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmPorLitro;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2))
} else { 
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2))
}