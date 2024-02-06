function mostrarResultado(resultado) {
    document.getElementById("resultado").value = resultado;
}

function sumar() {
    let numero1 = +document.getElementById("valor1").value;
    let numero2 = +document.getElementById("valor2").value;
    mostrarResultado(numero1 + numero2);

}
function restar() {
    let numero1 = +document.getElementById("valor1").value;
    let numero2 = +document.getElementById("valor2").value;
    mostrarResultado(numero1 - numero2);

}
function multiplicar() {
    let numero1 = +document.getElementById("valor1").value;
    let numero2 = +document.getElementById("valor2").value;
    mostrarResultado(numero1 * numero2);

}
function dividir() {
    let numero1 = +document.getElementById("valor1").value;
    let numero2 = +document.getElementById("valor2").value;
    mostrarResultado(numero1 / numero2);

}
function raiz() {
    let numero1 = +document.getElementById("valor1").value;
    
    mostrarResultado(Math.sqrt(numero1));
}
function absoluto() {
    let numero1 = +document.getElementById("valor1").value;
    
    mostrarResultado(Math.abs(numero1));
}
function potencia() {
    let numero1 = +document.getElementById("valor1").value;
    let numero2 = +document.getElementById("valor2").value;
    mostrarResultado(Math.pow(numero1,numero2));
}
function random() {
    let minimo = +document.getElementById("valor1").value;
    let maximo = +document.getElementById("valor2").value;
    maximo = maximo + 1;
    mostrarResultado(Math.floor(Math.random() * (maximo - minimo) + minimo));
}
function redondear() {
    let resultado = document.getElementById("resultado").value;

    mostrarResultado(Math.round(resultado));
}
function floor() {
    let resultado = document.getElementById("resultado").value;

    mostrarResultado(Math.floor(resultado));
}
function ceil() {
    let resultado = document.getElementById("resultado").value;

    mostrarResultado(Math.ceil(resultado));
}