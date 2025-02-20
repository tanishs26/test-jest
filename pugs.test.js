const {
  capitalize,
  reverse,
  calculator,
  caesarCipher,
  analyzeArray,
} = require("./pugs");

test("capitalize", () => {
  expect(capitalize("tanishh")).toBe("Tanishh");
});

test("reverse", () => {
  expect(reverse("tanish")).toBe("hsinat");
});

test("analyzes an array correctly", () => {
  const input = analyzeArray([1, 8, 3, 4, 2, 6]);
  const expectedResult = {
    avg: 4,
    min: 1,
    max: 8,
    length: 6,
  };
  expect(input).toEqual(expectedResult);
});

test("adds two numbers", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("subtracts two numbers", () => {
  expect(calculator.subtract(5, 3)).toBe(2);
});

test("multiplies two numbers", () => {
  expect(calculator.multiply(4, 3)).toBe(12);
});

test("divides two numbers", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test("throws error when dividing by zero", () => {
  expect(() => calculator.divide(10, 0)).toThrow(
    "Division by zero is not allowed"
  );
});

test("shift normal word", () => {
  expect(caesarCipher("abc", 1)).toBe("bcd");
});

test("case preservation", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("puncutation, spaces, and other non-alpha characters", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
