// Importações

const { myRemove, myFizzBuzz, encode, decode, techList, hydrate  } = require('./script');

// Exercício 1

describe('Verifica se o número foi removido do Array', () => {
    it('Removendo um número', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    })
    it('Se houve mudança', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    })
    it('Número não presente no array', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
});

// Exercício 2

describe('FizzBuzz', () => {
    it('15 retorna fizzBuzz', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });
    it('6 retorna fizz', () => {
        expect(myFizzBuzz(6)).toBe('fizz');
    });
    it('10 retorna Buzz', () => {
        expect(myFizzBuzz(10)).toBe('buzz');
    });
    it('7 retorna 7', () => {
        expect(myFizzBuzz(7)).toBe(7);
    });
    it('xablau retorna false', () => {
        expect(myFizzBuzz('xablau')).toBe(false);
    });
});

// Exercicio 3

describe('Encode e Decode', () => {
    it('São funções', () => {
        // expect(encode).toBeDefined()
        expect(typeof encode).toEqual('function');
        expect(typeof decode).toEqual('function');
    });
    it('transformar vogal em número', () => {
        expect(encode('aeiou')).toEqual('12345')
    });
    it('tranformar númeo em vogal', () => {
        expect(decode('12345')).toEqual('aeiou');
    });
    it('verificar se não é alterado', () => {
        expect(encode('aoibeysn')).toEqual('143b2ysn');
        expect(decode('2381663')).toEqual('ei8a66i');
    });
    it('verificar se o tamanho é o mesmo', () => {
        expect(encode('aoibeysn').length).toEqual(8);
        expect(decode('2381663').length).toEqual(7);
    });
});

//

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

//

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});