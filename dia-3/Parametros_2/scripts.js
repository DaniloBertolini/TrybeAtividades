let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function addclientes (clientes) {
    clientesTrybeBank.push(clientes);
    return clientesTrybeBank;
}
console.log(addclientes('gougou'))

//

function tirarclientes (clientes) {
    let a = clientesTrybeBank.indexOf(clientes);
    clientesTrybeBank.splice(a, 1);
    return clientesTrybeBank;
}

console.log(tirarclientes('Gus'))