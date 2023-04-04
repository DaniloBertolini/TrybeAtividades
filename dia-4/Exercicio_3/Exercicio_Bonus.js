let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};
let lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};
let lesson3 = {
    materia: 'Geografia',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

console.log('#1')
// #1

function addItens (destino, chave, valor) {
   destino[chave] = valor
}

addItens(lesson2, 'turno', 'noite')
console.log(lesson2)


console.log('#2')
// #2

function listarKeys (objeto) {
    resultado = Object.keys(objeto)
    return resultado;
}

console.log(listarKeys(lesson1))


console.log('#3')
// #3

function length (objeto) {
    return Object.keys(objeto).length;
}

console.log(`O tamanho de lesson3 é ${length(lesson3)}`)


console.log('#4')
// #4

function values (valores) {
    let resultado = Object.values(valores);
    return resultado;
}

console.log(values(lesson1))


console.log('#5')
// #5

let allLessons = Object.assign({}, {
    lesson1: lesson1,
    lesson2: lesson2,
    lesson3: lesson3,
});

console.log(allLessons)


console.log('#6')
// #6