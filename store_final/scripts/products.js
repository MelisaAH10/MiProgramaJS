class Product {
  constructor(
    detailsUrl,
    imgSrc,
    title,
    description,
    price,
    discount,
    taxPolicy	
  ) {
    this.detailsUrl = detailsUrl;
    this.imgSrc = imgSrc;
    this.title = title;
    this.description = description;
    this.price = price;
    this.discount = discount;
    this.taxPolicy = taxPolicy;
  }
}

// Crear seis instancias de la clase Product
const prod1 = new Product(
  "../html/details.html",
  "../img/mock1.jpg",
  "Lenovo 15'4",
  "Space Gray",
  "$750.000",
  "50% Off",
  "Incluye impuesto País y percepción AFIP"
);

const prod2 = new Product(
  "../html/details.html",
  "../img/mock1.jpg",
  "HP Pavilion 15'4",
  "Space Gray",
  "$750.000",
  "50% Off",
  "Incluye impuesto País y percepción AFIP"
);

const prod3 = new Product(
  "../html/details.html",
  "../img/mock1.jpg",
  "Macbook Pro 15'4",
  "Space Gray",
  "$750.000",
  "50% Off",
  "Incluye impuesto País y percepción AFIP"
);

const prod4 = new Product(
  "../html/details.html",
  "../img/mock1.jpg",
  "Macbook Pro 15'4",
  "Space Gray",
  "$750.000",
  "50% Off",
  "Incluye impuesto País y percepción AFIP"
);

const prod5 = new Product(
  "../html/details.html",
  "../img/mock1.jpg",
  "Macbook Pro 15'4",
  "Space Gray",
  "$750.000",
  "50% Off",
  "Incluye impuesto País y percepción AFIP"
);

const prod6 = new Product(
  "../html/details.html",
  "../img/mock1.jpg",
  "Macbook Pro 15'4",
  "Space Gray",
  "$750.000",
  "50% Off",
  "Incluye impuesto País y percepción AFIP"
);

// Crear un array con las seis instancias
const products = [prod1, prod2, prod3, prod4, prod5, prod6];

