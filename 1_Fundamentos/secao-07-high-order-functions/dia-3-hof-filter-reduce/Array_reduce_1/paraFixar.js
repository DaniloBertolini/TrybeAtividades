const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
const numbers2 = [5, 10];

let valorInicial = 0;

// acc = 0 curr = 18
const callback = (acc, curr) => {
    return curr % 2 === 0 ? acc + curr : acc;
}

const sum = (listNumbers) => {
    return listNumbers.reduce(callback, valorInicial);
}

module.exports = sum;