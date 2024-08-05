function calcularPropina(totalFactura, porcentajePropina) {
    return totalFactura * (porcentajePropina / 100);
}

function formatearPesosColombianos(valor) {
    return valor.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
}

let totalFactura = parseFloat(prompt("Introduce el total de la factura (en pesos colombianos):"));

let porcentajePropina = parseFloat(prompt("Introduce el porcentaje de propina que quieres dejar:"));

let propina = calcularPropina(totalFactura, porcentajePropina);

console.log(`El total de la factura es: ${formatearPesosColombianos(totalFactura)}`);
console.log(`El porcentaje de propina es: ${porcentajePropina}%`);
console.log(`La propina calculada es: ${formatearPesosColombianos(propina)}`);
