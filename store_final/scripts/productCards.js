/*
const productsSelector = document.getElementById("products");

let productsTemplate = `
<a class="product-card" href="../html/details.html">
          <img class="product-img" src="../img/mock2.jpg" alt="Macbook Pro" />
          <div class="product-info">
            <span class="product-title">Macbook Pro 15'4</span>
            <span class="product-description">Space Gray</span>
            <div class="product-price-block">
              <span class="price">$750.000</span>
              <span class="discount">50% Off</span>
            </div>
            <div class="product-tax-policy">
              Incluye impuesto País y percepción AFIP
            </div>
          </div>
        </a>
        <a class="product-card" href="../html/details.html">
          <img class="product-img" src="../img/mock2.jpg" alt="Macbook Pro" />
          <div class="product-info">
            <span class="product-title">Macbook Pro 15'4</span>
            <span class="product-description">Space Gray</span>
            <div class="product-price-block">
              <span class="price">$750.000</span>
              <span class="discount">50% Off</span>
            </div>
            <div class="product-tax-policy">
              Incluye impuesto País y percepción AFIP
            </div>
          </div>
        </a>
        <a class="product-card" href="../html/details.html">
          <img class="product-img" src="../img/mock2.jpg" alt="Macbook Pro" />
          <div class="product-info">
            <span class="product-title">Macbook Pro 15'4</span>
            <span class="product-description">Space Gray</span>
            <div class="product-price-block">
              <span class="price">$750.000</span>
              <span class="discount">50% Off</span>
            </div>
            <div class="product-tax-policy">
              Incluye impuesto País y percepción AFIP
            </div>
          </div>
        </a>
        <a class="product-card" href="../html/details.html">
          <img class="product-img" src="../img/mock2.jpg" alt="Macbook Pro" />
          <div class="product-info">
            <span class="product-title">Macbook Pro 15'4</span>
            <span class="product-description">Space Gray</span>
            <div class="product-price-block">
              <span class="price">$750.000</span>
              <span class="discount">50% Off</span>
            </div>
            <div class="product-tax-policy">
              Incluye impuesto País y percepción AFIP
            </div>
          </div>
        </a>
        <a class="product-card" href="../html/details.html">
          <img class="product-img" src="../img/mock2.jpg" alt="Macbook Pro" />
          <div class="product-info">
            <span class="product-title">Macbook Pro 15'4</span>
            <span class="product-description">Space Gray</span>
            <div class="product-price-block">
              <span class="price">$750.000</span>
              <span class="discount">50% Off</span>
            </div>
            <div class="product-tax-policy">
              Incluye impuesto País y percepción AFIP
            </div>
          </div>
        </a>
        <a class="product-card" href="../html/details.html">
          <img class="product-img" src="../img/mock2.jpg" alt="Macbook Pro" />
          <div class="product-info">
            <span class="product-title">Macbook Pro 15'4</span>
            <span class="product-description">Space Gray</span>
            <div class="product-price-block">
              <span class="price">$750.000</span>
              <span class="discount">50% Off</span>
            </div>
            <div class="product-tax-policy">
              Incluye impuesto País y percepción AFIP
            </div>
          </div>
        </a>
`;

// Asignar el contenido de productsTemplate a la propiedad innerHTML del selector productsSelector
productsSelector.innerHTML = productsTemplate;
*/

// Definir la función createCard
function createCard(product) {
  return `
      <a class="product-card" href="../html/details.html?id=${product.id}">
        <img class="product-img" src="${product.imgSrc}" alt="${product.title}" />
        <div class="product-info">
          <span class="product-title">${product.title}</span>
          <span class="product-description">${product.description}</span>
          <div class="product-price-block">
            <span class="price">${product.price}</span>
            <span class="discount">${product.discount}</span>
          </div>
          <div class="product-tax-policy">
            ${product.taxPolicy}
          </div>
        </div>
      </a>
    `;
}

/* Crear el template de productos dinámicamente
let productsTemplate = "";
for (const product of products) {
  productsTemplate += createCard(product);
}

// Seleccionar el contenedor de productos e imprimir el contenido
const productsSelector = document.getElementById("products");
productsSelector.innerHTML = productsTemplate;*/

// Definir la función printCards
function printCards(arrayOfProducts, idSelector) {
    let productsTemplate = "";
    for (const element of arrayOfProducts) {
      productsTemplate += createCard(element);
    }
    const productsSelector = document.getElementById(idSelector);
    productsSelector.innerHTML = productsTemplate;
  }
  
  // Invocar la función printCards con el array de productos y el id del selector
  printCards(products, "products");