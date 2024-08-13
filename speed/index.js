/*
function calcularVelocidad(distancia, tiempo) {
  //const distancia = 10;
  //const tiempo = 2;
  const velocidad = distancia / tiempo;
  console.log("La velocidad del móvil es " + velocidad);
}


calcularVelocidad();
calcularVelocidad();
calcularVelocidad();


calcularVelocidad(10, 2);
calcularVelocidad(100, 2);
calcularVelocidad(75, 3);
*/

const calcularVelocidad2 = (distancia, tiempo) => {
  const velocidad = distancia / tiempo;
  //console.log("La velocidad del móvil es " + velocidad);
  return velocidad;
};

const velocidad1 = calcularVelocidad2(10,2);
console.log("La velocidad de Juana es " + velocidad1);

const velocidad2 = calcularVelocidad2(20,2);
console.log("La velocidad de Juan es " + velocidad2);

const velocidad3 = calcularVelocidad2(40,2);
console.log("La velocidad de Maria es " + velocidad3);