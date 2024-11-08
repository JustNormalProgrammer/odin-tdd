import reverseString from './reverseString';

test('function is defined', () => {
    expect(reverseString).toBeDefined();
})
test('reverses one word string', () => {
    expect(reverseString('test')).toBe('tset');
})
test('reverse multi word string', () => {
    expect(reverseString('i am so hungry')).toBe('yrgnuh os ma i');
})
test('reverse string with special symbols', () => {
    expect(reverseString('!!Hello$&#*')).toBe('*#&$olleH!!');
})
