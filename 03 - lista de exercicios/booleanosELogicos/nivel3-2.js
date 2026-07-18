/* 
3.2 Login simples com usuarioCorreto e senhaCorreta (booleanos): ambos true → "Acesso liberado"; 
só um true → "Usuário ou senha incorretos"; 
os dois false → "Muitas tentativas incorretas".
*/

const usuarioCorreto = true;
const senhaCorreta = true;

if (usuarioCorreto && senhaCorreta) {
    console.log('Acesso Liberado')
} else if (usuarioCorreto || senhaCorreta){
    console.log('Usuario ou senha incorretos')
} else {
    console.log('Muitas tentativas incorretas')
}