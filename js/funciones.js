;
    const contenedorCarrito = document.getElementById('contenedor-carrito');
    const boton = document.getElementById('boton');

  

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

let carritoStorage = localStorage.getItem("carrito");


const mostrarProductos = () => {
    productos.forEach(producto => {
        contenedorProductos.innerHTML += `
            <div class="prod-container">
                <img src="${producto.img}" />
                <h2>${producto.nombre}</h2>
                <p>${producto.categoria}</p>
                <p>$${producto.precio}</p>
                <button id="${producto.id}" class="agregar">Agregar al carrito</button>
            </div>
        `;
    });
}
const mostrarCarrito = () => {
    contenedorCarrito.innerHTML = '<h2>Carrito:</h2>';
    carrito.forEach(item => {
        contenedorCarrito.innerHTML += `
            <div class="prod-container">
                <img src="${item.img}" />
                <h2>${item.nombre}</h2>
                <p>${item.categoria}</p>
                <p>$${item.precio}</p>
            </div>
        `;
    });
}
// Función para agregar un producto al carrito
const agregarAlCarrito = (id) => {
    const producto = productos.find(producto => producto.id == id);
    carrito.push(producto);
    actualizarLocalStorage();
    mostrarCarrito();
}

// Función para vaciar el carrito
const vaciarCarrito = () => {
    carrito = [];
    actualizarLocalStorage();
    mostrarCarrito();
}

// Función para actualizar el almacenamiento local con el carrito actual
const actualizarLocalStorage = () => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Event listener para agregar productos al carrito
contenedorProductos.addEventListener('click', (e) => {
        if (e.target.classList.contains('agregar')) {
            const id = e.target.id;
            agregarAlCarrito(id);
        }
    });
// Event listener para vaciar el carrito
boton.addEventListener('click', vaciarCarrito);

// Mostrar productos y carrito cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos();
    mostrarCarrito();
});