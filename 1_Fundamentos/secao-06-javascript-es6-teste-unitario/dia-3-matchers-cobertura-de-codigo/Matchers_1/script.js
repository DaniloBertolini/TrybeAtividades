// .toContain .toHaveLength

const skills = ['HTML', 'CSS', 'JavaScript'];

const addNewSkill = (newSkill) => {
  skills.push(newSkill);
}

test('Adiciona Jest na lista de habilidades', () => {  
  const previousLength = skills.length;
  addNewSkill('Jest');
  expect(skills).toContain('Jest');
  expect(skills).toHaveLength(previousLength + 1);
});

// .toHaveProperty

const createUser = (firstName, lastName) => {
  const user = {
    email: (firstName + '_' + lastName + '@example.com').toLowerCase(),
    password: Math.floor(Math.random() * 100000000),
  };
  return user;
}

test('Cria email e senha', () => {
  const user = createUser('Mona', 'Lisa');
  expect(user).toHaveProperty('email', 'mona_lisa@example.com');
  expect(user).toHaveProperty('password');
});

// .toThrow

const multiplyByTwo = (number) => {
  if (!number) {
    throw new Error('number é indefinido');
  }
  return number * 2;
};
multiplyByTwo(4);

test('testa se multiplyByTwo retorna o resultado da multiplicação', () => {
  expect(multiplyByTwo(4)).toBe(8);
});
test('testa se é lançado um erro quando number é indefinido', () => {
  expect(() => { multiplyByTwo() }).toThrow();
});
test('testa se a mensagem de erro é "number é indefinido"', () => {
  expect(() => { multiplyByTwo() }).toThrow(new Error('number é indefinido'));
});

// .not

const workDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const weekendDays = ['Sunday', 'Saturday'];
const weekDays = workDays.concat(weekendDays);

test('Sunday is a week day', () => {
  expect(weekDays).toContain('Sunday');
});

test('Sunday is not a workday', () => {
  expect(workDays).not.toContain('Sunday');
});