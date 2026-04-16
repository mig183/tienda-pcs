let carrito = 0;
let total = 0;

function agregarAlCarrito(precio) {
    carrito++;
    total += precio;

    document.getElementById("carrito").innerText = "🛒 (" + carrito + ")";

    alert("Producto agregado al carrito");
}