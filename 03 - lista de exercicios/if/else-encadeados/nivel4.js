/* 
4.1 Classificador de IMC: dado peso e altura, 
calcule peso / (altura * altura) 
e diga a categoria 
(Abaixo do peso, Normal, Sobrepeso, Obesidade) com as faixas reais.
*/

const peso = 100;
const altura = 2.00;

const imc = peso / (altura * altura);
if (imc < 18){
    console.log ('Abaixo do peso')
} else if (imc >=18 && imc <25){
    console.log ('peso normal')
} else if (imc >= 25 && imc < 30){
    console.log('Sobrepeso');
} else  {
    console.log('OBESO')
}