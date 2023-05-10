const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

const { a: nome, b: classAssigned, c: subject, d: algo} = student;

console.log(nome); // Maria
console.log(classAssigned); // Turma B
console.log(subject); // Matemática
console.log(algo); // undefined
  