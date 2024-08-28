// Función para crear el template del total a pagar
export function createTotalTemplate(total) {
  if (typeof total !== "number") {
    total = parseFloat(total) || 0;
  }
  return `
        <h2 class="total-title">Resumen del pedido</h2>
        <div class="total-amount">
          <span>Total</span>
          <span>$${total.toFixed(2)}</span>
        </div>
        <div class='product-tax-policy'>Incluye impuesto PAIS y percepción AFIP.</div>
        <button id='cart-btn'>COMPRAR</button>
      `;
}

// Función para imprimir el total en la vista
function printTotal(arrayOfProducts) {
  const totalContainer = document.getElementById("total");
  let total = 0;
  arrayOfProducts.forEach((product) => {
    total += product.price * product.quantity;
  });
  totalContainer.innerHTML = createTotalTemplate(total);
}

// Obtener los productos del carrito desde el localStorage
const cartproducts2 = JSON.parse(localStorage.getItem("cart")) || [];

// Llamar a la función para renderizar el total
printTotal(cartproducts2);

