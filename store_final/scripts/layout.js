//Definir navSelector
const navSelector = document.getElementById("nav");

//Crear variable options
const options = [
    { title: "Ofertas de la semana", linkTo: "./outlet.html", opts: ["Laptops", "Audio", "Auriculares"] },
    { title: "Cómo comprar", linkTo: "./how.html", opts: ["Formas de pago", "Envios", "Devoluciones"] },
    { title: "Costos y tarifas", linkTo: "./taxs.html", opts: ["Impuestos", "Facturación"] },
    { title: "Mis pedidos", linkTo: "./orders.html", opts: ["Pedir nuevamente", "Lista de deseos"] },
    { title: "Garantía de Entrega", linkTo: "./warranty.html", opts: [] },
  ];

// Iterar sobre options y crear elementos
/*
for (let option of options) {
  const anchor = document.createElement("a");
  anchor.className = "nav-button";
  anchor.textContent = option.title;
  anchor.href = option.linkTo;
  navSelector.appendChild(anchor);
}
*/

const footerSelector = document.querySelector("#footer");
footerSelector.style.display = "flex"; // Usar flexbox para el diseño de columnas
footerSelector.style.justifyContent = "space-between"; // Distribuir columnas uniformemente
footerSelector.style.width = "100%"; // Asegurarse de que el footer abarque todo el ancho

// Iterar sobre options y crear elementos para el pie de página
for (let option of options) {
  const columnDiv = document.createElement("div");
  columnDiv.className = "footer-column";
  columnDiv.style.margin = "20px 10px"; // Añadir margen entre columnas

  const titleAnchor = document.createElement("a");
  titleAnchor.className = "footer-title";
  titleAnchor.textContent = option.title;
  titleAnchor.href = option.linkTo;
  titleAnchor.style.color = "white";
  titleAnchor.style.fontWeight = "bold"; 
  titleAnchor.style.textDecoration = "none"; // Quitar el subrayado
  columnDiv.appendChild(titleAnchor);

  for (let opt of option.opts) {
    if (opt) {
      const optElement = document.createElement("p");
      optElement.className = "footer-option";
      optElement.textContent = opt;
      optElement.style.color = "#f0f0f5";
      columnDiv.appendChild(optElement);
    }
  }

  footerSelector.appendChild(columnDiv);
}
