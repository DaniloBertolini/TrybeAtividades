const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const resultado = {
    ...user,
    ...jobInfos
}

const {
    name: nomezin,
    age: idade,
    nationality: lugar,
    profession: profissao,
    squad: quarteto,
    squadInitials: quartetoInicial
} = resultado

const frase = `Hi, my name is ${nomezin}, I'm ${idade} years old and I', ${lugar}. I work as a ${profissao} and my squad is ${quartetoInicial}-${quarteto}.`
console.log(frase);
// "Hi, my name is Maria, I'm 21 years old and I'm Brazilian. I work as a Software engineer and my squad is RLL-Rocket Landing Logic"