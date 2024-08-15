class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      return "Error: No se puede dividir por cero";
    }
    return a / b;
  }

  squareRoot(a) {
    return Math.sqrt(a);
  }

  cubeRoot(a) {
    return Math.cbrt(a);
  }

  power(a, b) {
    return Math.pow(a, b);
  }
}

function startCalculator() {
  const calculator = new Calculator();
  const operation = prompt(
    "Elige la operación: (sumar, restar, multiplicar, dividir, raiz cuadrada, raiz cubica, potencia)"
  ).toLowerCase();

  if (operation === "sumar") {
    const num1 = parseFloat(prompt("Ingresa el primer número:"));
    const num2 = parseFloat(prompt("Ingresa el segundo número:"));
    const result = calculator.add(num1, num2);
    alert(`El resultado es: ${result}`);
  } else if (operation === "restar") {
    const num1 = parseFloat(prompt("Ingresa el primer número:"));
    const num2 = parseFloat(prompt("Ingresa el segundo número:"));
    const result = calculator.subtract(num1, num2);
    alert(`El resultado es: ${result}`);
  } else if (operation === "multiplicar") {
    const num1 = parseFloat(prompt("Ingresa el primer número:"));
    const num2 = parseFloat(prompt("Ingresa el segundo número:"));
    const result = calculator.multiply(num1, num2);
    alert(`El resultado es: ${result}`);
  } else if (operation === "dividir") {
    const num1 = parseFloat(prompt("Ingresa el primer número:"));
    const num2 = parseFloat(prompt("Ingresa el segundo número:"));
    const result = calculator.divide(num1, num2);
    alert(`El resultado es: ${result}`);
  } else if (operation === "raiz cuadrada") {
    const num = parseFloat(prompt("Ingresa el número:"));
    const result = calculator.squareRoot(num);
    alert(`La raíz cuadrada es: ${result}`);
  } else if (operation === "raiz cubica") {
    const num = parseFloat(prompt("Ingresa el número:"));
    const result = calculator.cubeRoot(num);
    alert(`La raíz cúbica es: ${result}`);
  } else if (operation === "potencia") {
    const base = parseFloat(prompt("Ingresa la base:"));
    const exponent = parseFloat(prompt("Ingresa el exponente:"));
    const result = calculator.power(base, exponent);
    alert(`El resultado de la potencia es: ${result}`);
  } else {
    alert("Operación inválida. Por favor, elige una operación válida.");
  }
}

startCalculator();
