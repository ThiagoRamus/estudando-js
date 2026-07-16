const nota1 = 7;
const nota2 = 7;
const nota3 = 8;

const media = (nota1 + nota2 + nota3) / 3;
console.log('Sua média é: ', media.toFixed(1))
if (media.toFixed(1) < 5) {
    console.log('Média menor que 5, reprovado!');
} else if (media.toFixed(1) >= 5 && media.toFixed(1) <= 7) {
    console.log('Média entre 5 e 7, recuperação!');
} else {
    console.log('Media acima de 7, passou de semestre!');
}