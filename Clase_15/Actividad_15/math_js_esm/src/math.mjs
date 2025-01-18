
export function sumar(a, b) {
    return a + b;
}

export function restar(a, b) {
    return a - b;
}

export function multiplicar(a, b) {
    return a * b;
}

export function dividir(a, b) {
    if (b === 0) {
        return "Error: División por cero";
    }
    return a / b;
}

export default 
{   
    sumar, 
    restar, 
    multiplicar, 
    dividir 
};