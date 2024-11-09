import analyzeArray from './analyzeArray';

test('function defined', () => {
    expect(typeof analyzeArray).toBe('function');
})
test('handles empty array', () => {
    expect(analyzeArray([])).toStrictEqual({});
})
test('handles array with one item', () => {
    expect(analyzeArray([1])).toStrictEqual({
        average: 1,
        min: 1, 
        max: 1, 
        length: 1
    })
})
test('handles array with multiple positive integers', () => {
    expect(analyzeArray([1,2,3])).toStrictEqual({
        average: 2,
        min: 1, 
        max: 3, 
        length: 3
    })
})
test('handles array with multiple positive and negative integers', () => {
    expect(analyzeArray([-1,0,1])).toStrictEqual({
        average: 0,
        min: -1, 
        max: 1, 
        length: 3
    })
})
test('handles array with floating point values', () => {
    expect(analyzeArray([-0.5, 0, 0.5])).toStrictEqual({
        average: 0,
        min: -0.5, 
        max: 0.5, 
        length: 3
    })
})