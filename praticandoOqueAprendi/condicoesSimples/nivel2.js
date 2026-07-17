/* 
2.1 Peça (ou defina) a idade de uma pessoa em uma variável e diga se ela é "Criança" (até 12), "Adolescente" (13 a 17) ou "Adulto" (18+).
*/

const idade = 8;

if (idade <= 12) {
    console.log('Crianca');
} else if (idade >=13 && idade <=17) {
    console.log('Adolescente');
} else {
    console.log('Adulto')
}