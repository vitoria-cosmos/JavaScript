
// Função Normal
// function somar(x, y) {
//     return x + y;
// }

// console.log(somar(10, 5));

// Arrow Function 

// const somar = (x, y) => {
//     return x + y;
// }

// console.log(somar(10, 5));

// Arrow Function Resumida

// const somar = (x, y) => x + y;

// console.log(somar(10, 5));


// Arrow functio mais resumida, mas com 1 param 

// function sobrenome(sob) {
//     return 'Bonieky ' + sob;
// }

// console.log(sobrenome('Lacerda'));

const sobrenome = sob => 'Bonieky ' + sob;

console.log(sobrenome('Lacerda'));

const sobrenome2 = (sob) => 'Bonieky ' + sob;

const sobrenome3 = (sob) => {
    return 'Bonieky ' + sob;
}

const sobrenome4 = (sob) => {
    let nomeCompleto = 'Bonieky ' + sob;
    return nomeCompleto;
}

