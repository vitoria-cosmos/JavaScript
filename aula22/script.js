function maiorDeIdade(idade) {
    if(idade >= 18){
        return true;
    } else {
        return false;
    }
}

let idade = 65;

let verificacao = maiorDeIdade(idade);
console.log(verificacao);

if(verificacao) {
    console.log('É maior de idade');
} else {
    console.log('É menor de idade.');
}