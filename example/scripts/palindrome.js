function palindrome(cadena) {
  // Rebana la cadena, invierte la lista y la une de nuevo
  const reversed = cadena.split("").reverse().join("");

  // Verifica si la cadena de entrada es igual a la cadena de salida
  return cadena === reversed;
}

// Muestra de resultados en la consola
console.log("hello: " + palindrome("hello")); // false
console.log("hannah: " + palindrome("hannah")); // true
console.log("racecar: " + palindrome("racecar")); // true
console.log("world: " + palindrome("world")); // false
