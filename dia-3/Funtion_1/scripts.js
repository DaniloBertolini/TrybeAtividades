function mais(saldo) {
    return `Somando ${saldo} + 10, da ${saldo+10}`
}

function menos(saldo) {
    return `Subtraindo ${saldo} - 20, da ${saldo-20}`
}

function multiplica(saldo) {
    return `Multiplicando ${saldo} * 3, da ${saldo*3}`
}

function divide(saldo) {
    return `Dividindo ${saldo} / 2, da ${saldo/2}`
}

console.log(mais(1500))
console.log(menos(1500))
console.log(multiplica(1500))
console.log(divide(1500))