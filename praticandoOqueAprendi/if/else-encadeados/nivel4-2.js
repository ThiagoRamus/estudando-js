/* 
4.2 Calculadora simples: duas variáveis numéricas e uma variável operador (string: "+", "-", "*", "/"). 
Use if/else para decidir a conta e mostrar o resultado.
*/

const numero1 = 10;
const numero2 = 10;
const operador = 'menos'

if (operador === '+'){
    const soma = numero1 + numero2;
    console.log ('A soma de', numero1, '+', numero2,'é: ', soma);
} else if (operador === '-'){
    const subtracao = numero1 - numero2;
    console.log ('A subtracao de', numero1, '-', numero2,'é: ', subtracao);
} else if (operador === '*' || operador === 'x') {
    const multiplicacao = numero1 * numero2;
    console.log ('A multiplicacao de', numero1, '*', numero2,'é: ', multiplicacao);
} else if (operador === '/'){
     const divisao = numero1 / numero2;
    console.log ('A divisao de', numero1, '/', numero2,'é: ', divisao);
} else {
    console.log('Informa um operador válido.')
}