// #1
numero = 6;
let resultado = numero;

for (let a=numero; a > 1; a -= 1) {
    resultado = resultado * (a-1)
}
console.log(resultado)

// #2
let palavra = 'dinhoOvirtuoso';
let novapalavra = "";
for (let b = palavra.length-1; b >= 0; b -= 1) {
    novapalavra += palavra[b]
}

console.log(novapalavra)

// #3

let array = ['java', 'javascript', 'python', 'html', 'css']

let maiorpalavra = '';
let menorpalavra = array[0];
for (let c=0; c < array.length; c += 1) {
    if (maiorpalavra.length < array[c].length) {
        maiorpalavra = array[c];
    }
    if (menorpalavra.length > array[c].length) {
        menorpalavra = array[c];
    }
}

console.log(`A maior palavra é ${maiorpalavra} com ${maiorpalavra.length} letras`)
console.log(`A menor palavra é ${menorpalavra} com ${menorpalavra.length} letras`)