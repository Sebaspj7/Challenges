function convertirTemperaturas() {
    let temperaturaCelsius = parseFloat(prompt("Ingresa la temperatura en grados Celsius:"));
    let temperaturaFahrenheit = parseFloat(prompt("Ingresa la temperatura en grados Fahrenheit:"));

    if (isNaN(temperaturaCelsius) || isNaN(temperaturaFahrenheit)) {
    console.log("Por favor, ingresa valores válidos para las temperaturas.");
    return;
    }

    let celsiusAFahrenheit = temperaturaCelsius * 9 / 5 + 32;

    let fahrenheitACelsius = (temperaturaFahrenheit - 32) * 5 / 9;

    console.log(temperaturaCelsius + " grados Celsius son " + celsiusAFahrenheit.toFixed(2) + " grados Fahrenheit.");
    console.log(temperaturaFahrenheit + " grados Fahrenheit son " + fahrenheitACelsius.toFixed(2) + " grados Celsius.");
}

convertirTemperaturas();
