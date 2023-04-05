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