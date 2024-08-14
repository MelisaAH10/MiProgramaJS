// Definición de la función lengthOf
function lengthOf(cadena) {
    if (cadena === "") {
      return "Input inválido";
    }
    return cadena.length;
  }
  
  // Ejecución de la función y muestra de resultados en la consola
  console.log(lengthOf("Hello, world!")); 
  console.log(lengthOf("")); 
  console.log(lengthOf("JavaScript")); 
  console.log(lengthOf("¡Hola!")); 