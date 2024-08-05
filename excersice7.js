function validarCorreo(correo) {
    const regex = /^[^@]+@[^@]+\.[^@]+$/;

    return regex.test(correo);
}

let correoElectronico = prompt("Introduce tu dirección de correo electrónico:");

if (validarCorreo(correoElectronico)) {
    console.log("La dirección de correo electrónico es válida.");
} else {
    console.log("La dirección de correo electrónico no es válida.");
}
