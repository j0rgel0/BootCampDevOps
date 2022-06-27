let botonEjecutar = document.querySelector("#botonEjecutar");

function menuString() {
    let form = document.querySelector("#formEjecutar");
    let cadena = form.cadena.value;
    if (document.getElementById('menu').value == 1) {
        document.getElementById("resultado").innerHTML = "La cadena es " + cadena + " y sus primeras dos letras son: " + cadena[0] + " y " + cadena[1] + "<br>";
    }
    if (document.getElementById('menu').value == 2) {
        document.getElementById("resultado").innerHTML = "La cadena es " + cadena + " y sus primeras tres letras son: " + cadena[0] + " y " + cadena[1] + " y " + cadena[2] + "<br>";
    }
    if (document.getElementById('menu').value == 3) {
        document.getElementById("resultado").innerHTML = "La cadena es " + cadena + " y sus últimas dos letras son: " + (
            cadena.substr(-2)
        )[0] + " y " + cadena.substr(-1) + "<br>";
    }
    if (document.getElementById('menu').value == 4) {
        document.getElementById("resultado").innerHTML = "La cadena es " + cadena + " y su última letra es: " + cadena.substr(-1);
    }
}
