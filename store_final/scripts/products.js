class Product {
  constructor(
    id,
    detailsUrl,
    imgSrc,
    title,
    description,
    price,
    discount,
    taxPolicy,
    color,
    descriptionGeneral,
    images	
  ) {
    this.id = id;
    this.detailsUrl = detailsUrl;
    this.imgSrc = imgSrc;
    this.title = title;
    this.description = description;
    this.price = this.parsePrice(price);
    this.discount = discount;
    this.taxPolicy = taxPolicy;
    this.color = color;
    this.descriptionGeneral = descriptionGeneral;
    this.images = images;
  }

  // Método para transformar el precio de string a número
  parsePrice(price) {
    return parseFloat(price.replace(/[^0-9.-]+/g, ""));
  }
}

// Crear seis instancias de la clase Product
const prod1 = new Product(
  "PQ01",
  "../html/details.html",
  "../img/mock1.jpg",
  "Lenovo 15'4",
  "Space Gray",
  "$750.000",
  "50% Off",
  "Incluye impuesto País y percepción AFIP",
  ["rojo", "azul", "verde"],
  "MacBook Pro es una línea de computadores portátiles de alto rendimiento de Apple Inc. que tiene como mercado objetivo los usuarios profesionales. Es el sucesor del modelo PowerBook G4.",
  ["../img/mock1.jpg", "../img/mock2.jpg"]
);

const prod2 = new Product(
  "PQ02",
  "../html/details.html",
  "../img/mock1.jpg",
  "HP Pavilion 15'4",
  "Space Gray",
  "$750.000",
  "50% Off",
  "Incluye impuesto País y percepción AFIP",
  ["rojo", "azul", "verde"],
  "MacBook Pro es una línea de computadores portátiles de alto rendimiento de Apple Inc. que tiene como mercado objetivo los usuarios profesionales. Es el sucesor del modelo PowerBook G4.",
  ["../img/mock1.jpg", "../img/mock2.jpg"]
);

const prod3 = new Product(
  "PQ03",
  "../html/details.html",
  "../img/mock1.jpg",
  "Macbook Pro 15'4",
  "Space Gray",
  "$750.000",
  "50% Off",
  "Incluye impuesto País y percepción AFIP",
  ["rojo", "azul", "verde"],
  "MacBook Pro es una línea de computadores portátiles de alto rendimiento de Apple Inc. que tiene como mercado objetivo los usuarios profesionales. Es el sucesor del modelo PowerBook G4.",
  ["../img/mock1.jpg", "../img/mock2.jpg"]
);

const prod4 = new Product(
  "PQ04",
  "../html/details.html",
  "../img/mock1.jpg",
  "Macbook Pro 15'4",
  "Space Gray",
  "$750.000",
  "50% Off",
  "Incluye impuesto País y percepción AFIP",
  ["rojo", "azul", "verde"],
  "MacBook Pro es una línea de computadores portátiles de alto rendimiento de Apple Inc. que tiene como mercado objetivo los usuarios profesionales. Es el sucesor del modelo PowerBook G4.",
  ["../img/mock1.jpg", "../img/mock2.jpg"]
);

const prod5 = new Product(
  "PQ05",
  "../html/details.html",
  "../img/mock1.jpg",
  "Macbook Pro 15'4",
  "Space Gray",
  "$750.000",
  "50% Off",
  "Incluye impuesto País y percepción AFIP",
  ["rojo", "azul", "verde"],
  "MacBook Pro es una línea de computadores portátiles de alto rendimiento de Apple Inc. que tiene como mercado objetivo los usuarios profesionales. Es el sucesor del modelo PowerBook G4.",
  ["../img/mock1.jpg", "../img/mock2.jpg"]
);

const prod6 = new Product(
  "PQ06",
  "../html/details.html",
  "../img/mock1.jpg",
  "Macbook Pro 15'4",
  "Space Gray",
  "$750.000",
  "50% Off",
  "Incluye impuesto País y percepción AFIP",
  ["rojo", "azul", "verde"],
  "MacBook Pro es una línea de computadores portátiles de alto rendimiento de Apple Inc. que tiene como mercado objetivo los usuarios profesionales. Es el sucesor del modelo PowerBook G4.",
  ["../img/mock1.jpg", "../img/mock2.jpg"]
);

// Crear un array con las seis instancias
const products = [prod1, prod2, prod3, prod4, prod5, prod6];

const productDetails = [prod1, prod2, prod3];

