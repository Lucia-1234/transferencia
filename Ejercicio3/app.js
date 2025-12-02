// produccion de una fabrica
import prompt_sync from 'prompt-sync';
const prompt = prompt_sync;

//se definen las piezas producidas y las horas de trabajo 
const piezas_producidas = 250;
const horas = 8;
const capacidad = 12;

// se solicitan las horas de trabajo
let hora = parseInt(prompt("cuantas horas trabajo la maquina: " || horas));

//se realizan los calculos de las piezas fabricadas
let total_fabricadas = piezas_producidas * hora;
//se realizan los calculos de las cajas llenas
let cajas_llenas = total_fabricadas / capacidad;
//se realizan los calculos de las piezas sobrantes 
let piezas_sueltas = total_fabricadas - cajas_llenas;

console.log(`El total de piezas fabricadas en ${hora} es de: ${total_fabricadas}`);
console.log(`El total de las cajas de 12 piezas que se llenan son ${cajas_llenas}`);
console.log(`Las piezas que quedan sueltas son: ${piezas_sueltas}`);