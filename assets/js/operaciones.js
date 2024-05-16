function realizarOperacion(operacion) {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultado;

    switch (operacion) {
        case 'sumar':
            resultado = sum(num1, num2);
            document.getElementById("resultado").innerText = "La suma es: " + resultado;
            break;
        case 'restar':
            resultado = res(num1, num2);
            document.getElementById("resultado").innerText = "La resta es: " + resultado;
            break;
        case 'multiplicar':
            resultado = mult(num1, num2);
            document.getElementById("resultado").innerText = "La multiplicación es: " + resultado;
            break;
        case 'dividir':
            resultado = div(num1, num2);
            document.getElementById("resultado").innerText = "La división es: " + resultado;
            break;
    }
}

function sum(a, b) {
    return a + b;
}

function res(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

