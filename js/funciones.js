
const boton = document.getElementById("boton");

let carrito = JSON.parse(localStorage.getItem("productos")) || []

let carritoStorage = localStorage.getItem("carrito");

//let contenedorProductos = document.getElementById("contenedorproductos");

// const cargarProductosDesdeJSON = async () => {
//   try {
//     const response = await fetch("js/productos.json");
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error al cargar productos desde JSON:", error);
//   }
// };

// Productos Disponibles
const mostrarProductos = async () => {
  const productosJSON = JSON.parse(localStorage.getItem("productos")) || productos;

  contenedorProductos.innerHTML = "";

  productosJSON.forEach((producto) => {
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
};

const agregarAlCarrito = (producto) => {
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));

  mostrarCarrito();
};
// Productos en el carrito
const mostrarCarrito = () => {
  contenedorCarrito.innerHTML = '<h2 class="carrito">Carrito:</h2>';
  carrito.forEach((item) => {
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
};

carrito.forEach((item) => {
  const botonEliminar = contenedorCarrito.querySelector(`#${item.id}`);
  botonEliminar.addEventListener("click", () => eliminarDelCarrito(item.id));
});


const eliminarDelCarrito = (productoId) => {
  carrito = carrito.filter((item) => item.id !== productoId);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
};

mostrarProductos();
mostrarCarrito();

// contenedorProductos.addEventListener("click", (e) => {
//   if (e.target.classList.contains("agregar")) {
//     const id = e.target.id;
//     agregarAlCarrito(id);
//   }
// });

contenedorCarrito.addEventListener("click", (e) => {
  if (e.target.classList.contains("eliminar")) {
    const id = e.target.dataset.id;
    eliminarProductoDelCarrito(id);
  }
});


// document.addEventListener("DOMContentLoaded", async () => {
//   await mostrarProductos();

//   if (!localStorage.getItem("carrito") || carrito.length === 0) {
//     carrito = [];
//     actualizarLocalStorage();
//   }

//   mostrarCarrito();
// });



boton.addEventListener("click", vaciarCarrito);
boton.addEventListener("click", () => {
  localStorage.clear();
  Swal.fire("Carrito Vacío!");
});


//se me modifica la barra de navegador cuando m
// const manejarBusqueda = () => {
//     const inputBusqueda = document.getElementById('buscar-input'); // Utiliza el ID correcto para tu campo de entrada
//     const resultadosBusqueda = document.getElementById('resultados-busqueda');

//     inputBusqueda.addEventListener('input', () => {
//         const valorBusqueda = inputBusqueda.value.toLowerCase();
//         const resultados = productos.filter(producto =>
//             producto.nombre.toLowerCase().includes(valorBusqueda) ||
//             producto.categoria.toLowerCase().includes(valorBusqueda)
//         );

//         mostrarResultadosBusqueda(resultados, resultadosBusqueda);
//     });
// };

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
// };

// document.addEventListener('DOMContentLoaded', () => {
//     manejarBusqueda();
//     mostrarProductos();
// });

