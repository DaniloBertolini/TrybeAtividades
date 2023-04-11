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


// #1
function addItens (destino, chave, valor) {
   destino[chave] = valor
}

addItens(lesson2, 'turno', 'noite')
console.log(lesson2)


// #2
function listarKeys (objeto) {
    resultado = Object.keys(objeto)
    return resultado;
}

console.log(listarKeys(lesson1))


// #3
function length (objeto) {
    return Object.keys(objeto).length;
}

console.log(`O tamanho de lesson3 é ${length(lesson3)}`)


// #4
function values (valores) {
    let resultado = Object.values(valores);
    return resultado;
}

console.log(values(lesson1))


// #5
let allLessons = Object.assign({}, {
    lesson1: lesson1,
    lesson2: lesson2,
    lesson3: lesson3,
});

console.log(allLessons)


// #6
function totalEstudante (estudantes) {
    let resultado = lesson1.numeroEstudantes + lesson2.numeroEstudantes + lesson3.numeroEstudantes
    return resultado;
}

console.log(totalEstudante())


// #7
function valorChave (local ,key) {
    let resultado = local[Object.keys(local)[key]]
    return resultado;
}

console.log(valorChave(lesson3, 1))


// #8
function verificaPar (local, nome, valor) {
    const result = (Object.keys(local).indexOf(nome) >= 0)
    const result2 = (Object.values(local).indexOf(valor) >= 0)
    const result3 = (result && result2)
    return result3;
}
// 

console.log(verificaPar(lesson3, 'materia', 'Geografia'))



/* let lesson3 = {
    materia: 'Geografia',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
}; */
