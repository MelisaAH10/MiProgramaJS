document.addEventListener("DOMContentLoaded", () => {
  // Definir cartproducts si no está definida
  let cartproducts = window.cartproducts || [];
  function updateTotal() {
    // Lógica para actualizar el total del carrito
    console.log("Total actualizado");
  }

  // Definir la función printCartCards
  function printCartCards(cartproducts) {
    // Lógica para imprimir las tarjetas de productos del carrito
    console.log("Tarjetas de productos actualizadas");
  }

  // Seleccionar el botón "Finaliza tu compra"
  const buySelector = document.getElementById("cart-btn");

  // Verificar si el botón existe
  if (buySelector) {
    // Agregar un escuchador de eventos de click al botón
    buySelector.addEventListener("click", () => {
      // Borrar todos los productos del array cartproducts
      cartproducts = [];

      // Borrar todos los productos del localStorage
      localStorage.removeItem("cart");

      // Actualizar la impresión de las tarjetas de productos del carrito
      printCartCards(cartproducts);

      // Actualizar la impresión del cuadro de detalle del total
      updateTotal();

      // Informar al usuario que no hay productos en el carrito
      const cartContainer = document.getElementById("cartproducts");
      cartContainer.innerHTML =
        "<p style='font-weight: bold; font-size: 1.5em;'>NO HAY PRODUCTOS EN EL CARRITO</p>";
    });
  } else {
    console.error("El botón con ID 'cart-btn' no se encontró en el DOM.");
  }
});