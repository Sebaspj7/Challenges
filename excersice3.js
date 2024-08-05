function generarNombreUsuario(nombre, apellido) {
    let parteNombre = nombre.substring(0, 3).toLowerCase();
    let parteApellido = apellido.substring(0, 3).toLowerCase();

    let numeroAleatorio = Math.floor(Math.random() * 90) + 10;

    let nombreUsuario = parteNombre + parteApellido + numeroAleatorio;

    return nombreUsuario;
}

let nombre = prompt("Ingresa tu nombre:");
let apellido = prompt("Ingresa tu apellido:");

if (nombre && apellido) {
    let nombreUsuarioGenerado = generarNombreUsuario(nombre, apellido);
    console.log("El nombre de usuario generado es: " + nombreUsuarioGenerado);
} else {
    console.log("Por favor, ingresa tanto tu nombre como tu apellido.");
}
