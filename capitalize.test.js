import capitalize from "./capitalize";

test('function defined', () => {
    expect(capitalize).toBeDefined();
})
test('capitalizes one word string', ()=>{
    expect(capitalize("hello")).toBe("Hello");
})
test('capitalizes multi word string', () => {
    expect(capitalize("hello it's me!")).toBe("Hello it's me!");
})
test('handles capitalized string', () => {
    expect(capitalize("Hello!")).toBe("Hello!");
})
test('handles not a letter at index 0', () => {
    expect(capitalize("123 Hello")).toBe("123 Hello");
})