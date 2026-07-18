/* 
3.3 Dado um número entre 1 e 100,
 diga se ele é múltiplo de 3, de 5, de ambos, ou de nenhum (usando só % e if/else, sem laço).
*/
const numero = 15;

if (numero % 3 === 0 && numero % 5 === 0){
    console.log ('Seu numero é multiplo de 3 e 5.')
} else if (numero % 3 === 0){
    console.log('Seu numero é multiplo de 3')
} else if (numero % 5 === 0){
    console.log('Seu numero é multiplo de 5')
} else {
    console.log('Seu numero nao tem multiplo de 3 ou 5')
}