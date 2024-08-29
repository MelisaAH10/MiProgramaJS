// Importar la función createTotalTemplate desde total.js
import { createTotalTemplate } from "./total.js";

// Obtener los productos del carrito desde el localStorage
let cartproducts = JSON.parse(localStorage.getItem("cart")) || [];

// Obtener los productos favoritos desde el localStorage
let favoriteProducts = JSON.parse(localStorage.getItem("favorites")) || [];

// Función para crear una tarjeta de producto del carrito
function createCartCard(product) {
  return `
      <div class="product-card">
          <img class="product-img" src="${product.image}" alt="${
    product.title
  }" />
          <div class="product-info">
              <span class="product-title">${product.title}</span>
              <span class="product-color">- ${
                product.color || "Color no disponible"
              }
              </span> 
              <span class="product-description">${
                product.descriptionGeneral || "Descripción no disponible"
              }
              </span>
              <div class="product-price-block">
                  <div class="product-price">AR$${product.price}</div>
              </div>
              <div class="Quantity">
                <span class="Quanity-product">Cantidad: </span>
                <input type="number" name="quantity" min="1" id="${
                  product.id
                }" value="${product.quantity}" onchange="changeQuantity(event)">
              </div>
          </div>
      </div>
  `;
}
// Función para crear una tarjeta de producto favorito
function createFavoriteCard(product) {
  return `
      <div class="product-card">
          <img class="product-img" src="${product.image}" alt="${
    product.title
  }" />
          <div class="product-info">
              <span class="product-title">${product.title}</span>
              <span class="product-color">- ${
                product.color || "Color no disponible"
              }</span> 
              <span class="product-description">${
                product.descriptionGeneral || "Descripción no disponible"
              }</span>
              <div class="product-price-block">
                  <div class="product-price">AR$${product.price}</div>
              </div>
              <button class="add-to-cart-btn" onclick="addToCart('${product.id}')">Agregar a carrito</button>
          </div>
      </div>
  `;
}

// Función para agregar un producto al carrito
function addToCart(productId) {
  // Obtener los productos favoritos desde el localStorage
  let favoriteProducts = JSON.parse(localStorage.getItem("favorites")) || [];

  // Encontrar el producto en la lista de favoritos
  const found = favoriteProducts.find((each) => each.id === productId);
  if (!found) {
    console.error(`Producto con ID ${productId} no encontrado en favoritos`);
    return;
  }

  // Crear el objeto del producto para agregar al carrito
  const product = {
    id: productId,
    title: found.title,
    price: found.price,
    image: found.image,
    descriptionGeneral: found.descriptionGeneral,
    color: found.color || "Color no disponible",
    quantity: 1 // Puedes ajustar la cantidad según sea necesario
  };

  // Obtener el carrito actual del localStorage
  let cart = localStorage.getItem("cart");
  if (cart) {
    try {
      // Si el carrito existe, parsearlo a un array
      cart = JSON.parse(cart);
      if (!Array.isArray(cart)) {
        cart = [];
      }
    } catch (e) {
      // Si hay un error al parsear, inicializarlo como un array vacío
      cart = [];
    }
  } else {
    // Si el carrito no existe, inicializarlo como un array vacío
    cart = [];
  }

  // Agregar el nuevo producto al carrito
  cart.push(product);

  // Guardar el carrito actualizado en el localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Eliminar el producto de los favoritos
  favoriteProducts = favoriteProducts.filter((each) => each.id !== productId);

  // Guardar los favoritos actualizados en el localStorage
  localStorage.setItem("favorites", JSON.stringify(favoriteProducts));

  console.log(`Producto con ID ${productId} agregado al carrito y eliminado de favoritos`);

  // Actualizar la interfaz de usuario del carrito y de los favoritos
  updateCartUI();
  updateFavoritesUI();
}

// Función para actualizar la interfaz de usuario del carrito
function updateCartUI() {
  const cartContainer = document.querySelector("#cartproducts");
  if (!cartContainer) return;

  // Obtener el carrito actual del localStorage
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Limpiar el contenido actual del contenedor del carrito
  cartContainer.innerHTML = "";

  // Agregar cada producto del carrito al contenedor
  cart.forEach(product => {
    cartContainer.innerHTML += createCartCard(product);
  });
}

// Función para actualizar la interfaz de usuario de los favoritos
function updateFavoritesUI() {
  const favoritesContainer = document.querySelector("#favorites-container");
  if (!favoritesContainer) return;

  // Obtener los favoritos actuales del localStorage
  let favoriteProducts = JSON.parse(localStorage.getItem("favorites")) || [];

  // Limpiar el contenido actual del contenedor de favoritos
  favoritesContainer.innerHTML = "";

  // Agregar cada producto favorito al contenedor
  favoriteProducts.forEach(product => {
    favoritesContainer.innerHTML += createFavoriteCard(product);
  });
}

// Asegurarse de que la función esté disponible globalmente
window.addToCart = addToCart;

// Llamar a updateCartUI al cargar la página para mostrar el carrito actual
document.addEventListener("DOMContentLoaded", updateCartUI);

// Función para imprimir las tarjetas de productos en la vista
function printCartCards(products) {
  const cartContainer = document.getElementById("cartproducts");
  cartContainer.innerHTML = products.map(createCartCard).join("");
}

// Función para imprimir las tarjetas de productos favoritos en la vista
function printFavoriteCards(products) {
  const favoritesContainer = document.getElementById("favorites-container");
  favoritesContainer.innerHTML = products.map(createFavoriteCard).join("");
}

// Función para manejar el cambio de cantidad
function changeQuantity(event) {
  const input = event.target;
  const productId = input.id;
  const newQuantity = parseInt(input.value);

  // Buscar el producto en el array cartproducts
  const product = cartproducts.find((p) => p.id === productId);

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
  cartproducts.forEach((product) => {
    total += product.price * product.quantity;
  });

  // Asumiendo que hay un elemento con id 'total' para mostrar el total a pagar
  document.getElementById("total").innerHTML = createTotalTemplate(total);
}

// Llamar a la función para renderizar las tarjetas de productos del carrito
document.addEventListener("DOMContentLoaded", () => {
  printCartCards(cartproducts);
  printFavoriteCards(favoriteProducts);
  updateTotal();
  updateCartUI();
  updateFavoritesUI();
});
