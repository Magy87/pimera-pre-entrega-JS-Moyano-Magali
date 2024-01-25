
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
                <button class="eliminar" data-id="${item.id}">Eliminar</button>
            </div>
        `;
    });
}
const agregarAlCarrito = (id) => {
    const producto = productos.find(producto => producto.id == id);
    carrito.push(producto);
    actualizarLocalStorage();
    mostrarCarrito();
  
}

const eliminarDelCarrito = (id) => {
    carrito = carrito.filter(producto => producto.id != id);
    carrito.shift(productos);
    actualizarLocalStorage();
    mostrarCarrito();
    

}


const vaciarCarrito = () => {
    carrito = [];
    actualizarLocalStorage();
    mostrarCarrito();
}

const actualizarLocalStorage = () => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

contenedorProductos.addEventListener('click', (e) => {
    if (e.target.classList.contains('agregar')) {
        const id = e.target.id;
        agregarAlCarrito(id);
    }
});

contenedorCarrito.addEventListener('click', (e) => {
    if (e.target.classList.contains('eliminar')) {
        const id = e.target.dataset.id;
        eliminarDelCarrito(id);
    }
});

boton.addEventListener('click', vaciarCarrito);
boton.addEventListener("click", () => {
    localStorage.clear(); 
    Swal.fire("carrito vacio!");;
 
  });



document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos();
    mostrarCarrito();
});
