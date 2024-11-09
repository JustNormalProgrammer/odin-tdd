import ceasarCipher from './caesarCipher'

test('function is defined', () => {
    expect(typeof ceasarCipher).toBe('function');
})
test('shits one word by factor', () => {
    expect(ceasarCipher('hello', 1)).toBe('ifmmp');
})
test('shifts multiple words by 1', () => {
    expect(ceasarCipher('i love bananas', 1)).toBe('j mpwf cbobobt');
})
test('handles case preservation', () => {
    expect(ceasarCipher('HeLLo', 1)).toBe('IfMMp');
})
test('shifts with negative shift factor', () => {
    expect(ceasarCipher('pineapple', -1)).toBe('ohmdzookd');
})
test('wraps a word', () => {
    expect(ceasarCipher('xyz',3)).toBe('abc');
})
test('handles special characters', () => {
    expect(ceasarCipher('!!Hello, i am hungry&$&',1)).toBe('!!Ifmmp, j bn ivohsz&$&');
})