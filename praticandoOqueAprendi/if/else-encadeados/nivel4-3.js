/* 
4.3 Dado um número de 1 a 7, mostre o dia da semana correspondente (1 = Domingo...), tratando o caso de número inválido.
*/

const dia = '8';

if (dia === '1' || dia === 'domingo'){
    console.log('Dia 1 = Domingo')
} else if (dia === '2' || dia === 'segunda'){
    console.log('Dia 2 = Segunda')
} else if (dia === '3' || dia === 'terca'){
    console.log('Dia 3 = Terca')
}else if (dia === '4' || dia === 'quarta'){
    console.log('Dia 4 = Quarta')
}else if (dia === '5' || dia === 'quinta'){
    console.log('Dia 5 = Quinta')
}else if (dia === '6' || dia === 'sexta'){
    console.log('Dia 6 = Sexta')
} else if (dia === '7' || dia === 'sabado'){
    console.log('Dia 7 = Sabado')
} else {
    console.log ('Informe um dia da semana.')
}