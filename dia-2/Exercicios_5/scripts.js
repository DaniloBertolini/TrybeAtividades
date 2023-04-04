// #1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0


console.log("Resultado 1: ")

for (let i=0; i < numbers.length; i += 1) {
    console.log(numbers[i])
    soma += numbers[i]
}
let arit = soma / numbers.length

// #2
console.log(`Resultado 2: Esse é o valor somado: ${soma}`)

// #3
console.log(`Resultado 3: Esse é o valor somado: ${arit}`)

// #4
if (arit > 20) {
    console.log("Resultado 4: Valor maior que 20")
}
else {
    console.log("Resultado 4: Valor menor ou igual a 20")
}

// #5
let total = 0;
let contagem = 0;
for (let n=0; n < numbers.length; n += 1) {
    if (total < numbers[n]) {
        total = numbers[n];
    }
    if (numbers[n] % 2 === 1) {
        contagem += 1;
    }
}
console.log(`Resultado 5: Maior valor contido na lista: ${total}`)

// #6
if(contagem > 0) {
    console.log(`Resultado 6: Existem ${contagem} números ímpares`)
}
else {
    console.log("Nenhum valor ímpar encontrado")
}

// #7
let menor = numbers[0];
for (let m=0; m < numbers.length; m += 1) {
    if (menor > numbers[m]) {
        menor = numbers[m];
    }
}
console.log(`Resultado 7: Menor valor contido na lista: ${menor}`)

// #8

lista=[];

for (let a=1; a <= 25; a += 1) {
    lista.push(a)
}

console.log(`Resultado 8: Lista do 1 até 25`)
console.log(lista)

// #9
let novalista=[]
for (let b=0; b < lista.length; b += 1) {
    let div = lista[b] / 2;
    novalista.push(div)
}

console.log(`Resultado 9: Divisão por 2`)
console.log(novalista)