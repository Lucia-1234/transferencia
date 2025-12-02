// calculadora de gastos de viaje

//se definen constantes para costos fijos y cantidad de personas 
const transporte = 120000;
const alojamiento = 200000;
const alimentacion = 150000;
const personas = 4;

//se calcula el total de los costos
let total = transporte + alojamiento + alimentacion;

//se hace la division en partes iguales para cada persona 
let division = total / personas;

console.log(`El total en costos fijos es de: ${total}`);
console.log(`A cada persona le corresponde dar: ${division}`);

//el total recaudado por las 4 personas 
let aporte = 130000 * personas;

//Se calcula el sobrante 
let sobrante = aporte - total;

console.log(`El sobrante del aporte dado es de: ${sobrante}`);