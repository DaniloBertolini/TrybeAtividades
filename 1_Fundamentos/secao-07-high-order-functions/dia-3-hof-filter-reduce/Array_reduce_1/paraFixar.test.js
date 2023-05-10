const sum = require('./paraFixar');
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
const numbers2 = [5, 10];

describe('Testa a soma dos números', () => {
    it('testa se sum é uma função', () => {
        expect(typeof sum).toBe('function');
    })
    it('testa a soma dos numeros: 5 + 10', () => {
        expect(sum(numbers2)).toEqual(10);
    });
    it('testa a soma da lista numbers', () => {
        expect(sum(numbers)).toEqual(152);
    });
});
