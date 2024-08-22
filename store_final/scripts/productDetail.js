// Capturar el parámetro id de la URL
/*const query = location.search;
const params = new URLSearchParams(query);
const id = params.get("id");
console.log(id);*/

// Definir la función createCard
function createCard(productDetails) {
  return `
        <a class="product-card" href="../html/details.html?id=${productDetails.id}">
          <img class="product-img" src="${productDetails.imgSrc}" alt="${productDetails.title}" />
          <div class="product-info">
            <span class="product-title">${productDetails.title}</span>
            <span class="product-description">${productDetails.description}</span>
            <div class="product-price-block">
              <span class="price">${productDetails.price}</span>
              <span class="discount">${productDetails.discount}</span>
            </div>
            <div class="product-tax-policy">
              ${productDetails.taxPolicy}
            </div>
          </div>
        </a>
      `;
}

function printCards(arrayOfProducts, idSelector) {
  let productsTemplate = "";
  for (const element of arrayOfProducts) {
    productsTemplate += createCard(element);
  }
  const productsSelector = document.getElementById(idSelector);
  productsSelector.innerHTML = productsTemplate;
}

// Definir la función printDetails
function printDetails(id) {
  console.log(`ID Product: ${id}`);

  const product = products.find((each) => each.id === id);
  if (!product) {
    console.error(`Producto con id ${id} no encontrado`);
    return;
  }

  const thumbnailImages = product.images.map((images) => `
    <div class="thumbnail-container">
      <img src="${images}" alt="${product.title}" />
    </div>
  `).join("");

  const detailsTemplate = `
    <div class="product-images-block">
      <div class="product-images-miniaturas">
        ${thumbnailImages}            
      </div>
      <div class="product-image-principal">
        <img src="${product.imgSrc}" alt="Macbook Pro 15" />
      </div>
    </div>

    <div class="product-description-block">
      <h1 class="product-title">${product.title}</h1>
      <div class="product-options">
        <form class="selector">
          <fieldset>
            <legend>Opciones del Producto</legend>
            <label class="label" for="color">Color:</label>
            <select id="color" name="color">
              ${product.color.map((color) => `<option value="${color}">${color}</option>`).join("")}
            </select>
          </fieldset>
        </form>
      </div>
      <div class="detailed-description" style="margin-top: 20px;">
        <span class="section-title">Descripción</span>
        <p>${product.descriptionGeneral}</p>
        <p>Además, puedes hablar sobre la historia del producto, los materiales con los que está hecho</p>
      </div>
    </div>

    <div class="product-checkout-block">
                    <div class="checkout-container">
                        <span class="checkout-total-label">Total:</span>
                        <h2 class="checkout-total-price">$152.400</h2>
                        <p class="checkout-description">
                            Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$ 50711
                            haciendo la solicitud en AFIP.
                        </p>

                        <ul class="checkout-policy-list">
                            <li>
                                <span class="policy-icon">
                                    <img src="../img/truck.png" alt="Truck" />
                                </span>
                                <span class="policy-desc">Agrega el producto al carrito para conocer los costos de
                                    envío</span>
                            </li>
                            <li>
                                <span class="policy-icon">
                                    <img src="../img/plane.png" alt="Plane" />
                                </span>
                                <span class="policy-desc">Recibí aproximadamente entre 10 y 15 días hábiles,
                                    seleccionando envío normal</span>
                            </li>
                        </ul>

                        <div class="checkout-process">
                            <div class="top">
                                <input type="number" value="" min="1" max="10" step="1" />
                                <button class="btn-primary">Añadir al Carrito</button>
                            </div>
                        </div>
      </div>
    </div>
  `;
  const detailsSelector = document.querySelector("#details");
  if (!detailsSelector) {
    console.error("Elemento con id 'details' no encontrado en el DOM");
    return;
  }
  detailsSelector.innerHTML = detailsTemplate;
}

// Obtener el id del producto de los parámetros de la URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
if (id) {
  printDetails(id);
}

// Invocar la función printCards con el array de productos y el id del selector
printCards(productDetails, "products");
