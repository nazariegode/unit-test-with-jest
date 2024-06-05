const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBe(expected);
});

test("One dollar should be 156.5 yen", function() {
    const yen = fromDollarToYen(3.5);
    const expected = 3.5 * 156.5;
    expect(yen).toBe(expected);
});

test("One yen should be 0.87 pounds", function() {
    const pounds = fromYenToPound(3.5);
    const expected = 3.5 * 0.87;
    expect(pounds).toBe(expected);
});
