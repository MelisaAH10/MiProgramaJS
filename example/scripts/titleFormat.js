function titleFormat(cadena) {
  if (cadena === "") {
    return "Invalid input";
  }

  // Cortar la cadena en primera letra y resto del título
  const firstLetter = cadena.charAt(0).toUpperCase();
  const restOfTitle = cadena.slice(1).toLowerCase();

  // Concatenar ambas partes
  const formattedTitle = firstLetter + restOfTitle;

  // Retornar la cadena
  //return formattedTitle.length;
  return formattedTitle;
}

// Muestra de resultados en la consola
console.log(titleFormat("hello, world!"));
console.log(titleFormat(""));
console.log(titleFormat("HELLO world"));
console.log(titleFormat("HellO WOrLd"));
