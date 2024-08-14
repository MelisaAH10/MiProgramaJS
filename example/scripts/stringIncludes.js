function stringIncludes(substring, string) {
  return string.includes(substring);
}

//Muestra de resultados en la consola
console.log(stringIncludes("he", "Hello")); // false
console.log(stringIncludes("he", "hello world")); // true
console.log(stringIncludes("world", "hello world")); // true
console.log(stringIncludes("Python", "JavaScript")); // false
