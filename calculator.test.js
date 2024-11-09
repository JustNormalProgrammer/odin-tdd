import { calculator } from "./calculator";

test('adds 2 values', () => {
    expect(calculator.add(2,3)).toBe(5);
})
test('subtract 2 values', () => {
    expect(calculator.subtract(3,2)).toBe(1);
})
test('divide 2 values', () => {
    expect(calculator.divide(6,2)).toBe(3);
})
test('divide by 0', () => {
    expect(() => calculator.divide(6,0)).toThrow();
})
test('multiply 2 values', () => {
    expect(calculator.multiply(2,3)).toBe(6);
})