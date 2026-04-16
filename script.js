let carrito = 0;
let total = 0;

function agregarAlCarrito(precio) {
    carrito++;
    total += precio;

    document.querySelector(".nav-icons span:last-child").innerText = "🛒 (" + carrito + ")";
    
    console.log("Total:", total);
}