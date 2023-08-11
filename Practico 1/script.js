function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplicacion(a, b) {
    let resultado = 0;
    for (let i = 0; i < b; i++) {
        resultado = suma(resultado, a);
    }
    return resultado;
}

function division(a, b) {
    if (b === 0) {
        return 'Error: División por cero';
    }

    let cociente = 0;
    while (a >= b) {
        a = resta(a, b);
        cociente = suma(cociente, 1);
    }
    return cociente;
}

function calculate() {
    const operando1 = parseFloat(document.getElementById('operando1').value);
    const operando2 = parseFloat(document.getElementById('operando2').value);
    const operator = document.getElementById('operator').value;
    let resultado;

    switch (operator) {
        case 'suma':
            resultado = suma(operando1, operando2);
            break;
        case 'resta':
            resultado = resta(operando1, operando2);
            break;
        case 'division':
            resultado = division(operando1, operando2);
            break;
        case 'multiplicacion':
            resultado = multiplicacion(operando1, operando2);
            break;
        default:
            resultado = 'Error: Operador no válido';
            break;
    }

    // Mostrar el resultado en el elemento HTML con id="result"
    document.getElementById('result').textContent = `Resultado: ${resultado}`;
}

// Función para limpiar los campos de entrada y el resultado
function clearFields() {
    document.getElementById('operando1').value = '';
    document.getElementById('operando2').value = '';
    document.getElementById('result').textContent = 'Resultado: ';
}
