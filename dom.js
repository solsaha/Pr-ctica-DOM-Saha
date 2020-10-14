// Bienvenida

alert ("Bienvenidos a mi sitio!")

// Avanzar
let reply = confirm ("Está seguro de querer avanzar?")

if (reply == false) {
    let falseReply = document.querySelector (".subtitulo");
    falseReply.innerHTML = "Lamentamos que no quieras continuar tu visita por este sitio increíble"
}

else {
    let trueReply = document.querySelector (".subtitulo");
trueReply.innerHTML = "¡Qué alegría que quieras seguir con tu visita por este maravilloso sitio!"
}

// Nombre usuario

let name = prompt ("Cuál es tu nombre?");
console.log (name);

let saludo = document.querySelector (".titulo");
saludo.innerHTML = "Bienvenidx " + name;

// Edad usuario

let edad = prompt ("Cuál es tu edad?");
let acceso = document.querySelector ("body");

if (edad < 18) {
    acceso.style.display= "none"
}

// Modo oscuro

let modoOscuro = confirm ("Quiere utilizar el modo oscuro?")

if (modoOscuro == true) {
    acceso.style.backgroundColor = "dimgray";
    acceso.style.color = "white"
}

let diaDeSemana = "Domingo"

if (diaDeSemana == "Domingo") {
    body.innerHTML = "Hoy es día de descanso!"
}