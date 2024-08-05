function jugarAdivinanza() {
    const numeroSecreto = Math.floor(Math.random() * 10) + 1;
    let intentos = 0;
    const maxIntentos = 3;
    let adivinanzaCorrecta = false;

    while (intentos < maxIntentos && !adivinanzaCorrecta) {
    let suposicion = parseInt(prompt("Adivina el número entre 1 y 10:"));

    if (isNaN(suposicion) || suposicion < 1 || suposicion > 10) {
        console.log("Por favor, ingresa un número entre 1 y 10.");
        continue;
    }

    intentos++;

    if (suposicion === numeroSecreto) {
        console.log("¡Felicidades! Has adivinado el número.");
        adivinanzaCorrecta = true;
    } else if (suposicion > numeroSecreto) {
        console.log("La suposición es  alta.");
    } else {
        console.log("La suposición es baja.");
    }

    if (intentos === maxIntentos && !adivinanzaCorrecta) {
        console.log("Perdiste, el número era " + numeroSecreto + ".");
    }
    }
}

jugarAdivinanza();
