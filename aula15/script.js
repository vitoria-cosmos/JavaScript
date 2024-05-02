// let isMember = true;
let isMember = false;

let shipping = isMember ? 2 : 10;

console.log(isMember ? 'Voce é membro' : 'Voce não é membro');
console.log('Frete: ' + shipping);


// Exemplo com if:
let age = 90;

// let isAdult = age >= 18 ? 'Yes' : 'No';
// let isAdult = (age >= 18 ? 'Yes' : 'No');
// let isAdult = (age >= 18) ? 'Yes' : 'No';
let isAdult = (age >= 18 && age < 60) ? 'Yes' : 'No';

console.log(isAdult);