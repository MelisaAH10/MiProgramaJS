// Importar la función createTotalTemplate desde total.js
import { createTotalTemplate } from './total.js';

// Obtener los productos del carrito desde el localStorage
let cartproducts = JSON.parse(localStorage.getItem("cart")) || [];

// Función para crear una tarjeta de producto del carrito
function createCartCard(product) {
  return `
      <div class="product-card">
          <img class="product-img" src="${product.image}" alt="${product.title}" />
          <div class="product-info">
              <span class="product-title">${product.title}</span>
              <span class="product-color">- ${product.color || "Color no disponible"}
              </span> 
              <span class="product-description">${product.descriptionGeneral || "Descripción no disponible"}
              </span>
              <div class="product-price-block">
                  <div class="product-price">AR$${product.price}</div>
              </div>
              <div class="Quantity">
                <span class="Quanity-product">Cantidad: </span>
                <input type="number" name="quantity" min="1" id="${product.id}" value="${product.quantity}" onchange="changeQuantity(event)">
              </div>
          </div>
      </div>
  `;
}

// Función para imprimir las tarjetas de productos en la vista
function printCartCards(products) {
  const cartContainer = document.getElementById("cartproducts");
  cartContainer.innerHTML = products.map(createCartCard).join("");
}

// Función para manejar el cambio de cantidad
function changeQuantity(event) {
  const input = event.target;
  const productId = input.id;
  const newQuantity = parseInt(input.value);

  // Buscar el producto en el array cartproducts
  const product = cartproducts.find(p => p.id === productId);

  if (product) {
    // Modificar la cantidad del producto
    product.quantity = newQuantity;

    // Actualizar los productos guardados en localStorage
    localStorage.setItem("cart", JSON.stringify(cartproducts));

    // Recalcular el total a pagar y actualizar la interfaz
    updateTotal();
  }
}

// Asegurarse de que las funciones estén disponibles globalmente
window.changeQuantity = changeQuantity;
window.printCartCards = printCartCards;

// Función para actualizar el total a pagar
function updateTotal() {
  let total = 0;
  cartproducts.forEach(product => {
    total += product.price * product.quantity;
  });

  // Asumiendo que hay un elemento con id 'total' para mostrar el total a pagar
  document.getElementById('total').innerHTML = createTotalTemplate(total);
}

// Llamar a la función para renderizar las tarjetas de productos del carrito
printCartCards(cartproducts);
updateTotal();
