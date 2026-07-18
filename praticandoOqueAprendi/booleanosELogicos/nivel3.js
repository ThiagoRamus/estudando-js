/* 3.1 Três variáveis booleanas: temCarteira, temCarro, temGasolina. 
Diga se a pessoa "Pode dirigir até o mercado" (as três precisam ser verdadeiras).
 */

const temCarteira = true; 
const temCarro = true;
const temGasolina= false;

if ((temCarteira && temCarro) && temGasolina){
    console.log('Pode dirigir ate o mercado')
} else {
    console.log('Nao pode')
}