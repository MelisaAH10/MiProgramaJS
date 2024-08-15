//EJERCICIO #1
/*
const producto1 = {
  nombre: "celular",
  precio: 100000,
  stock: 2,
};

producto1.id = "id123";
producto1["foto"] = "https://i.postimg.cc/Jn2C5W84/galaxy1.webp";

console.log(producto1);
console.log(producto1.nombre);
*/

//EJERCICIO #2
/*
class Product {
  constructor(id, title, price, stock, imagenes, onsale) {
    this.id = id; // cadena de texto
    this.title = title; // cadena de texto
    this.price = price; // numérico
    this.stock = stock; // numérico
    this.images = imagenes; // array vacío
    this.onsale = onsale; // booleano
  }
}

// Ejemplo de cómo crear una instancia de la clase Product
const prod1 = new Product();
const prod2 = new Product("id123", "celular", 100000);
const prod3 = new Product("id123", "celular", 100000, 2, "https://i.postimg.cc/Jn2C5W84/galaxy1.webp", true);

console.log(prod1);
console.log(prod2);
console.log(prod3);

console.log(prod2.title);
console.log(prod3["onsale"]);
*/

//EJERCICIO #3
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

  get getSupplier() {
    return this._supplier;
  }
  set setSupplier(newName) {
    this._supplier = newName;
  }

}

const prod4 = new Product("id123", "celular", 100000, 2, "https://i.postimg.cc/Jn2C5W84/galaxy1.webp", true, { supplier: "Proveedor1" });
console.log(prod4);

// Uso del getter y setter
console.log(prod4.supplier); 
prod4.supplier = {supplier: "Proveedor2"};
console.log(prod4.supplier); 
*/

//EJERCICIO #4
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

  get getSupplier() {
    return this._supplier;
  }

  set setSupplier(newName) {
    this._supplier = newName;
  }

  // Método para vender unidades
  sellUnits(units) {
    if (units > this.stock) {
      console.log("No hay suficiente stock para vender.");
    } else {
      this.stock = this.stock - units;
      console.log(
        `Se han vendido ${units} unidades. Stock restante: ${this.stock}`
      );
    }
  }
}

const prod5 = new Product(
  "id123",
  "celular",
  100000,
  12,
  "https://i.postimg.cc/Jn2C5W84/galaxy1.webp",
  true,
  { supplier: "Proveedor1" }
);
console.log(prod5);

// Ejemplo de uso del método sellUnits
prod5.sellUnits(10); 
prod5.sellUnits(5); 
