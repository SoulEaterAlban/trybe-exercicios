const { it } = require("@jest/globals")

describe('Testes para encode e decode', () =>{
    const {encode,decode} = require('./encodeAndDecode');
    it('Teste se encode e decode são funções',() =>{
        expect(typeof encode).truthy;
        expect(typeof decode).truthy;
    });
    it ('Teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente',() => {
        expect(encode('aeiou')).toBe('12345');
    });
    it ('Teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente',() => {
        expect(decode('12345')).toBe('aeiou');
    });
    it ('Teste se as demais letras/números não são convertidos para cada caso',() =>{
        expect(encode('Sofia te amo')).toBe('S4f31 t2 1m4');
    });
    it ('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro',() =>{
        expect(encode('Sofia te amo').length).toEqual(12);
    });
})