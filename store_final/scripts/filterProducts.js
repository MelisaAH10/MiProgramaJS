/*
function captureText() {
    console.log("capturado");
}
*/

// Seleccionar el input de tipo texto con el id "search"
const searchSelector = document.querySelector('#search');

// Definir la función captureText
/*function captureText(event) {
    // Lógica para manejar el evento de teclado
    console.log('Tecla presionada:', event.key);
}*/

// Agregar un escuchador de eventos para el evento 'keyup'
//searchSelector.addEventListener("keyup", captureText);



/* Definir la función captureText
function captureText(event) {
  // Imprimir algunas propiedades importantes del evento
  console.log('Tecla presionada:', event.key);
  console.log('Código de la tecla:', event.code);
  console.log('Valor actual del input:', event.target.value);
}

searchSelector.addEventListener("keyup", event => captureText(event));
*/

// Definir la función captureText
function captureText(event) {
  // Guardar el valor capturado por el evento
  const searchText = event.target.value.toLowerCase();

  // Filtrar el array de productos
  const filteredProducts = products.filter(product => 
      product.title.toLowerCase().includes(searchText)
  );

  // Actualizar la vista con una nueva impresión de las tarjetas
  const productContainer = document.querySelector('#products');
  productContainer.innerHTML = ''; // Limpiar el contenedor de productos

  filteredProducts.forEach(product => {
      const productCard = document.createElement('div');
      productCard.className = 'product-card';
      productCard.innerHTML = `
          <a href="${product.detailsUrl}">
              <img src="${product.imgSrc}" alt="${product.title}" class="product-img">
          </a>
          <h2 class="product-title">${product.title}</h2>
          <p class="product-description">${product.description}</p>
          <p class="product-price">Precio: $${product.price}</p>
          <p class="product-discount">Descuento: ${product.discount}%</p>
          <p class="product-taxPolicy">Política de impuestos: ${product.taxPolicy}</p>
      `;
      productContainer.appendChild(productCard);
  });
}

// Agregar un escuchador de eventos para el evento 'keyup'
searchSelector.addEventListener("keyup", event => captureText(event));

