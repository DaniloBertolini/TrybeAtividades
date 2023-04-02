function multCaracter (caracter, quantidade) {
let palavra = '';
    for (let i = 0; i < quantidade; i += 1) {
        palavra += caracter;
    }
    return palavra
}

function piramide (numero) {
let caracter = '*';
let espaco = ' ';
let resultado = '';
let quantCaracter = 1;
let quantEspaco = Math.trunc(numero/2);
let loop;
if (numero % 2 === 1) {
    loop = Math.trunc(numero/2);
}
else {
    loop = Math.trunc(numero/2) - 1;
    quantCaracter += 1;
    quantEspaco -= 1
}
for(let i = 0; i <= loop; i += 1, quantCaracter += 2, quantEspaco -= 1) {
    resultado += multCaracter(espaco, quantEspaco) + multCaracter(caracter, quantCaracter) + multCaracter(espaco, quantEspaco) + '\n';
}
return resultado;
}

console.log(piramide(9))