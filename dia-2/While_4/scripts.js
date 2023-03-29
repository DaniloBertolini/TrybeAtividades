let dado1 = Math.ceil(Math.random() * 6);
let dado2 = Math.ceil(Math.random() * 6);
console.log('resultado dado 1:', dado1);

while (dado1 !== dado2) {
    dado2 = Math.ceil(Math.random() * 6)
    console.log('resultado dado 2:', dado2);
}
