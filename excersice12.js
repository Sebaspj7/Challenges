let frase = prompt("Ingresa una frase:");

function invertirPalabras(frase) {
let palabras = frase.split(' ');

let palabrasInvertidas = palabras.map(palabra => {
    return palabra.split('').reverse().join('');
});

return palabrasInvertidas.join(' ');
}

let fraseInvertida = invertirPalabras(frase);

console.log("Frase con palabras invertidas:", fraseInvertida);
