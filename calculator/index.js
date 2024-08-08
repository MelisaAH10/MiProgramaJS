/* seleccionar una etiqueta del HTML */
const selector = document.getElementById("mensaje");

/* escribir dentro de esa etiqueta con JS */
selector.innerHTML = "CONEXIÓN EXITOSA ENTRE HTML Y JS";

const numero1 = Number(prompt("Ingrese primer número"));
const numero2 = Number(prompt("Ingrese segundo número"));
const suma =numero1 +numero2;

const mensajeSuma = "El resultado de la suma es "+suma;

alert(mensajeSuma);


const promedio = suma / 2;
const triple = promedio * 3;
const resultadoMenosDiez = triple - 10;

const mensajePromedio = "El promedio es "+promedio;
const mensajeTriple = "El triple del promedio es "+triple;
const mensajeResultadoMenosDiez = "El resultado menos diez es "+resultadoMenosDiez;

const mensajeFinal = mensajePromedio + "\n" + mensajeTriple + "\n" + mensajeResultadoMenosDiez;

alert(mensajeFinal);
