/* | I   | 1    |
| --- | ---- |
| IV  | 4    |
| V   | 5    |
| IX  | 9    |
| X   | 10   |
| XL  | 40   |
| L   | 50   |
| XC  | 90   |
| C   | 100  |
| CD  | 400  |
| D   | 500  |
| CM  | 900  |
| M   | 1000 | */


/* let lista = [];
const numeroRomano = (num) => {
    for(let key in num) {
        switch (num[key]) {
            case 'I':
                lista.push(1)
                break;
            case 'V':
                lista.push(5)
                break;
            case 'X':
                lista.push(10)
                break;
            case 'L':
                lista.push(50)
                break;
            case 'C':
                lista.push(100)
                break;
            case 'D':
                lista.push(500)
                break;
            case 'M':
                lista.push(1000)
                break;
        }
    }

}
numeroRomano('XLVIII')
let soma = 0;
let tamanhoMU = lista.length -1
for (let i = tamanhoMU; i > 0; i -= 1) {
    if(lista[i] === lista[i-1]) {
        soma += lista[i];
    } else if (lista[i] < lista[i-1]) {
        soma += lista[i];
    } else {
        soma -= lista[i];
    }
} */


/* let numerosRomanos = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000,
};

function numerosRomanos (numero) {
    numero = numero.toLowerCase();
    let len = numero.length;
    let soma = numerosRomanos[numero[len - 1]];
    let atual = numerosRomanos[numero[len - 1]];
}

numerosRomanos('VIII'); */

//Exercicio 2

const arrayOfNumbers = (vector) => {
    novaArray = [];
    for(let i=0; i<vector.length; i += 1) {
        for(let a=0; a<vector[i].length; a += 1) {
            (vector[i][a] % 2 === 0) ? novaArray.push(vector[i][a]) : '';
        }
    }
    return novaArray;
};

console.log(arrayOfNumbers([[1, 2], [3,4,5,6], [7,8,9,10]]));


//Exercicio 3

let basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva', 
  ];

const separando = (listaGrande) => {
    lista = {};
    for (let i=0; i<listaGrande.length;  i += 1) {
        let fruta = basket[i];
        if (!lista[fruta]) lista[fruta] = 0;
        lista[fruta] += 1;
    }
    return lista;
};

const palavras = () => {
    palavrasLista = [];
    let resultado = separando(basket);
    for(fruta in resultado) {
        let mensagem = `${resultado[fruta]} ${fruta}`;
        if(resultado[fruta] > 1) mensagem += 's';
        palavrasLista.push(mensagem);
    }
    return palavrasLista;
}

console.log(`Sua cesta possui: ${palavras().join(', ')}`);


// Exercicio 4

