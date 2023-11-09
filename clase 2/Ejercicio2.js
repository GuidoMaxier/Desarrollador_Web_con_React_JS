function sumar() {
    const operando1 = parseFloat(document.getElementById("operando1").value);
    const operando2 = parseFloat(document.getElementById("operando2").value);
    const resultado = operando1 + operando2;

    const mensaje = `${operando1} + ${operando2} = ${resultado}`;
    document.getElementById("resultado").textContent = mensaje;
}

function restar() {
    const operando1 = parseFloat(document.getElementById("operando1").value);
    const operando2 = parseFloat(document.getElementById("operando2").value);
    const resultado = operando1 - operando2;

    const mensaje = `${operando1} - ${operando2} = ${resultado}`;
    document.getElementById("resultado").textContent = mensaje;
}

function multiplicar() {
    const operando1 = parseFloat(document.getElementById("operando1").value);
    const operando2 = parseFloat(document.getElementById("operando2").value);
    const resultado = operando1 * operando2;

    const mensaje = `${operando1} * ${operando2} = ${resultado}`;
    document.getElementById("resultado").textContent = mensaje;
}

function dividir() {
    const operando1 = parseFloat(document.getElementById("operando1").value);
    const operando2 = parseFloat(document.getElementById("operando2").value);
    if (operando2 === 0) {

        document.getElementById("resultado").textContent = "No de puede dividir por cero";
    } else {
        const resultado = operando1 / operando2;

        const mensaje = `${operando1} / ${operando2} = ${resultado}`;
        document.getElementById("resultado").textContent = mensaje;
    }
}
