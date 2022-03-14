const { it } = require('@jest/globals');

describe('Teste da função Sum', () => {
    const sum = require('./sum');
    it('Testa se o retorno de sum (4,5) é 9' ,() => {
        expect(sum(4,5)).toEqual(9);
    });
    it('Testa se o retorno de sum (0,0) é 0' ,() => {
        expect(sum(0,0)).toEqual(0);
    })
    it('Testa se o retorna um erro quando sum(4,"5")' ,() => {
        expect(() => {sum(4,'5')}).toThrow();
    })
    it('Testa se o retorna o texto de erro "parameters must be number"' ,() => {
        expect(() => {sum(4,'5')}).toThrowError(new Error('parameters must be numbers'));
    })
});

