// #1
function imprimeIdade() {
    for (let idade = 30; idade <= 40; idade += 1) {
      console.log('Idade dentro do for:', idade)
    }
}
imprimeIdade()


// #2
const pessoa = {
   nome: 'Henri',
   idade: 20
}
pessoa.nome = 'Luna';
pessoa.idade = 19;

console.log('Nome:', pessoa.nome);
console.log('Idade:', pessoa.idade);


// #3
let favoriteFood = 'Lasanha';
favoriteFood = 'Hambúrguer';
console.log(favoriteFood);


// #4
const name = 'Adriana';
const lastName = 'Soares';
//console.log('Olá' + ',' + name + ' ' + lastName + '!');
console.log(`Olá, ${name} ${lastName}!`)
let soma = (a, b) => a+b

let a = 3;
let b = 5;
// console.log('O resultado da soma de ' + a + ' + ' + b + ' é: ' + soma(a,b));
console.log(`O resultado da soma de ${a} + ${b} é: ${soma(a,b)}`)


// #5
