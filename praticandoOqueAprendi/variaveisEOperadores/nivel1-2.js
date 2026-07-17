/* 
1.2 Dado um número numero, descubra o resto da divisão dele por 2 usando o operador % e diga se ele é par ou ímpar 
(sem usar if ainda nessa parte, só o cálculo — o if vem no próximo nível).. */

const numero = 2;

let resto = (numero % 2) === 0;
const numeroPar = resto;

console.log('Par', numeroPar)
console.log('Impar', !numeroPar)