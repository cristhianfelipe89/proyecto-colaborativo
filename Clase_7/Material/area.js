// Declaración de variables para las dimensiones del rectángulo
let largo = 50;      // Tipo de dato: Number (número entero)
let ancho = 20;      // Tipo de dato: Number (número entero)

// Cálculo del área del rectángulo
let area = largo * ancho;  // Operador de multiplicación (*)

// Cálculo del perímetro del rectángulo
let perimetro = 2 * (largo + ancho);  // Operadores de suma (+) y multiplicación (*)

// Mostramos los resultados en la consola
console.log("El área del rectángulo es: " + area); // Muestra el área
console.log("El perímetro del rectángulo es: " + perimetro); // Muestra el perímetro

// Cambiar las dimensiones del rectángulo
largo = 30;         // Asignación: cambiamos el valor de largo
ancho = 40;         // Asignación: cambiamos el valor de ancho

// Recalculamos el área y el perímetro con las nuevas dimensiones
area = largo * ancho;  // Nueva operación aritmética para el área
perimetro = 2 * (largo + ancho);  // Nueva operación aritmética para el perímetro

// Mostramos los nuevos resultados
console.log("El área del rectángulo con nuevas dimensiones es: " + area);
console.log("El perímetro del rectángulo con nuevas dimensiones es: " + perimetro);
