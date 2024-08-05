function validarTarjetaCredito(numeroTarjeta) {
    let digitos = numeroTarjeta.split('').map(Number);

    digitos.reverse();

    let suma = 0;
    for (let i = 0; i < digitos.length; i++) {
        let digito = digitos[i];
        if (i % 2 !== 0) {
            digito *= 2;
            if (digito > 9) {
                digito -= 9;
            }
        }
        suma += digito;
    }

    return suma % 10 === 0;
}

let numeroTarjeta = prompt("Ingresa el número de tarjeta de crédito para validarla:");

if (numeroTarjeta) {
    if (validarTarjetaCredito(numeroTarjeta)) {
        console.log("El número de tarjeta de crédito es válido.");
    } else {
        console.log("El número de tarjeta de crédito no es válido.");
    }
} else {
    console.log("Por favor, ingresa un número de tarjeta.");
}
