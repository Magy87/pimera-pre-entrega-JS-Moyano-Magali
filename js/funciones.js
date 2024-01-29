
    const contenedorCarrito = document.getElementById('contenedor-carrito');
    const boton = document.getElementById('boton');

  

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

 let carritoStorage = localStorage.getItem("carrito");

 const mostrarProductos = () => {

    contenedorProductos.innerHTML = '';

    productos.forEach(producto => {
        contenedorProductos.innerHTML += `
            <div class="prod-container">
                <img src="${producto.img}" />
                <h2 class="rojo">${producto.nombre}</h2>            
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
                <h2 class="azul">${item.nombre}</h2>
                <p>${item.categoria}</p>
                <p>$${item.precio}</p>
                <button class="eliminar" data-id="${item.id}">Eliminar</button>
            </div>
        `;
    });
}


const agregarAlCarrito = (id) => {
    const producto = productos.find(producto => producto.id == id);

    if (producto) {
        carrito.push(producto);
        actualizarLocalStorage();
        mostrarCarrito();
    } else {
        console.error("Producto no encontrado");
    }
}


const eliminarProductoDelCarrito = (id) => {
    const indice = carrito.findIndex(producto => producto.id == id);

    if (indice !== -1) {
        carrito.splice(indice, 1);
        actualizarLocalStorage();
        mostrarCarrito();
    } else {
        console.error("Producto no encontrado en el carrito");
    }
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
        eliminarProductoDelCarrito(id);
    }
});

boton.addEventListener('click', vaciarCarrito);
boton.addEventListener("click", () => {
    localStorage.clear(); 
    Swal.fire("Carrito Vacío!");;
 
  });

document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos();

    if (!localStorage.getItem('carrito') || carrito.length === 0) {
        carrito = [];
        actualizarLocalStorage();
    }

    mostrarCarrito();
});

//se me modifica la barra de navegador cuando m
// const manejarBusqueda = () => {
//     const inputBusqueda = document.getElementById('input-busqueda');
//     const resultadosBusqueda = document.getElementById('resultados-busqueda');

//     inputBusqueda.addEventListener('input', () => {
//         const valorBusqueda = inputBusqueda.value.toLowerCase();
//         const resultados = productos.filter(producto =>
//             producto.nombre.toLowerCase().includes(valorBusqueda) ||
//             producto.categoria.toLowerCase().includes(valorBusqueda)
//         );

//         mostrarResultadosBusqueda(resultados, resultadosBusqueda);
//     });
// }
// const mostrarResultadosBusqueda = (resultados, contenedor) => {
//     contenedor.innerHTML = '';

//     if (resultados.length === 0) {
//         contenedor.innerHTML = '<p>Producto no encontrado</p>';
//         return;
//     }

//     resultados.forEach(producto => {
//         contenedor.innerHTML += `
//             <div class="prod-container">
//                 <img src="${producto.img}" />
//                 <h2>${producto.nombre}</h2>
//                 <p>${producto.categoria}</p>
//                 <p>$${producto.precio}</p>
//                 <button id="${producto.id}" class="agregar">Agregar al carrito</button>
//             </div>
//         `;
//     });
// }

// document.addEventListener('DOMContentLoaded', () => {
//     manejarBusqueda();
//     mostrarProductos();
// });


