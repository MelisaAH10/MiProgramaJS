/* seleccionar una etiqueta del HTML */
const selector = document.getElementById("mensaje");

/* escribir dentro de esa etiqueta con JS */
selector.innerHTML = "CONEXIÓN EXITOSA ENTRE HTML Y JS";

const frase = prompt("Ingrese una palabra o frase");
const cantidad = frase.length;
const mensajeCantidad = "La cantidad de caracteres es: " + cantidad;
console.log(mensajeCantidad);


const fraseMinusculas = frase.toLowerCase();
const fraseMayusculas = frase.toUpperCase();
const minMay = "La frase en Miniscula y Mayuscula es: " + fraseMinusculas + " - " + fraseMayusculas;
console.log(minMay);
