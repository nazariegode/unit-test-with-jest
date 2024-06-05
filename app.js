// Euro a Dolar
const fromEuroToDollar = function (valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

// Dolar a Yen
const fromDollarToYen = function (valueInDollar) {
    let valueInYen = valueInDollar * 156.5;
    return valueInYen;
}

// Yen a Pound
const fromYenToPound = function (valueInYen) {
    let valueInPound = valueInYen * 0.87;
    return valueInPound;
}

// Esta es mi función que suma dos números
const sum = (a, b) => {
    return a + b
}
// Solo un registro en consola para nosotros
console.log(sum(7, 3))

// Exportar todas las funciones de una vez
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
