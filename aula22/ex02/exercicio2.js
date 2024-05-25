/* 
Calcule o preço do imóvel
 - m2 = 3.000
 - Se tiver 1 quarto, o m2 é 1x
 - Se tiver 2 quartos, o m2 é 1.2x
 - Se tiver 3 quartos, o m2 é 1.5x

 Uso da função:

*/

function calcularImovel(metro, aposentos) {
    let m2 = 3.000;
    let valorTot = 0;
    switch (aposentos) {
        case 1:
        default:
            m2 = m2;
            valorTot = m2 * metro;
            break;
        case 2:
            m2 = m2 * 1.2;
            valorTot = m2 * metro;
            break;
        case 3:
            m2 = m2* 1.5;
            valorTot = m2 * metro;
            break; 
    }
    return valorTot;
}

let metragem = 123;
let quartos = 2;
let preco = calcularImovel(metragem, quartos);
console.log(`A casa custa R$ ${preco.toFixed(2)}`);
