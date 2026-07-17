/* 2.3 Dado um ano, diga se é bissexto ou não. (Regra: divisível por 4 E (não divisível por 100 OU divisível por 400)). */
const ano = 1900;

if (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 !== 0)){
    console.log('Ano bissexto');
} else {
    console.log('Ano normal');
}