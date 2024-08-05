let agendaTelefonica = {};

function agregarContacto(nombre, telefono) {
agendaTelefonica[nombre] = telefono;
}

function buscarContacto(nombre) {
if (agendaTelefonica[nombre]) {
    console.log(`Número de teléfono de ${nombre}: ${agendaTelefonica[nombre]}`);
} else {
    console.log(`El contacto ${nombre} no se encontró en la agenda.`);
}
}

function gestionarAgenda() {
while (true) {
    let accion = prompt("¿Qué quieres hacer? (Agregar, Buscar, Salir)").toLowerCase();

    if (accion === 'agregar') {
    let nombre = prompt("Introduce el nombre del contacto:");
    let telefono = prompt("Introduce el número de teléfono del contacto:");
    agregarContacto(nombre, telefono);
    console.log(`Contacto ${nombre} agregado con éxito.`);
    } else if (accion === 'buscar') {
    let nombreABuscar = prompt("Introduce el nombre del contacto que quieres buscar:");
    buscarContacto(nombreABuscar);
    } else if (accion === 'salir') {
    console.log("Saliendo de la agenda telefónica.");
    break;
    } else {
        console.log("Acción no reconocida. Elige entre 'Agregar', 'Buscar' o 'Salir'.");
    }
}
}

gestionarAgenda();
