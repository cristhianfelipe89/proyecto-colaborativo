/* forma normal
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "Error: División por cero";
    }
    return a / b;
}

module.exports = {
    sumar,
    restar,
    multiplicar,
    dividir
};
*/


//forma destructurada

const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => {
    if (b === 0) {
        return "Error: División por cero";
    }
    return a / b;
};

module.exports = {
    sumar,
    restar,
    multiplicar,
    dividir
};
