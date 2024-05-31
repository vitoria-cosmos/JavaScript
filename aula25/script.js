// function square(x) {
//     return x * x;
// }

// console.log(square(2));

// // Função dentro de outra função:
// function addSquares(a, b) {
//     let sqrA = square(a);
//     let sqrB = square(b);
//     // return square(a) + square(b);
//     return sqrA + sqrB;
// }

// console.log(addSquares(2, 3));

// Criar uma função dentro de outra função:

function addSquares(a, b) {
    // function square(x) {
    //     return x * x;
    // }

    // const square = (x) => x * x;
    const square = (x) => {
        return x * x;
    }

    let sqrA = square(a);
    let sqrB = square(b);
    // return square(a) + square(b);
    return sqrA + sqrB;
}

console.log(addSquares(2, 3));
