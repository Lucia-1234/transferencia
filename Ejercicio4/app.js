// estadisticas de calificaciones

import prompt_sync from "prompt-sync";
const prompt = prompt_sync();

//se definen las notas del estudinate
const nota1 = 45;
const nota2 = 38;
const nota3 = 29;
const nota4 = 40;

//se hace la suma de 4 notas
let suma;
suma = nota1 + nota2 + nota3 + nota4;

// se calcula el promedio
let promdio;
promdio = suma / 4;

// se hace el calculo de la operacion 
let resultado;
resultado = (nota1 + nota2) * (nota3 + nota4) / 2;

console.log(`La suma de las 4 notas es: ${suma}`);
console.log(`El promedio de las notas es: ${promdio}`);
console.log(`El resultado de la operacion (nota1 + nota2) * (nota3 + nota4) / 2 es: ${resultado}`);