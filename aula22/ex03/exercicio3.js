/* 
Crie uma função que valide usuário e senha.
Usuário correto: pedro
Senha correta: 123
*/

// Uso da função: 

function validar(user, key) {
    if (user === 'pedro' && key === 123) {
        return true;
    } else {
        return false;
    }
}

let usuario = 'bonieky';
let senha = '1234';
let validacao = validar(usuario, senha);
if (validacao) {
    console.log('Acesso concedido.');
} else {
    console.log('Acesso NEGADO!');
}