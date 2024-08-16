//ACTIVIDAD #1
/*
class Product {
  constructor(id, title, price, stock, images, onsale, supplier) {
    this.id = id; // cadena de texto
    this.title = title; // cadena de texto
    this.price = price; // numérico
    this.stock = stock; // numérico
    this.images = images; // array vacío
    this.onsale = onsale; // booleano
    this.supplier = supplier; // objeto
  }
}

const prod1 = new Product(
  "id123",
  "celular",
  100000,
  2,
  "https://i.postimg.cc/Jn2C5W84/galaxy1.webp",
  true,
  { supplier: "Proveedor1" }
);

const prod2 = new Product(
  "id124",
  "celular",
  100000,
  2,
  "https://i.postimg.cc/Jn2C5W84/galaxy1.webp",
  true,
  { supplier: "Proveedor1" }
);

const prod3 = new Product(
  "id125",
  "celular",
  100000,
  2,
  "https://i.postimg.cc/Jn2C5W84/galaxy1.webp",
  true,
  { supplier: "Proveedor1" }
);

const prod4 = new Product(
  "id126",
  "celular",
  100000,
  2,
  "https://i.postimg.cc/Jn2C5W84/galaxy1.webp",
  true,
  { supplier: "Proveedor1" }
);

const products = [prod1, prod2, prod3, prod4];

// Imprimir el array completo
console.log(products);

// Imprimir el segundo elemento del array
console.log(products[1]);

// Imprimir la propiedad title del último elemento del array
console.log(products[products.length - 1].title);

//ACTIVIDAD #2
const prod5 = new Product(
  "id127",
  "tablet",
  150000,
  5,
  ["https://i.postimg.cc/Jn2C5W84/tablet1.webp"],
  true,
  { supplier: "Proveedor2" }
);

const prod6 = new Product(
  "id128",
  "laptop",
  300000,
  3,
  ["https://i.postimg.cc/Jn2C5W84/laptop1.webp"],
  false,
  { supplier: "Proveedor3" }
);

products.unshift(prod5);

products.push(prod6);

//Impresión de la lista de productos
console.log(products[0]);
console.log(products[products.length - 1]);

//ACTIVIDAD #3

const removedFirstProduct = products.shift();
console.log("Primer producto eliminado:", removedFirstProduct);

const removedLastProduct = products.pop();
console.log("Último producto eliminado:", removedLastProduct);

// Imprimir la lista de productos después de las eliminaciones
console.log("Lista de productos después de eliminar el primero y el último:");
console.log(products);

*/
//ACTIVIDAD #4
class Product {
  constructor(
    id,
    title,
    price,
    stock,
    images,
    onsale,
    supplier,
    colors,
    description
  ) {
    this.id = id; // cadena de texto
    this.title = title; // cadena de texto
    this.price = price; // numérico
    this.stock = stock; // numérico
    this.images = images; // array vacío
    this.onsale = onsale; // booleano
    this.supplier = supplier; // objeto
    this.colors = colors; // array
    this.description = description; // cadena de texto
  }
}

// Definición de productos
const prod1 = new Product(
  "id125",
  "celular",
  100000,
  2,
  [
    "https://i.postimg.cc/Jn2C5W84/galaxy1.webp",
    "https://i.postimg.cc/Jn2C5W84/galaxy2.webp",
  ],
  true,
  { supplier: "Proveedor1" },
  ["negro", "blanco"],
  "Una tablet de alta calidad con pantalla de 10 pulgadas."
);

const prod2 = new Product(
  "id126",
  "celular",
  100000,
  2,
  [
    "https://i.postimg.cc/Jn2C5W84/galaxy1.webp",
    "https://i.postimg.cc/Jn2C5W84/galaxy2.webp",
  ],
  true,
  { supplier: "Proveedor2" },
  ["amarillo", "rosa"],
  "Una tablet de alta calidad con pantalla de 10 pulgadas."
);

const prod3 = new Product(
  "id127",
  "tablet",
  150000,
  5,
  [
    "https://i.postimg.cc/Jn2C5W84/tablet1.webp",
    "https://i.postimg.cc/Jn2C5W84/tablet2.webp",
    "https://i.postimg.cc/Jn2C5W84/tablet3.webp",
  ],
  true,
  { supplier: "Proveedor2" },
  ["negro", "blanco"],
  "Una tablet de alta calidad con pantalla de 10 pulgadas."
);

const prod4 = new Product(
  "id128",
  "laptop",
  300000,
  3,
  [
    "https://i.postimg.cc/Jn2C5W84/laptop1.webp",
    "https://i.postimg.cc/Jn2C5W84/laptop2.webp",
    "https://i.postimg.cc/Jn2C5W84/laptop3.webp",
  ],
  false,
  { supplier: "Proveedor3" },
  ["gris", "negro"],
  "Una laptop potente con procesador de última generación."
);

const products = [prod1, prod2];

// Agregar prod5 y prod6 al array products
products.unshift(prod3);
products.push(prod4);

// Impresión de la lista de productos
console.log(products);
console.log("Primer producto en la lista:", products[0]);
console.log("Último producto en la lista:", products[products.length - 1]);
