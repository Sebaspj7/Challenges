function cifrarCesar(mensaje, desplazamiento) {
    let mensajeCifrado = '';

    for (let i = 0; i < mensaje.length; i++) {
    let char = mensaje[i];

    if (char >= 'A' && char <= 'Z') {
        let codigo = char.charCodeAt(0);
        let nuevoCodigo = ((codigo - 65 + desplazamiento) % 26 + 26) % 26 + 65;
        mensajeCifrado += String.fromCharCode(nuevoCodigo);

    } else if (char >= 'a' && char <= 'z') {
        let codigo = char.charCodeAt(0);
        let nuevoCodigo = ((codigo - 97 + desplazamiento) % 26 + 26) % 26 + 97;
        mensajeCifrado += String.fromCharCode(nuevoCodigo);

    } else {
        mensajeCifrado += char;
    }
    }

    return mensajeCifrado;
}

let mensaje = prompt("Introduce el mensaje a cifrar:");

let desplazamiento = parseInt(prompt("Introduce el número de posiciones para el desplazamiento:"));

let mensajeCifrado = cifrarCesar(mensaje, desplazamiento);

console.log("Mensaje cifrado:", mensajeCifrado);
