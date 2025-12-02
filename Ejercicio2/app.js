// conversor de tiempo

import tiempo from 'prompt-sync'
const conversor = tiempo();

// se solicita la informacion de los segundos 
const segundos = 7200;
let segundo = parseFloat(conversor("ingrese los segundos de actividad fisica que registro el aprendiz: ") || segundos);

//se realiza el calculo de los segundos a minutos
let minutos;
minutos = segundo / 60;

//se realiza el calculo de los segundos a horas
let horas;
horas = segundo / 3600;

//se realiza el calculo de los segundos a dias
let dias;
dias = segundo / 86400;

console.log(`El tiempo en minutos registrado por el aprendiz es de: ${minutos}`)
console.log(`El tiempo en horas registrado por el aprendiz es de: ${horas}`)
console.log(`El tiempo en dias registrado por el aprendiz es de: ${dias}`)