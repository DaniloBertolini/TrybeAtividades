idade = 18;

/* if (idade >= 18) {
    console.log('Você pode dirigir!')
} else {
    console.log('Você não pode dirigir!')
} */

// Variável
const verificaIdade = (idade >= 18) ? `Você pode dirigir!` : `Você não pode dirigir!`;
console.log(verificaIdade)

// Variável Função

const age = (idade) => (idade >= 18) ? `Você pode dirigir!` : `Você não pode dirigir!`;
console.log(age(16))

// Saída apenas do If

console.log(idade >= 18 && `Pode ter carteira de motorista!`)