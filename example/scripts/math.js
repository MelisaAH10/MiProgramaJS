function palindrome(num) {
  // Convertir el número a su valor absoluto
  const absNum = Math.abs(num);

  // Redondear el número hacia arriba
  const ceilNum = Math.ceil(num);

  // Redondear el número hacia abajo
  const floorNum = Math.floor(num);

  // Redondear el número al entero más cercano
  const roundNum = Math.round(num);

  // Encontrar el máximo y mínimo de una lista de números
  const maxNum = Math.max(num, absNum, ceilNum, floorNum, roundNum);
  const minNum = Math.min(num, absNum, ceilNum, floorNum, roundNum);

  // Generar un número aleatorio
  const randomNum = Math.random();

  console.log(`Número original: ${num}`);
  console.log(`Valor absoluto: ${absNum}`);
  console.log(`Redondeado hacia arriba: ${ceilNum}`);
  console.log(`Redondeado hacia abajo: ${floorNum}`);
  console.log(`Redondeado al entero más cercano: ${roundNum}`);
  console.log(`Máximo: ${maxNum}`);
  console.log(`Mínimo: ${minNum}`);
  console.log(`Número aleatorio: ${randomNum}`);
}

// Ejemplo de uso
palindrome(12321);
palindrome(-12321);
palindrome(123.456);
