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
/* function numeroAleatorio() {
    return Math.random()
} */
const numeroAleatorio = () => Math.random()
console.log(numeroAleatorio());


// #6
/* function hello(nome) {
    return `Olá, ${nome}!`
}
let nome = 'Ivan'; */
const hello = (nome) => `Olá, ${nome}!`
console.log(hello('Ivan'));


// #7
/* function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`
}
let nome = 'Ivan';
let sobrenome = 'Pires'; */

nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`
console.log(nomeCompleto('Ivan', 'Pires'));


// #8
/* if (speed >= 120) {
    return `Você ultrapassou o limite de velocidade`;
  } else {
    return `Você está na velocidade permitida`;
} */
const speedCar = (speed) => {
    let resultado = (speed >= 120) ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`
    return resultado;
};

console.log(speedCar(90));