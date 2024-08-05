function calcularBMI() {
    let peso = parseFloat(prompt("Ingresa tu peso en kilogramos:"));
    let altura = parseFloat(prompt("Ingresa tu estatura en metros:"));

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    console.log("Ingresa valores válidos para peso y estatura.");
    return;
    }

    let bmi = peso / (altura * altura);

    console.log("Tu BMI es: " + bmi.toFixed(2));

    if (bmi < 18.5) {
    console.log("Bajo peso");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("Peso normal");
    } else if (bmi >= 25 && bmi <= 29.9) {
    console.log("Sobrepeso");
    } else {
    console.log("Obesidad");
    }
}

calcularBMI();
