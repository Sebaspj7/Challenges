const diccionario = {
    "gato": "agente",
    "rojo": "secreto",
    "hambre": "misión"
};

let mensajeCodificado = "El gato rojo tiene hambre";

function decodificarMensaje(mensaje) {
    let palabras = mensaje.split(' ');

    let mensajeDecodificado = palabras.map(palabra => {
    return diccionario[palabra] || palabra; 
    }).join(' ');

    return mensajeDecodificado;
}

let mensajeOriginal = decodificarMensaje(mensajeCodificado);
console.log("Mensaje original:", mensajeOriginal);
