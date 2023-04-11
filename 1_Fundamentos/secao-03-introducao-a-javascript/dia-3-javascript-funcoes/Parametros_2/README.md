# Parametros

```
function sacar(valor, saldo) {
  if (valor >= 1 && saldo >= 0) {
      if (valor <= saldo) {
          return "Saque realizado com sucesso. Novo saldo: R$ " + (saldo - valor) + ",00";
      } else {
          return "Saldo insuficiente. Seu saldo atual é: R$ " + saldo + ",00";
      }
  } else {
      return "Valor ou saldo inválido. O valor deve ser maior ou igual a 1 e saldo deve ser maior ou igual a 0.";
  }
}

console.log(sacar(2, 20)); // Saque realizado com sucesso. Novo saldo: R$ 18,00
console.log(sacar(2, -5)); // Valor ou saldo inválido. O valor deve ser maior ou igual a 1 e saldo deve ser maior ou igual a 0.
console.log(sacar(2, 0)); // Saldo insuficiente. Seu saldo atual é: R$ 0,00
```

1. Faça um programa para adicionar clientes ao array de clientes do TrybeBank. Certifique-se de que a função deve receber um parâmetro do tipo string e imprimir uma mensagem de erro caso o parâmetro não seja do tipo string.

```
let clientesTrybeBank = ['Ada', 'John', 'Gus'];
```

2. Agora iremos escrever um programa que irá excluir um(a) cliente já existente do array de clientes do TrybeBank. Certifique-se de que a função deve receber um parâmetro do tipo string e imprimir uma mensagem de erro, caso o parâmetro não seja do tipo string e caso o(a) cliente não exista dentro do array.
